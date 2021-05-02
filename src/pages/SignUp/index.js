import React from 'react';

import {HeroSection} from '../../components/HeroSection/index';
import {Pricing} from '../Pricing/index';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data';

export function SignUp() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}