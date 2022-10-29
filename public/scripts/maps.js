var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
}


function mapContent(){
    var api_key = 'O5HPFGaVzkMj71145xnGWOOa0yphijdy';
    var latAndLong = {lat: 40.7391, lng: -73.99093}; 
    var zoomLevel = 14;
    var yourAddress = 'Arvi Nahal 16,Tel Aviv';

    var map = tt.map({
        container: 'map',
        key: api_key,
        center: latAndLong,
        zoom: zoomLevel
    });

    var marker = new tt.Marker().setLngLat(latAndLong).addTo(map);
     
     // FOR CUSTOM MARKER
    //var customMarker = document.createElement('div');
    //customMarker.id = 'marker';
    //var marker = new tt.Marker({element: customMarker}).setLngLat(latAndLong).addTo(map);

    var popupOffsets = {
      top: [0, 0],
      bottom: [0, -70],
      'bottom-right': [0, -70],
      'bottom-left': [0, -70],
      left: [25, -35],
      right: [-25, -35]
    }

    var popup = new tt.Popup({offset: popupOffsets}).setHTML(yourAddress);
    marker.setPopup(popup).togglePopup();

}