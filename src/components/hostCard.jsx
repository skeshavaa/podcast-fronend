import React from 'react'
import styled from 'styled-components'

export const HostCard = ({ name, profilePicture, desc }) => {
    return (
        <Wrapper>
            <ProfilePicture src={profilePicture.url}/>
            <Name>{name}</Name>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 10px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProfilePicture = styled.img`
    width: 200px;
    height: 100%;
`

const Name = styled.div`
    font-family: "Comfortaa", sans-serif;
    color: white;
    font-size: 15px;
    text-align: center;
`

const Desc = styled.div`
    font-family: "Comfortaa", sans-serif;
    color: white;
    font-size: 10px;
    text-align: center;
`