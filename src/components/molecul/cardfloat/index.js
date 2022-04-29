import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import AppLoading from 'expo-app-loading'
import React, { useState } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'

const FloatWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`
const Txt = styled.Text`
    font-size: ${props => props.sz || "15px"};
    color: ${props => props.c || "#fff"};
    font-family: Nunito_700Bold;
`
const TxtSecond = styled(Txt)`
    color: ${props => props.secondcolor || "#fff"};
    font-family: Nunito_400Regular;
`
const Icon = styled.Image`  
    width: 25px;
    height: 25px;
    margin-right: 10px;
`


export const CardFloat = ({ image, title, secondary, c, secondcolor, ...rest }) => {

    let [load] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold
    })
    if (!load) { return (<AppLoading />) }
    return (
        <TouchableWithoutFeedback {...rest}>
            <FloatWrapper>
                <Icon source={image} />
                <View>
                    <Txt c={c}>{title}</Txt>
                    <TxtSecond secondcolor={secondcolor} sz="11px">{secondary}</TxtSecond>
                </View>
            </FloatWrapper>
        </TouchableWithoutFeedback>
    )
}