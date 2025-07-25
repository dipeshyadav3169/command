function getLocation() {
  const status = document.getElementById('status');
  const latSpan = document.getElementById('latitude');
  const lonSpan = document.getElementById('longitude');

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser.';
    return;
  }

  status.textContent = 'Getting location...';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      status.textContent = 'Location found!';
      latSpan.textContent = position.coords.latitude.toFixed(6);
      lonSpan.textContent = position.coords.longitude.toFixed(6);
    },
    (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          status.textContent = "User denied the request for Geolocation.";
          break;
        case error.POSITION_UNAVAILABLE:
          status.textContent = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          status.textContent = "The request to get user location timed out.";
          break;
        default:
          status.textContent = "An unknown error occurred.";
          break;
      }
    }
  );
}
