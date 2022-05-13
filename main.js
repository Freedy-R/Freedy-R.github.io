
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

const txtLoader = new THREE.TextureLoader();
const audio = new THREE.AudioListener();
const audioLoader = new THREE.AudioLoader();
const bgSound = new THREE.Audio(audio);

//Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(1255);
renderer.render(scene, camera);

//Light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(50, 15, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);

scene.add(lightHelper, ambientLight);
const space = new THREE.TextureLoader().load("Addons/Images/space2.jpg");
scene.background = space;

const controls = new OrbitControls(camera, renderer.domElement);
//controls.maxDistance = 730;
// controls.minDistance = 240;
//Background Stars
function Stars() {
  const starGeometry = new THREE.SphereGeometry(0.17, 8, 8);
  const starMaterial = new THREE.MeshStandardMaterial({ color: 0xf7ca18 });
  const star = new THREE.Mesh(starGeometry, starMaterial);
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(400));
  star.position.set(x, y, z);
  function animateStar() {
    requestAnimationFrame(animateStar);
    star.position.z += 0.01;
  }
  animateStar();
  scene.add(star);
}
Array(1000).fill().forEach(Stars);

const sunBaseColor = txtLoader.load("Addons/3D models/planets/sun/Sun.jpg");
const mercuryTexture = txtLoader.load(
  "Addons/3D models/planets/mercury/mercury.jpg"
);
const VenusTexture = txtLoader.load("Addons/3D models/planets/venus/Venus.jpg");

const EarthTextureDay = txtLoader.load(
  "Addons/3D models/planets/earth/earthDay.jpg"
);
//const EarthTextureNight = txtLoader.load("Addons/3D models/planets/earth/earthNight.jpg");
const EarthNormal = txtLoader.load(
  "Addons/3D models/planets/earth/earthNormal.tif"
);

const MarsTexture = txtLoader.load("Addons/3D models/planets/mars/8k_mars.jpg");
const JupiterTexture = txtLoader.load(
  "Addons/3D models/planets/jupiter/8k_jupiter.jpg"
);
const SaturnTexture = txtLoader.load(
  "Addons/3D models/planets/saturn/8k_saturn.jpg"
);
const SaturnRing_Texture = txtLoader.load(
  "Addons/3D models/planets/saturn/saturnRing.jpg"
);
const UranusTexture = txtLoader.load(
  "Addons/3D models/planets/uranus/2k_uranus.jpg"
);
const NeptuneTexture = txtLoader.load(
  "Addons/3D models/planets/neptune/2k_neptune.jpg"
);

//Sun
let sunRad = 109;
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(sunRad, 15, 15),
  new THREE.MeshStandardMaterial({ map: sunBaseColor })
);
scene.add(sun);

//Mercury

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(2.4397, 30, 30),
  new THREE.MeshStandardMaterial({ map: mercuryTexture })
);
const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercury);
scene.add(mercuryObj);
mercury.position.x = sunRad + 5.8;

//Venus
const venus = new THREE.Mesh(
  new THREE.SphereGeometry(6.0518, 15, 15),
  new THREE.MeshStandardMaterial({ map: VenusTexture })
);
const venusObj = new THREE.Object3D();
venusObj.add(venus);
scene.add(venusObj);
venus.position.x = sunRad + 16.8;

//Earth
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(6.371008, 15, 15),
  new THREE.MeshStandardMaterial({
    map: EarthTextureDay,
    normalMap: EarthNormal,
  })
);
const earthObj = new THREE.Object3D();
earthObj.add(earth);
scene.add(earthObj);
earth.position.x = sunRad + 32.0;
earth.rotation.x = 63;

//Mars
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(3.3895, 15, 15),
  new THREE.MeshStandardMaterial({ map: MarsTexture })
);
const marsObj = new THREE.Object3D();
marsObj.add(mars);
scene.add(marsObj);
mars.position.x = sunRad + 45.8;

//Jupiter
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(69.911, 15, 15),
  new THREE.MeshStandardMaterial({ map: JupiterTexture })
);
const jupiterObj = new THREE.Object3D();
jupiterObj.add(jupiter);
scene.add(jupiterObj);
jupiter.position.x = sunRad + 125;

//Saturn
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(58.232, 15, 15),
  new THREE.MeshStandardMaterial({ map: SaturnTexture })
);
const saturnObj = new THREE.Object3D();
saturnObj.add(saturn);
scene.add(saturnObj);
saturn.position.x = sunRad + 280;

//Uranus
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(25.362, 15, 15),
  new THREE.MeshStandardMaterial({ map: UranusTexture })
);
const uranusObj = new THREE.Object3D();
uranusObj.add(uranus);
scene.add(uranusObj);
uranus.position.x = sunRad + 377.1;

//Neptune
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(24.622, 15, 15),
  new THREE.MeshStandardMaterial({ map: NeptuneTexture })
);
const neptuneObj = new THREE.Object3D();
neptuneObj.add(neptune);
scene.add(neptuneObj);
neptune.position.x = sunRad + 480.8;

let cords = document.getElementById("coords");
function animate() {
  requestAnimationFrame(animate);
  // sun.rotateY(0.001997);
  // mercuryObj.rotateY(0.0474);
  // venusObj.rotateY(0.035);
  // earthObj.rotateY(0.0298);
  // marsObj.rotateY(0.0241);
  // jupiterObj.rotateY(0.0131);
  // saturnObj.rotateY(0.0097);
  // uranusObj.rotateY(0.0068);
  // neptuneObj.rotateY(0.0054);
  renderer.render(scene, camera);
  controls.update();
}
animate();

//cords.innerHTML = "Camera posX: " + camera.position.x +"<br>Camera posY: " + camera.position.y +"<br>Camera posZ: "+camera.position.z;
sun.addEventListener("click", function () {
  console.log("wciśnięto");
});

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

//Display planet mode
let change = false;
const solarSys = document.getElementById("bg");
const sPlanets = document.getElementById("full");
const sPlanetsChanegeSizePicture = document.getElementById("changeScreen");
sPlanets.addEventListener("click", ShowPlanets, false);
function ShowPlanets() {
  if (change == false) {
    solarSys.style.zIndex = 1;
    sPlanets.style.zIndex = 2;
    sPlanetsChanegeSizePicture.src = "icon/minimize.png";
    change = true;
  } else {
    solarSys.style.zIndex = -1;
    sPlanets.style.zIndex = 1;
    sPlanetsChanegeSizePicture.src = "icon/maximalize.png";
    change = false;
  }
}

//Background music
let musicPlay = true;
audioLoader.load("../Addons/music/music2.mp3", function (buffer) {
  bgSound.setBuffer(buffer);
  bgSound.setLoop(true);
  bgSound.setVolume(0.0235);
  bgSound.play();
});

const musicOff = document.getElementById("musicOff");
const musicPicture = document.getElementById("musicOff_Change");
musicOff.addEventListener("click", Music, false);
function Music() {
  if (musicPlay == true) {
    bgSound.pause();
    musicPicture.src = "icon/volume-mute.png";
    musicPlay = false;
  } else {
    bgSound.play();
    musicPicture.src = "icon/volume.png";
    musicPlay = true;
  }
}
