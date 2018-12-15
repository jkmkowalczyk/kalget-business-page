function initMap() {
    var uluru = {lat: 51.122259, lng: 17.034594};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
}