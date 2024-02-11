// 'use client'
// import addData from "@/firebase/firestore/addData";
// import getData from "@/firebase/firestore/getData";
import RevealComp from '@/components/reveal'
import Image from 'next/image'
import EmblaCarousel from '@/components/embla-carousel'
import AboutSection from '@/components/sections/about'

export default function Home() {

  // const handleForm = async () => {
  //   const data = {
  //     name: 'John snow',
  //     house: 'Stark'
  //   }
  //   const { result, error } = await addData('users', 'user-id', data)
  //   console.log("Creation result: " + JSON.stringify(result));
  //   const { result : getResult, error: getError } = await getData('users', 'user-id');
  //   console.log(getResult);

  //   if (error || getError) {
  //     return console.log({error, getError})
  //   }
  // }


  return (
    <>
      <RevealComp y={-10} duration='300ms' threshold={0.25}>
        <AboutSection/>
      </RevealComp>
      <RevealComp y={-10} duration='300ms' threshold={0.25}>
        <EmblaCarousel/>
        <EmblaCarousel/>
      </RevealComp>
    </>
  );
}
