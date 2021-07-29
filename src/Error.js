import React from 'react'
import styled from 'styled-components'


const ErrorMessage = styled.div`
    color: red;
    margin-top: 15px;
    font-weight: bold;

`
export default function Error(props) {

    if (props.msg) {
        return (
            <ErrorMessage>
              {props.msg}
            </ErrorMessage>
        )
    }
    return null;
}
