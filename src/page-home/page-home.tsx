import { Component, h } from '@stencil/core';


@Component({
    tag: 'page-home',
    styleUrl: 'page-home.css'
})
export class PageHome {
    
    render() {
        return (
            <div id="stickman">
            <div class="leg1"></div>
            <div class="leg2"></div>
            <div class="arm1"></div>
            <div class="arm2"></div>
            <div class="head"></div>
            <div class="body"></div>
        </div>
        );
    }
}
