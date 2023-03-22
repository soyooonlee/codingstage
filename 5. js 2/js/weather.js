function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
}
function onGeoError() {

}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
