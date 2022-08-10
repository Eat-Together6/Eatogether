import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Post = (props) => {
    const [roadAddress, setRoadAddress] = useState('');
    const completHandler = (data) => {
        console.log(data);
        setRoadAddress(data.roadAddress);
  }
    props.setAddress(roadAddress);
    
  return (
    <div>
        <DaumPostcode
            autoClose
            onComplete={completHandler}
        />
    </div>
  );
};

export default Post;