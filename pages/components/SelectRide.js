import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

export default function SelectRide({
  car,
  pickupCoordinates,
  dropoffCoordinates,
}) {
  const [duration,setDuration] = useState('');
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYWJpNzU2IiwiYSI6ImNrdXhxNXYyNTBpcDYybnF3bTNzd2d4dnMifQ.OjTnDn3jKSzkIY6hUwVjeA`
    ).then(res=>res.json()).then(data=>setDuration(data?.routes[0]?.duration));
  }, [pickupCoordinates,dropoffCoordinates]);
  return (
    <Wrapper>
      <RideImg src={car?.imgUrl} />
      <RideInfo>
        <CarName>{car?.service}</CarName>
        <Distance>3 min away</Distance>
      </RideInfo>
      <Price>{`$ ${((duration* car?.multiplier)/60).toFixed(2)}`}</Price>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex items-center my-1 px-16 hover:bg-gray-200 transform hover:scale-105 transition cursor-pointer ease-out duration-500`;
const RideImg = tw.img`h-16 w-16`;
const RideInfo = tw.div`flex flex-col flex-1 mx-4`;
const CarName = tw.span`text-sm font-semibold`;
const Distance = tw.span`text-xs text-blue-600`;
const Price = tw.div``;
