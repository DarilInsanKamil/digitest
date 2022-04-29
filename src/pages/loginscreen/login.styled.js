import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 0px 24px;
    justify-content: center;
    background-color: #fff;
`
export const LogoWrapper = styled.View`
    align-items: center;
`
export const LogoImage = styled.Image`
    width: 240px;
    height: 120px;
`
export const TextLogo = styled.Text`
    font-size: ${props => props.sz || "15px"};
    color: rgba(50, 63, 75, 1);
    font-family: Baloo2_400Regular;
`
export const Gap = styled.View`
    height: ${props => props.h || "4px"};
    width: ${props => props.w || "0px"};
`
export const Txt = styled.Text`
    font-size: 15px;
    font-family: Baloo2_400Regular;
    color: ${props => props.c || "rgba(50, 63, 75, 1)"}
`
export const Password = styled.View`
    align-items: flex-end;
`