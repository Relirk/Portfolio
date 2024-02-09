'use client'
import Image from "next/image";
import addData from "@/firebase/firestore/addData";
import getData from "@/firebase/firestore/getData";
import { SliderHome } from '@/components/slider/index';

export default function Home() {

  const handleForm = async () => {
    const data = {
      name: 'John snow',
      house: 'Stark'
    }
    const { result, error } = await addData('users', 'user-id', data)
    console.log("Creation result: " + JSON.stringify(result));
    const { result : getResult, error: getError } = await getData('users', 'user-id');
    console.log(getResult);

    if (error || getError) {
      return console.log({error, getError})
    }
  }


  return (
    <SliderHome />
  );
}
