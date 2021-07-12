import { Scene, PerspectiveCamera, WebGLRenderer, SphereGeometry, MeshBasicMaterial, Mesh } from 'three';

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();

const geometry = new SphereGeometry(5, 20, 20);
const material = new MeshBasicMaterial({ color: '#f0af00'});
const mesh = new Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 20;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
