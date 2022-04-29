import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';


const IconWrapper = styled.View`
    justify-content: center;
    align-items: center;
`
const BorderIcon = styled.View`
    background-color: ${props => props.bg || "rgba(0, 0, 0, 0.02)"};
    padding: 18px;
    border-radius: 8px;
    align-self: flex-start;
    margin-bottom: 7px;
`
const Icon = styled.Image`
    width: 25px;
    height: 25px;
    resize-mode: contain;
`
const Txt = styled.Text`
    color: rgba(0, 82, 167, 1);
    font-size: 10px;
    font-family: Nunito_400Regular;


`
export const Menu = ({ bg, icon, title, ...rest }) => {
    let [load] = useFonts({
        Nunito_400Regular,
        // Nunito_700Bold
    })
    if (!load) { return (<AppLoading />) }
    return (
        <TouchableWithoutFeedback {...rest}>
            <IconWrapper >
                <BorderIcon bg={bg}>
                    <Icon source={icon} />
                </BorderIcon>
                <Txt>{title}</Txt>
            </IconWrapper>
        </TouchableWithoutFeedback>
    )
}