import React from 'react'
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const InputWrapper = styled.View`
    padding: 12px;
    border-width: 1px;
    border-radius: 8px;
    border-color: rgba(230, 238, 246, 1);
    align-items: center;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`

const SubInputWrapper = styled.View`
    align-items: center;
    flex-direction: row;
`
const InputText = styled.TextInput`
    margin: 0px 12px;
    width: 80%;
`
const Icon = styled.Image`
    width: 24px;
    height: 24px;
    resize-mode: contain
`


export const ComponentsInput = ({ source, righticon, ...rest }) => {
    return (
        <InputWrapper >
            <SubInputWrapper >
                <Icon source={source} />
                <InputText {...rest} />
            </SubInputWrapper>
            <TouchableWithoutFeedback {...rest}>
                <Icon source={righticon} />
            </TouchableWithoutFeedback>
        </InputWrapper>
    )
}