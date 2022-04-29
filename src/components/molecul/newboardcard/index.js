import React, { useState } from 'react'
import { TouchableNativeFeedback, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';


const BoardWrapper = styled.View`
    border-radius: 5px;
    border-width: 1px;
    border-color: #E6EEF6;
    padding: 12px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 100%;
    align-self: flex-start;
    flex-direction: row;
`
const Txt = styled.Text`
    font-size: ${props => props.sz || "12px"};
    color: ${props => props.c || "#000"};
    margin: ${props => props.m || "0px"};
    font-weight: ${props => props.fw || "400"};
    font-family: Nunito_400Regular;
    `
const Title = styled(Txt)`
    font-family: Nunito_700Bold;
`
const TxtWrapper = styled.View`
    width: 80%;
    margin-top: 2px;
`
const IconWrapper = styled.View`
    padding: 7px;
    background-color: rgba(230, 238, 246, 0.4);
    border-radius: 100px;
    align-self: flex-start;
    margin-right: 6px;
`
const Icon = styled.Image`
    width: 15px;
    height: 15px;
    resize-mode: contain;
`

export const NewBoardCard = ({ w, img, title, date, desc, ...rest }) => {
    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <TouchableNativeFeedback {...rest}>
            <BoardWrapper w={w}>
                <IconWrapper>
                    <Icon source={img} />
                </IconWrapper>
                <TxtWrapper>
                    <Title m="0px 5px 0px 0px">{title}</Title>
                    <Txt
                        sz="10px"
                    >
                        {date}
                    </Txt>
                    <Txt numberOfLines={4}>{desc}</Txt>
                </TxtWrapper>
            </BoardWrapper>
        </TouchableNativeFeedback>
    )
}
