import { useEffect } from 'react';

const Location = () => {
  useEffect(() => {
    const mapOptions = {
      center: { lat: 40.7128, lng: -74.006 }, // Координати для Нью-Йорка (початкові координати)
      zoom: 12,
    };

    const map = new window.google.maps.Map(
      document.getElementById('map'),
      mapOptions
    );

    // Додайте маркер для позначення конкретної локації
    new window.google.maps.Marker({
      position: { lat: 40.7128, lng: -74.006 },
      map: map,
      title: 'Моя конкретна локація',
    });
  }, []);
  return (
    <section>
      <h2>Gdzie nas szukać</h2>
      <div id="map" style={{ height: '400px' }}></div>
    </section>
  );
};

// import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// const Map = withGoogleMap(props => (
//   <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//     <Marker position={{ lat: -34.397, lng: 150.644 }} />
//   </GoogleMap>
// ));

// const MyMapComponent = () => (
//   <Map
//     containerElement={<div style={{ height: '400px' }} />}
//     mapElement={<div style={{ height: '100%' }} />}
//   />
// );

export default Location;
