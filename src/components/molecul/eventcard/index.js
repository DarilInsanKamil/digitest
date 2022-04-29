import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react'
import { TouchableNativeFeedback } from 'react-native';
import styled from 'styled-components/native';
import { Clock } from '../../assets';

const CardWrapper = styled.View`
    border-width: 1px;
    border-radius: 5px;
    border-color: #E6EEF6;
    align-items: center;
    padding: 8px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: ${props => props.w || "100%"}
`
const Txt = styled.Text`
    font-size: ${props => props.sz || "12px"};
    color: ${props => props.c || "#000"};
    font-family: Nunito_400Regular;
`
const Txttitle = styled(Txt)`
    font-family: Nunito_700Bold
`
const TxtWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`
const Icon = styled.Image`  
    width: 8px;
    height: 8px;
`
const TimeLeft = styled.View`
    background-color: rgba(220, 33, 33, 1);
    padding: 0px 4px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
`
const Gap = styled.View`
    height: ${props => props.h || "0px"};
    width: ${props => props.w || "0px"};
`

export const EventCard = ({ w, title, desc, time, ...rest }) => {

    
    let [load] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold
    })
    if (!load) { return (<AppLoading />) }

    return (
        <TouchableNativeFeedback {...rest}>
            <CardWrapper w={w}>
                <TxtWrapper>
                    <Txttitle>{title}</Txttitle>
                    <Gap w="4px" />
                    <TimeLeft>
                        <Icon source={Clock} />
                        <TxtWrapper>
                            <Gap w="2px" />
                            <Txt c="#fff">{time}</Txt>
                            <Gap w="2px" />
                            <Txt c="#fff">Hari lagi</Txt>
                        </TxtWrapper>
                    </TimeLeft>
                </TxtWrapper>
                <TxtWrapper w="80%">
                    <Txt >{desc}</Txt>
                </TxtWrapper>
            </CardWrapper>
        </TouchableNativeFeedback>
    )
};