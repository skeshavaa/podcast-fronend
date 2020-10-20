import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { HostCard } from '../components/hostCard'

const Hosts = () => {
    const data = useStaticQuery(graphql`
    {
        allGraphCmsHost{
          edges{
            node{
              name
              profilePicture{
                url
              }
              desc
            }
          }
        }
      }
      
  `) 
  


    return (
        <Wrapper>
            <Heading>Your Hosts</Heading>
            <HostsWrapper>
            {data.allGraphCmsHost.edges.map((edge) => {
                return(
                    <HostCard {...edge.node}/>
                )
            })}
            </HostsWrapper>
        </Wrapper>
    )
}

export default Hosts


const Wrapper = styled.div`
    background-color: #141414;
`

const Heading = styled.div`
    font-family: "Indie Flower", sans-serif;
    color: white;
    font-size: 45px;
    text-align: center;
    padding: 30px;
`

const HostsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`