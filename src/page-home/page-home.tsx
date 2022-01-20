import { Component, h, State, Listen } from "@stencil/core";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

@Component({
  tag: "page-home",
  styleUrl: "page-home.css",
})
export class PageHome {
  p1: any;
  p2: any;
  gameLoop: any;
  app: any;
  auth: any;
  emailInputEl: HTMLInputElement;
  passwordInputEl: HTMLInputElement;

  @State() p1Score = 0;
  @State() p2Score = 0;
  @State() obstacles: {
    x: number;
    y: number;
    health: number;
    size: number;
  }[] = [];
  @State() isLoggedIn = false;

  getSize(el: HTMLElement | any) {
    return el?.size || el?.offsetWidth || el?.offsetHeight;
  }

  isColliding(a: any, b: any) {
    return (
      a.x < b.x + this.getSize(b) &&
      a.x + this.getSize(a) > b.x &&
      a.y < b.y + this.getSize(b) &&
      this.getSize(a) + a.y > b.y
    );
  }
  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  componentDidLoad() {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCHd7H2khO7gymnZWj1itUUnNg13H-JL0g",
      authDomain: "cj-tank-game.firebaseapp.com",
      databaseURL: "https://cj-tank-game-default-rtdb.firebaseio.com",
      projectId: "cj-tank-game",
      storageBucket: "cj-tank-game.appspot.com",
      messagingSenderId: "63758923627",
      appId: "1:63758923627:web:d3474be898b19186593e2e",
      measurementId: "G-8VQCCHE2J4",
    };

    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(this.app);
    this.auth = getAuth(this.app);

    console.log(this.app, analytics);
    this.gameLoop = setInterval(() => {
      // 1. Get all the bullets on the board
      const bullets = document.querySelectorAll(".bullet");
      bullets.forEach((bullet: HTMLElement) => {
        // 2. Check their position
        // console.log(this.p1.x, bullet.offsetLeft, bullet.classList);
        // 3. See if it intersects a tank

        // P1 HIT LOGIC
        if (
          bullet.offsetLeft > this.p1.x &&
          bullet.offsetLeft < this.p1.x + 60 &&
          bullet.offsetTop > this.p1.y &&
          bullet.offsetTop < this.p1.y + 60 &&
          !bullet.classList.contains("bullet-stick")
        ) {
          this.p2Score = this.p2Score + 1;
          this.p1.isHit();
        }

        // P2 HIT LOGIC
        if (
          bullet.offsetLeft > this.p2.x &&
          bullet.offsetLeft < this.p2.x + 60 &&
          bullet.offsetTop > this.p2.y &&
          bullet.offsetTop < this.p2.y + 60 &&
          !bullet.classList.contains("bullet-1")
        ) {
          this.p1Score = this.p1Score + 1;
          this.p2.isHit();
        }

        for (const obstacle of this.obstacles) {
          if (this.isColliding(obstacle, bullet)) {
            console.log(obstacle, bullet);
          }
        }
      });

      for (const obstacle of this.obstacles) {
        if (this.isColliding(obstacle, this.p1)) {
          this.p1.isColliding(true);
        }
        if (this.isColliding(obstacle, this.p2)) {
          this.p2.isColliding(true);
        }
      }

      // 4. See if it's an enemy bullet
    }, 1000 / 400);
    this.createObstacles();
  }

  createObstacles() {
    const obstacles = [];
    for (let i = 0; i < 9; i++) {
      obstacles.push({
        health: 5,
        x: Math.random() * 700 + 100,
        y: Math.random() * 500 + 100,
        size: Math.random() * 100,
      });
    }
    this.obstacles = obstacles;
  }

  disconnectedCallback() {
    this.gameLoop();
  }

  async logout() {
    this.isLoggedIn = false;
    return signOut(this.auth);
  }
  @Listen("submit")
  onSubmit() {
    // LOGIN CODE HERE
    console.log(this.emailInputEl.value, this.passwordInputEl.value);
  }

  render() {
    return [
      <div class="logins">
        <button onClick={() => this.logout()}>logout</button>
        {!this.isLoggedIn && (
          <button onClick={() => this.signInWithGoogle()}>
            Login with Google
          </button>
        )}
        <form>
          <input
            ref={(el) => (this.emailInputEl = el)}
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <input
            ref={(el) => (this.passwordInputEl = el)}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>,

      <div class="scoreboard">
        <span>P1: {this.p1Score}</span>
        <span>P2: {this.p2Score}</span>
      </div>,

      <div class="map">
        <stick-tank ref={(p1) => (this.p1 = p1)} />
        <tank-cj ref={(p2) => (this.p2 = p2)} />
        {this.obstacles.map(
          (obstacle) =>
            obstacle.health > 0 && (
              <span
                class="obstacle"
                style={{
                  height: `${obstacle.size}px`,
                  width: `${obstacle.size}px`,
                  left: `${obstacle.x}px`,
                  top: `${obstacle.y}px`,
                }}
              />
            )
        )}
      </div>,
    ];
  }
}
