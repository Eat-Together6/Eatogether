import styled from "styled-components";

export const Wrapper = styled.div`
    z-index: 998;  
`;

export const Nav = styled.nav`
    background-color: #FF8743;
    width: 100vw;
    height: 70px;
    padding: 15px 50px;
    text-align: center;
    color: white;
    font-weight: bold;
`;

export const Span = styled.span`
    > * {
        &{
            line-height: 40px;
            font-family: 'BMHANNAAir';
        }
    }
    &:first-child {
        float: left;
    };
    &:last-child {
        float: right;
    };
`;

