import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components";

export default function ActionButtons() {
  return (
    <Wrapper>
      <Link href="/search">
        <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
          <ActionButtonText>Car</ActionButtonText>
        </ActionButton>
      </Link>
      <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
        <ActionButtonText>Wheels</ActionButtonText>
      </ActionButton>
      <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
        <ActionButtonText>Reserve</ActionButtonText>
      </ActionButton>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex space-x-4`;
const ActionButton = tw.div`flex-1 bg-gray-200 flex items-center justify-center flex-col rounded-lg transform hover:scale-105 transition xs:h-32 lg:52 hover:text-xl cursor-pointer`;
const ActionButtonImage = tw.img`h-3/5`;
const ActionButtonText = tw.div`font-lg`;
