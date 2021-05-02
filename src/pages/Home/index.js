import React from 'react';
import { HeroSection } from '../../components/HeroSection';
import { Pricing } from '../Pricing';

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour
} from './data';

export function Home () {
  return(
    <>
      <HeroSection {...homeObjOne}/>
      <HeroSection {...homeObjThree}/>
      <HeroSection {...homeObjTwo}/>
      <Pricing />
      <HeroSection {...homeObjFour}/>
    </>
  );
}