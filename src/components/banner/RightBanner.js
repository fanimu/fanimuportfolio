import React from 'react';
import { bannerImg } from '../../assets/index';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img className="w-[380px] h-[400px] lgl:w-[480px] lgl:h-[580px] z-10" src={bannerImg} alt="bannerImg" />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[380px] lgl:h-[380px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
