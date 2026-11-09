import * as THREE from 'three';

export interface WorldObject {
  id: string;
  type: 'cube' | 'sphere' | 'custom';
  position: THREE.Vector3;
  scale: THREE.Vector3;
  material: string;
  semanticType: 'InteractiveObject' | 'StaticEnvironment';
}

const materialRegistry = new Map<string, THREE.Material>([
  ['basic-green', new THREE.MeshBasicMaterial({ color: 0x00ff00 })],
]);

export function getMaterial(key: string): THREE.Material {
  const mat = materialRegistry.get(key);
  if (mat === undefined) {
    throw new Error(`Material "${key}" not found in registry`);
  }
  return mat;
}

export function createMeshFromWorldObject(obj: WorldObject): THREE.Mesh {
  let geometry: THREE.Geometry;

  switch (obj.type) {
    case 'cube':
      geometry = new THREE.BoxGeometry(1, 1, 1);
      break;
    case 'sphere':
      geometry = new THREE.SphereGeometry(0.5, 32, 16);
      break;
    case 'custom':
      geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      break;
  }

  const material = getMaterial(obj.material);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(obj.position);
  mesh.scale.copy(obj.scale);
  mesh.name = obj.id;

  return mesh;
}
