function initMap() {
	const element = document.getElementById('map');

	const options = {
		zoom: 10,
		center: {lat: 50.447914, lng: 30.522192}
	};

	const myMap = new google.maps.Map(element, options);

	const marker = new google.maps.Marker({
		position: {lat: 50.447914, lng: 30.522192},
		map: myMap
	});

	const InfoWindow = new google.maps.InfoWindow({
		content: '<h1>Our barbershop locate here!</h1>'
	});

  marker.addListener('click', () => {
    InfoWindow.open(myMap, marker);
  })

};
