import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Post = () => {
  const completHandler = (data) => {
    console.log(data);
    console.log('내가 팝업');
  }

  return (
    <>
        <DaumPostcode
          onComplete={completHandler}
        />
    </>
  );
};

export default Post;