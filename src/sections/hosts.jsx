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
            {data.allGraphCmsHost.edges.map((edge) => {
                return(
                    <HostCard {...edge.node}/>
                )
            })}
        </Wrapper>
    )
}

export default Hosts


const Wrapper = styled.div`
    height: 100vh;
    background-color: #141414;
`

const Heading = styled.div`
    font-family: "Comfortaa", sans-serif;
    color: white;
    font-size: 25px;
    text-align: center;
    padding: 10px;
`