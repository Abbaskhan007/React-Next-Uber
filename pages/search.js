import React,{useState,useEffect} from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";

export default function search() {
  const [pickup,setPickup] = useState('');
  const [dropoff,setDropoff] = useState('');
  console.log("Inputs:",pickup,dropoff);
  return (
    <Wrapper>
      <BackButtonContainer>
        <Link href="/">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </BackButtonContainer>
      <TopContainer>
        <LinesContainer>
          <Circle></Circle>
          <Line> </Line>
          <Rectangle></Rectangle>
        </LinesContainer>
        <InputContainer>
          <InputField value={pickup} onChange={e=>setPickup(e.target.value)} placeholder="Enter Pickup Location" />
          <InputField value={dropoff} onChange={e=>setDropoff(e.target.value)} placeholder="Where to?" />
        </InputContainer>
        <PlusButton src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </TopContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <Link href={{pathname:"/confirm",query:{pickup,dropoff}}}>
        <ButtonContainer>
          <ConfirmButton>Confirm Location</ConfirmButton>
        </ButtonContainer>
      </Link>
    </Wrapper>
  );
}

const TopContainer = tw.div`flex items-center space-x-4 bg-white py-4 px-14`;
const LinesContainer = tw.div`flex flex-col items-center ml-4`;
const Line = tw.div`bg-gray-500 w-1 my-1 rounded-lg h-10`;
const Rectangle = tw.div`h-2 w-2 bg-black`;
const Circle = tw.div`h-2 w-2 bg-gray-500 rounded-full`;
const PlusButton = tw.img`h-12 w-12 bg-gray-200 rounded-full p-2 cursor-pointer`;
const Wrapper = tw.div`my-4 bg-gray-200 h-screen `;

const InputContainer = tw.div`flex flex-col space-y-2 flex-1`;

const InputField = tw.input`bg-gray-200 p-2`;

const SavedPlaces = tw.div`flex items-center bg-white my-3 px-14 py-1`;
const StarIcon = tw.img`h-10 w-10 bg-gray-400 cursor-pointer p-2 rounded-full mr-2`;

const ConfirmButton = tw.button`bg-black text-white text-center w-full box-border p-2 text-lg font-semibold`;

const ButtonContainer = tw.div`flex-1 mx-14 `;

const BackButtonContainer = tw.div`bg-white px-14`;
const BackButton = tw.img`h-10 w-10 cursor-pointer -mt-4`;
