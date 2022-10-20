let map;
let markers = [];

const setListener = ()=>{
    document.querySelectorAll(".ubicacion_individualNombres").forEach((ubicacionname, index)=>{
        ubicacionname.addEventListener("click",()=>{
            google.maps.event.trigger(markers[index],"click")
        })
    })
}

const displayListaUbicaciones = ()=>{
    let ubicacionHTML = "";
    ubicaciones.forEach(ubicacion=>{
        ubicacionHTML += `<h4 class="ubicacion_individualNombres">${ubicacion.name}</h4>`
    })
    document.getElementById("nombres_cafeterias").innerHTML=ubicacionHTML;
}

const createMarker = (coord,name, address, insta,infoWindow)=>{
    
    let html = `
        <div class="window">
            <h2>${name}</h2>

            <div class="address">
                <i class="fa-solid fa-location-dot fa-lg"></i>
                <h3>${address}</h3>
            </div>
            <div class="insta">
                <i class="fa-brands fa-instagram fa-lg"></i>
                <h3>${insta}</h3>
            </div>


        </div>    `
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

const createLocationMarkers = (infoWindow)=>{
    ubicaciones.forEach(ubicacion=>{
        let coord = new google.maps.LatLng(ubicacion.lat,ubicacion.lng);
        let name = ubicacion.name;
        let address = ubicacion.address;
        let insta = ubicacion.insta;

        createMarker(coord,name, address, insta,infoWindow);
    })

}

function initMap() {
    const infoWindow = new google.maps.InfoWindow();
    let centro = { lat: -34.56735999721554, lng: -58.4515164158263 }
  map = new google.maps.Map(document.getElementById("map"), {
    center: centro,
    zoom: 13,
  });
  
createLocationMarkers(infoWindow);

displayListaUbicaciones()

setListener();
 
}
window.initMap = initMap;





