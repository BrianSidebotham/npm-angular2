/// <reference path="../../../typings/threejs/three.d.ts" />
import {Component, ElementRef, OnInit} from 'angular2/core';

@Component({
    selector: 'threeviewer',
    templateUrl: 'app/components/threeviewer/threeviewer.component.html'
})
export class ThreeViewerComponent implements OnInit {
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;
    hostElement: ElementRef;
    grid: THREE.GridHelper;
    mousex:number;
    mousey:number;

    constructor(el:ElementRef) {
        this.hostElement = el;
    }

    ngOnInit() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-100, 100, 100, -100, -1000, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true});
        this.renderer.setSize(800, 600);
        this.renderer.setClearColor(0xFF000000,1);
        this.hostElement.nativeElement.firstElementChild.appendChild(this.renderer.domElement);
        this.addGrid(100, 10);
    }

    addGrid( size:number, step:number ) {
        // Create a grid of size, using step width
        var gridGeometry: THREE.Geometry = new THREE.Geometry();
        var gridMaterial: THREE.LineBasicMaterial = new THREE.LineBasicMaterial({
            color: 0xFFFFFF,
            opacity: 1
        })

        for( var s = -size; s <= size; s += step ) {
            gridGeometry.vertices.push( new THREE.Vector3( s, -size, 0 ) );
            gridGeometry.vertices.push( new THREE.Vector3( s, size, 0 ) );

            gridGeometry.vertices.push( new THREE.Vector3( -size, s, 0 ) );
            gridGeometry.vertices.push( new THREE.Vector3( size, s, 0 ) );
        }

        var grid = new THREE.LineSegments( gridGeometry, gridMaterial );
        this.scene.add(grid);
        this.onSceneChange();
    }

    onMouseMove(event:MouseEvent) {
        this.mousex = event.offsetX;
        this.mousey = event.offsetY;
        /* TODO: Create an angular2 custom event here... */
    }

    onSceneChange( ) {
        this.camera.lookAt(this.scene.position);
        this.renderer.render( this.scene, this.camera );
    }
}
