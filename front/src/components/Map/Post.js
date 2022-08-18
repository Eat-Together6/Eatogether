import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { useRecoilState } from "recoil";
import locationState from "state/locationState";

const Post = (props) => {
  // const [, setLocation] = useRecoilState(locationState);
  const completHandler = (data) => {
    // console.log(data);
    props.setDaumAddress(data.roadAddress);
  };

  return (
    <div>
      <DaumPostcode autoClose onComplete={completHandler} />
    </div>
  );
};

export default Post;
