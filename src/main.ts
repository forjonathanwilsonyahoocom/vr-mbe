import * as THREE from 'three'
import { XRButton } from 'three/examples/jsm/webxr/XRButton'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.xr.enabled = true
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

function animate() {
  renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  })
}

document.body.appendChild(XRButton.createButton(renderer))
animate()
