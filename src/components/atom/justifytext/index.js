import React, { } from 'react';
import styled from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native';
import { useFonts, Baloo2_700Bold} from '@expo-google-fonts/baloo-2';
import AppLoading from 'expo-app-loading';

export const JustifyWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Txt = styled.Text`
    color: ${props => props.c || "#000"};
    font-size: ${props => props.sz || "14px"};
    font-family: Baloo2_700Bold;
`


export const JustifyText = ({ title, ...rest }) => {

    let [load] = useFonts({
        Baloo2_700Bold
    })
    if (!load) { return (<AppLoading />) }

    return (
        <JustifyWrapper>
            <Txt>{title}</Txt>
            <TouchableWithoutFeedback {...rest}>
                <Txt c="rgba(0, 82, 167, 1)" sz="10px">Lihat Semua</Txt>
            </TouchableWithoutFeedback>
        </JustifyWrapper>
    )
}