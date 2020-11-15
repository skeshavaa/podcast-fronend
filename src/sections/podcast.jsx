import React from 'react'
import styled from 'styled-components'

export default function Podcast() {
    return (
        <Wrapper>
            <Heading>LATEST EPISODES</Heading>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 60vh;
`

const Heading = styled.div`
    font-family: 'Questrial', sans-serif;
    font-size: 30px;
    justify-content: center;
    display: flex;
    padding: 25px;
`