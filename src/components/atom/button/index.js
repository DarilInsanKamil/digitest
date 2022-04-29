import styled from 'styled-components/native'
import React, { useState } from 'react'
import { TouchableNativeFeedback, bg, Text } from 'react-native'
import { useFonts, Baloo2_400Regular } from '@expo-google-fonts/baloo-2'
import AppLoading from 'expo-app-loading'

const ButtonStyled = styled.View`
    background-color: ${props => props.bg || 'transparent'};
    padding: ${props => props.p || "14px 0px"};
    align-items: center;
    border-radius: 5px;
    border-width: ${props => props.bw || "0px"};
    border-color: ${props => props.bc || "transparent"};
`
const Txt = styled.Text`
    color: ${props => props.color || "#fff"};
    font-size: 15px;
    font-family: Baloo2_400Regular;
`
export const Button = ({ p, color, bg, bc, bw, title, ...rest }) => {
    let [load] = useFonts({
        Baloo2_400Regular
    })
    if (!load) { return (<AppLoading />) }

    return (
        <TouchableNativeFeedback {...rest}>
            <ButtonStyled p={p} bg={bg} bw={bw} bc={bc}>
                <Txt color={color}>{title}</Txt>
            </ButtonStyled>
        </TouchableNativeFeedback>
    )
}
