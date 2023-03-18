import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'

const Logo = () => {
  return (
    <Container>
        <LogLink to={'/'}>
        <GiKnifeFork />
            Delicieux
        </LogLink>
        <nav>
            <ul>
                <li><NavLink>Popular</NavLink></li>
                <li><NavLink>Browse Recipies</NavLink></li>
                <li><NavLink>About</NavLink></li>
            </ul>
        </nav>
    </Container>
  )
}

const LogLink = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
`

const Container = styled.header`
    padding: 2rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        font-size: 2.5rem;
    }

    li {
        display: inline-block;
        padding: 0 1rem;
        font-weight: bold;
        font-size: 1rem;
    }
`

const NavLink = styled(Link)`
    text-decoration: none;
    transition: all 0.2s ease 0s;

    &:hover {
        opacity: 0.8
    }
`


export default Logo