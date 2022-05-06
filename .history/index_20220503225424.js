const canvas = document.getElementById('map');
const mapView = new harp.MapView({
   canvas:canvas,
   theme: "https://unpkg.com/@here/harp-map-theme@latest/resources/berlin_tilezen_night_reduced.json"
});

// center the camera to New York
mapView.lookAt({
  target: new harp.GeoCoordinates(24.527682, -74.01319808),
  zoomLevel: 17,
  tilt: 40,
});

const mapControls = new harp.MapControls(mapView);
const ui = new harp.MapControlsUI(mapControls);
canvas.parentElement.appendChild(ui.domElement);

mapView.resize(window.innerWidth, window.innerHeight);
window.onresize = () => mapView.resize(window.innerWidth, window.innerHeight);

const vectorTileDataSource = new harp.VectorTileDataSource({
   authenticationCode: 'nkUx7_cDkChlAXpIlSdaBeZxvUyHHIwSHg2F1CPDpWk',
});
mapView.addDataSource(vectorTileDataSource);