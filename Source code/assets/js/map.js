function initialize() {
    var myLatlng = new google.maps.LatLng(58.350328435259705, 11.931058100697843); 
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map(
        document.getElementById('map-canvas'),
        mapOptions
    );
    var contentString =
    '<div style="width: 300px; height:180px;">'+
    '<h3 style="font-size: 45px;">Come visit us!</h3>'+
    '<address style="line-height: 1.6rem;">'+
        'Kampenhofsgatan 2'+
        '<br>'+
        '451 50 Uddevalla'+
    '</address>'+
    '</div>'
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Kampenhof Resecentrum',
    });
    infowindow.open(map, marker);
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}