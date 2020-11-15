import React from 'react'
import styled from 'styled-components'

export const HostCard = ({ name, profilePicture, desc }) => {
    return (
        <Wrapper>
            <ProfilePicture src={profilePicture.url}/>
            {/* <TextWrapper>
                <Name>{name}</Name>
                <Desc>{desc}</Desc>
            </TextWrapper> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #242424;
    width: 280px;
`

const TextWrapper = styled.div`
    padding: 10px;
`

const ProfilePicture = styled.img`
    width: 280px;
    height: 100%;
    margin: 0;
    border-radius: 50%;
`

const Name = styled.div`
    font-family: "Questrial", sans-serif;
    color: white;
    font-size: 20px;
    text-align: center;
`

const Desc = styled.p`
    font-family: "Questrial", sans-serif;
    color: white;
    font-size: 12px;
    text-align: center;
    font-weight: lighter;
    margin: 0;
    padding-top: 10px;
`