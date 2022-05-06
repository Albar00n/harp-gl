// import controls from"../js/three.min.js";
// import { MapControls, MapControlsUI } from "@here/harp-map-controls";


const canvas = document.getElementById('map');
const mapView = new harp.MapView({
   canvas:canvas,
   theme: "https://unpkg.com/@here/harp-map-theme@latest/resources/berlin_tilezen_base.json",
   projection: harp.sphereProjection,
});

// center the camera to dubai
mapView.lookAt({

  target: new harp.GeoCoordinates(25.21251, 55.2714711),
  zoomLevel: 16,
  tilt: 40,
});

const mapControls = new harp.MapControls(mapView);
// mapControls.maxTiltAngle = 90;
const ui = new harp.MapControlsUI(mapControls);
canvas.parentElement.appendChild(ui.domElement);
// const controls = new GlobeControls(map);
// controls.enable = true;

mapView.resize(window.innerWidth, window.innerHeight);
window.onresize = () => mapView.resize(window.innerWidth, window.innerHeight);

const vectorTileDataSource = new harp.VectorTileDataSource({
   authenticationCode: 'nkUx7_cDkChlAXpIlSdaBeZxvUyHHIwSHg2F1CPDpWk',
});
mapView.addDataSource(vectorTileDataSource);

const options = { title:45, distance:3000};
const coordinates = new 

