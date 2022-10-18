let map;
let markers = [];

const displayListaUbicaciones = ()=>{
    let ubicacionHTML = "";
    ubicaciones.forEach(ubicacion=>{
        ubicacionHTML += `<h4>${ubicacion.name}</h4>`
    })
    document.getElementById("nombres_cafeterias").innerHTML=ubicacionHTML;
}

const createMarker = (coord,name)=>{
    let html = `<h3>${name}</h3>`
    const marker = new google.maps.Marker({
        position: coord,
        map:map,
    })
    google.maps.event.addListener(marker,"click",()=>{
        infoWindow.setContent(html);
        infoWindow.open(map,marker)
    })
    markers.push(marker)
}

const createLocationMarkers = ()=>{
    ubicaciones.forEach(ubicacion=>{
        let coord = new google.maps.LatLng(ubicacion.lat,ubicacion.lng);
        let name = ubicacion.name;
        createMarker(coord,name);
    })

}

function initMap() {
    let centro = { lat: -34.56735999721554, lng: -58.4515164158263 }
  map = new google.maps.Map(document.getElementById("map"), {
    center: centro,
    zoom: 13,
  });

 createLocationMarkers();

infoWindow = new google.maps.InfoWindow();
displayListaUbicaciones()
 
 
}
window.initMap = initMap;





