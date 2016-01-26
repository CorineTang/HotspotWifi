var geoMapContainer;

$(function() {
	setTimeout(initGeolocalisationMap, 0);
});

function initGeolocalisationMap() {
	geoMapContainer = L.map('geolocalisation-map').setView([48.856578, 2.351828], 12);
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', 
		{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(geoMapContainer);
	// var popup = L.popup();
 //    popup
 //        .setLatLng(e.latlng)
 //        .setContent("You are here" + latlng.toString())
 //        .openOn(geoMapContainer);
 	geoMapContainer.locate({setView:true});
	
};