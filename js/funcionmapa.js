window.iniciarMapa = function (){
    var coord = {lat:-33.51887359002888 ,lng: -70.79441580691869};
    var map = new google.maps.Map(document.getElementById("mapa"),{
      zoom: 16,
      center: coord, 
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
} 