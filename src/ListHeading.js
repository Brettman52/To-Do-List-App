import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
    text-align: center;
    text-decoration: underline;
`;

export default function ListHeading() {
    return (
        <Heading>
            To-Do
        </Heading>
    )
}
