import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import {useRouter} from "next/router";

export default function Login() {
    const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        router.push("/");
      } else {

      }
    });
  }, []);
  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
      <Title>Login to access your account</Title>
      <LoginImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
   
        <LoginButton onClick={()=> signInWithPopup(auth,provider)}>Sign In with google</LoginButton>
   
    </Wrapper>
  );
}

const Wrapper = tw.div`w-[600px] flex flex-col  h-screen mx-auto text-center justify-center -mt-4`;
const UberLogo = tw.img`h-28 object-contain`;
const Title = tw.div`text-gray-500 text-4xl`;
const LoginImage = tw.img``;
const LoginButton = tw.button`w-full bg-black text-white p-2 rounded-sm text-xl mt-4`;
