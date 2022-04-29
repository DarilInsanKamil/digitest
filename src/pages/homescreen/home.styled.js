import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    position: relative;
    background-color: #fff;
`
export const Card = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 15px 20px;
    margin: ${props => props.m || "0px"};
    border-radius: 5px;
    background-color: ${props => props.bg || "rgba(190, 214, 0, 1)"};
`
export const Line = styled.View`
    height: 33px;
    width: 1px;
    border-radius: 5px;
    background-color: ${props => props.bg || "#fff"};
`

export const Gap = styled.View`
    height: ${props => props.h || "0px"};
    width: ${props => props.w || "0px"};
`
export const MainMenu = styled.View`
    margin: 0px 15px;
`

export const Feature = styled.View`
    flex-wrap: wrap;

`
export const SubFeature = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0px;
    width: 100%;
`
export const NavigationBar = styled.View`
    position: absolute;
    bottom: 0px;
`