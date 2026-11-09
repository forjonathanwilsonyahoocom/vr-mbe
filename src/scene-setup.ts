import * as THREE from 'three';

export interface SceneSetup {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
}

export function setupScene(): SceneSetup {
  const scene = new THREE.Scene();

  const aspect =
    typeof window !== 'undefined' && window.innerWidth > 0
      ? window.innerWidth / window.innerHeight
      : 16 / 9;
  const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
  camera.position.set(0, 0, 5);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });

  return { scene, camera, renderer };
}
