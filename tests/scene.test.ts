import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { setupScene } from '../src/scene-setup';
import { WorldObject, createMeshFromWorldObject } from '../src/world-model';

describe('3D Scene Initialization', () => {
  it('should initialize a valid scene, camera, and renderer', () => {
    const { scene, camera, renderer } = setupScene();
    expect(scene).toBeInstanceOf(THREE.Scene);
    expect(camera).toBeInstanceOf(THREE.PerspectiveCamera);
    expect(renderer).toBeInstanceOf(THREE.WebGLRenderer);
  });

  it('should successfully add a basic object to the scene', () => {
    const { scene } = setupScene();
    const obj: WorldObject = {
      id: 'test-cube',
      type: 'cube',
      position: new THREE.Vector3(0, 0, 0),
      scale: new THREE.Vector3(1, 1, 1),
      material: 'basic-green',
      semanticType: 'StaticEnvironment',
    };
    const mesh = createMeshFromWorldObject(obj);
    scene.add(mesh);
    expect(scene.children).toContain(mesh);
    expect(scene.children[0]).toBeInstanceOf(THREE.Mesh);
  });
});
