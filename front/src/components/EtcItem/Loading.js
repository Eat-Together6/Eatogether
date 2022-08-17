import React from 'react';
import styled from "styled-components";
import Spinner from "assets/images/LoadingText2.gif"


const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 110vh;
    top: 0;
    left: 0;
    background: #ffffffb7;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoadingText = styled.div`
    font-size: 1rem;
    text-align: center;
    font-family: 'BMHANNAAir';

`;

export const Loading = () => {
    return (
        <Background>
            <img src={Spinner} alt="로딩중" width="10%"  />
            <LoadingText>잠시만 기다려 주세요</LoadingText>
        </Background>
    );
};

export default Loading;