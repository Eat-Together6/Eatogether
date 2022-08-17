import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    z-index: 996;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
    background-color: rgba( 255, 255, 255, 0.9);
    width: 700px;
    height: 50px;
    border-radius: 50px;
    padding: 10px 20px;
    display: flex;
`;

export const Span1 = styled.span`
    flex: 1;
    text-align: center;
    line-height: 30px;
    font-size: 13px;
    color: #ADADAD;
`;

export const Span2 = styled.span`
    flex: 1;
    text-align: center;
    line-height: 30px;
    font-size: 13px;
    color: #288FFF;
`;