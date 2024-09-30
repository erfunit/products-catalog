"use client";

import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#591dff"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loading;
