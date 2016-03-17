/// <reference path="../../../typings/threejs/three.d.ts" />
import {Component, ElementRef, OnInit} from 'angular2/core';

@Component({
    selector: 'threeviewer',
    templateUrl: 'app/components/threeviewer/threeviewer.component.html'
})
export class ThreeViewerComponent implements OnInit {
    renderer: THREE.WebGLRenderer;
    hostElement: ElementRef;
    mousex:Number;
    mousey:Number;

    constructor(el:ElementRef) {
        this.hostElement = el;
    }

    ngOnInit() {
        this.renderer = new THREE.WebGLRenderer({ alpha: true});
        this.renderer.setSize(800, 600);
        this.renderer.setClearColor(0xFFAAAAFF,1);
        this.hostElement.nativeElement.firstElementChild.appendChild(this.renderer.domElement);
        this.renderer.clear();
    }

    onMouseMove(event:MouseEvent) {
        this.mousex = event.offsetX;
        this.mousey = event.offsetY;
    }
}
