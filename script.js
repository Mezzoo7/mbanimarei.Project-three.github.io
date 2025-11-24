function showQuestions() {
  alert("If you have questions, contact me at:\n<your email>");
}

// Map function
function initMap() {
  const location = { lat: 43.6532, lng: -79.3832 }; // Toronto example

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location
  });

  // Add a marker feature
  const marker = new google.maps.Marker({
    position: location,
    map: map
  });

  // Another feature (info window)
  const info = new google.maps.InfoWindow({
    content: "My map feature!"
  });

  marker.addListener("click", () => {
    info.open(map, marker);
  });
}
