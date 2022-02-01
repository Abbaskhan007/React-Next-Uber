import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import ActionButtons from "./components/ActionButtons";
import Map from "./components/Map";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      
      if (user) {
        setUser({
          username: user.displayName,
          photoUrl: user.photoURL
        })
      } else {
        setUser(null);
        router.push("/login")
      }
    });
  }, []);
  console.log("Photo",user?.photoUrl)
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user?.username}</Name>
            <ProfileImage onClick={()=>signOut(auth)} src={user?.photoUrl} />
          </Profile>
        </Header>
        <ActionButtons />
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;
const ActionItems = tw.div`
  flex-1 lg:px-14 py-4
// `;

const Header = tw.div`flex items-center justify-between`;
const UberLogo = tw.img`h-28`;
const Profile = tw.div`flex items-center`;
const ProfileImage = tw.img`w-12 h-12  rounded-full mx-4 border border-gray-200 p-px cursor-pointer`;
const Name = tw.div`text-sm`;
// var polyline = new L.Polyline([
//   [start.lat, start.lng],
//   [finish.lat, finish.lng]
// ]).addTo(map);