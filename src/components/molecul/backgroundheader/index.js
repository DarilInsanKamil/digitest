import React, { } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { Background, Notif } from '../../assets'
import styled from 'styled-components/native'
import AppLoading from 'expo-app-loading'
import { useFonts, Baloo2_700Bold, Baloo2_400Regular } from '@expo-google-fonts/baloo-2'

const BackgroundImage = styled.ImageBackground`
    height: 159px;
    padding: 0px 15px;
    border-radius: 40px;
    position: relative;
    justify-content: center;
`
const NotifIcon = styled.Image`
    width: 24px;
    height: 24px;
`
const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const TxtReguler = styled.Text`
    color: #fff;
    font-size: ${props => props.sz || "18px"};
    font-family: Baloo2_400Regular;
`
const Badge = styled.View`
    border-radius: 20px;
    padding: 2px 4px;
    background-color: rgba(190, 214, 0, 1);
    align-items: center;
    color: #fff;
    font-size: 10px;
    align-self: flex-start;
`
const TxtMedium = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: Baloo2_700Bold
`
const TxtWrapper = styled.View`
    flex-direction: row; 
`

export const HeaderBackground = ({ date, name, status, ...rest }) => {
    let [load] = useFonts({
        Baloo2_700Bold,
        Baloo2_400Regular
    })
    if (!load) { return (<AppLoading />) }
    return (
        <BackgroundImage source={Background} resizeMode="cover" imageStyle={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
            <Wrapper>
                <View>
                    <TxtReguler sz="15px">{date}</TxtReguler>
                    <TxtWrapper>
                        <TxtMedium>Hi,</TxtMedium>
                        <TxtReguler>{name}</TxtReguler>
                    </TxtWrapper>
                </View>
                <TouchableWithoutFeedback {...rest}>
                    <NotifIcon source={Notif} />
                </TouchableWithoutFeedback>
            </Wrapper>
            <Badge>
                <TxtReguler sz="10px">{status}</TxtReguler>
            </Badge>
        </BackgroundImage>
    )
}