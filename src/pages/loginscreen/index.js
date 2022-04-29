import { useState } from 'react'
import { StatusBar } from 'react-native'
import { Container, Gap, LogoImage, LogoWrapper, Password, TextLogo, Txt } from './login.styled';
import { Button, ComponentsInput } from '../../components';
import { EyeIcon, LockIcon, Logo, MailIcon } from '../../components/assets'
import { useFonts, Baloo2_400Regular } from '@expo-google-fonts/baloo-2';
import AppLoading from 'expo-app-loading';

const LoginScreen = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true)
    let [fontsLoaded] = useFonts({
        Baloo2_400Regular
    })

    if (!fontsLoaded) { return (<AppLoading />) }
    return (
        <Container>
            <StatusBar style="auto" />
            <LogoWrapper>
                <LogoImage source={Logo} />
                <TextLogo>Satu Hati Menggemakan</TextLogo>
                <TextLogo sz="12px">#IndonesiaCintaQuran</TextLogo>
            </LogoWrapper>
            <Txt>
                Email
            </Txt>
            <Gap />
            <ComponentsInput
                source={MailIcon}
                placeholder="name@email.com"
            />
            <Gap h="12px" />
            <Txt>Password</Txt>
            <Gap />
            <ComponentsInput
                source={LockIcon}
                righticon={EyeIcon}
                secureTextEntry={showPassword}
                placeholder="******"
                onPress={() => setShowPassword(!showPassword)}
            />
            <Gap h="12px" />
            <Password>
                <Txt c="rgba(0, 82, 167, 1)">Lupa Password</Txt>
            </Password>
            <Gap h="24px" />
            <Button title="Login" bg="rgba(190, 214, 0, 1)" onPress={() => navigation.navigate('Home')} />
            <Gap h="16px" />
            <Button title="Lupa Email" bw="1px" bc="rgba(230, 238, 246, 1)" color="rgba(123, 135, 148, 1)" />
            <Gap h="71px" />
            <LogoWrapper >
                <Txt>V1.01</Txt>
            </LogoWrapper>
        </Container>
    )
}

export default LoginScreen