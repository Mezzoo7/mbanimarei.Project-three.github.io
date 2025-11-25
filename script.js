// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Questions button alert
  const questionBtn = document.getElementById("questionBtn");

  if (questionBtn) {
    questionBtn.addEventListener("click", () => {
      alert("If you have questions, contact me at:\nmoath@example.com");
    });
  }
});

// Google Maps initialization function
function initMap() {
  const mapOptions = {
    center: { lat: 41.8781, lng: -87.6298 }, 
    zoom: 12
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const marker = new google.maps.Marker({
    position: { lat: 41.8781, lng: -87.6298 },
    map: map,
    title: "My Location"
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Hello!</h3><p>This is my location.</p>"
  });

  marker.addListener("click", () => infoWindow.open(map, marker));

  const circle = new google.maps.Circle({
    map: map,
    center: { lat: 41.8781, lng: -87.6298 },
    radius: 1000,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    strokeColor: "#FF0000",
    strokeOpacity: 0.5
  });

  new google.maps.Polyline({
    path: [
      { lat: 41.88, lng: -87.63 },
      { lat: 41.89, lng: -87.62 }
    ],
    geodesic: true,
    strokeColor: "#0000FF",
    strokeOpacity: 1.0,
    strokeWeight: 2,
    map: map
  });
}
