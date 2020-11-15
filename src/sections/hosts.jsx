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
  background: #7b4397;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #dc2430, #7b4397);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #dc2430, #7b4397); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`

const Heading = styled.div`
    font-family: "Questrial", sans-serif;
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