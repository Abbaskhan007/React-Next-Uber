import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJpNzU2IiwiYSI6ImNrdXhxNXYyNTBpcDYybnF3bTNzd2d4dnMifQ.OjTnDn3jKSzkIY6hUwVjeA";

export default function Map({pickupCoordinates, dropoffCoordinates}) {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    pickupCoordinates && addMarker(map,pickupCoordinates);

    dropoffCoordinates && addMarker(map,dropoffCoordinates);
    if(pickupCoordinates && dropoffCoordinates){
      map.fitBounds([pickupCoordinates,dropoffCoordinates],{padding:75});
    }
    
  }, [pickupCoordinates,dropoffCoordinates]);

  const addMarker = (map,coordinates) =>{
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
  }
  
  return <Wrapper id="map"></Wrapper>;
}

const Wrapper = tw.div`
flex-1 bg-red-500
`;
