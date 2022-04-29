import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react'
import { TouchableNativeFeedback, Text, Image } from 'react-native';
import styled from 'styled-components/native';

const BoardWrapper = styled.View`
    border-radius: 5px;
    border-width: 1px;
    border-color: #E6EEF6;
    padding: 12px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 294px;
    align-self: flex-start;
    flex-direction: ${props => props.fd || "column"};
`
const Txt = styled.Text`
    font-size: ${props => props.sz || "12px"};
    color: ${props => props.c || "#000"};
    margin: ${props => props.m || "0px"};
`
const TxtMedium = styled.Text`
    font-family: Nunito_700Bold;
    font-size: 12px;
    margin: 0px 5px 0px 0px;
`
const TxtWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
`
export const BoardCard = ({ image, title, date, desc, ...rest }) => {

    let [load] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold
    })
    if (!load) { return (<AppLoading />) }

    return (
        <TouchableNativeFeedback {...rest}>
            <BoardWrapper>
                <TxtWrapper>
                    <TxtMedium >{title}</TxtMedium>
                    <Txt
                        sz="10px"
                        c="rgba(163, 163, 163, 1)"
                    >
                        {date}
                    </Txt>
                </TxtWrapper>
                <Txt numberOfLines={3}>{desc}</Txt>
            </BoardWrapper>
        </TouchableNativeFeedback>
    )
}
