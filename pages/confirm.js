import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import SelectRide from "./components/SelectRide";
import { useRouter } from "next/router";
import { carList } from "../Data/carList";
import Link from "next/link";

export default function Confirm() {
  const [pickupCoordinates, setPickupCoordinates] = useState([0,0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0]);
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  console.log(pickup, dropoff);

  const getPickupCordinates = () => {
    const params = new URLSearchParams({
      access_token:
        "pk.eyJ1IjoiYWJpNzU2IiwiYSI6ImNrdXhxNXYyNTBpcDYybnF3bTNzd2d4dnMifQ.OjTnDn3jKSzkIY6hUwVjeA",
      limit: 1,
    });
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?${params}`
    )
      .then(res => res.json())
      .then(data => {
        setPickupCoordinates(data.features[0].center);
      });
  };
  const getDropoffCoordinates = () => {
    const params = new URLSearchParams({
      access_token:
        "pk.eyJ1IjoiYWJpNzU2IiwiYSI6ImNrdXhxNXYyNTBpcDYybnF3bTNzd2d4dnMifQ.OjTnDn3jKSzkIY6hUwVjeA",
      limit: 1,
    });
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?${params}`
    )
      .then(res => res.json())
      .then(data => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCordinates();
    getDropoffCoordinates();
  }, []);

  console.log("Coordinates", pickupCoordinates, dropoffCoordinates);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <Title>Choose a Ride or swipe up for more</Title>
        <CarList>
          {carList.map((car, index) => (
            <SelectRide
              pickupCoordinates={pickupCoordinates}
              dropoffCoordinates={dropoffCoordinates}
              key={index}
              car={car}
            />
          ))}
        </CarList>
        <ButtonContainer>
          <ConfirmButton>Confirm Ride</ConfirmButton>
        </ButtonContainer>
      </RideContainer>
      <BackButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </BackButtonContainer>
    </Wrapper>
  );
}

const Wrapper = tw.div`h-screen flex flex-col`;
const RideContainer = tw.div`flex-1 h-1/2 overflow-y-scroll flex flex-col`;
const Title = tw.div`text-gray-500 text-sm text-center flex-1 py-2 border-b mb-4`;
const CarList = tw.div`overflow-y-scroll`;
const ConfirmButton = tw.button`bg-black text-white text-center w-full box-border p-2 text-lg `;

const ButtonContainer = tw.div`flex-1 mx-16 my-4`;

const BackButtonContainer = tw.div`bg-white p-1  rounded-full absolute top-3 left-3 `;
const BackButton = tw.img`h-9 w-9 cursor-pointer`;
