/// <reference path="../../../typings/threejs/three.d.ts" />
import {Component, ElementRef, OnInit} from 'angular2/core';

@Component({
    selector: 'threeviewer',
    templateUrl: 'app/components/threeviewer/threeviewer.component.html'
})
export class ThreeViewerComponent implements OnInit {
    renderer: THREE.WebGLRenderer;
    hostElement: ElementRef;
    constructor(el:ElementRef) {
        this.hostElement = el;
    }

    ngOnInit() {
        this.renderer = new THREE.WebGLRenderer({ alpha: true});
        this.renderer.setSize(500,500);
        this.renderer.setClearColor(0xFFAAAAFF,1);
        this.hostElement.nativeElement.appendChild(this.renderer.domElement);
        this.renderer.clear();
    }
}
