//= require_tree .

// Set up scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Set up renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth * 2, window.innerHeight * 2 );
document.body.appendChild( renderer.domElement );


// Geometry
var geometry = new THREE.BoxGeometry( 1, 1, 1 );

// Materials
var material = new THREE.MeshNormalMaterial;

// Objects
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );


camera.position.z = 5;

// Render loop
function render() {
  requestAnimationFrame( render );
  renderer.render( scene, camera );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}
render();