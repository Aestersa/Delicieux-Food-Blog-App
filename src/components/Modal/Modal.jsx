import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from '../Backdrop/Backdrop'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { BsFacebook, BsPinterest } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import styled from 'styled-components'

const dropIn = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    y: '100vh',
  },
};

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop>
      <ModalContainer
      onClick={(e) => { e.stopPropagation() }}
      className='modal orange-gradient'
      variants={dropIn}
      initial='hidden'
      animate='visible'
      exit='exit'
      >
        <h2 className='modal_header'>FOLLOW US</h2>
        <IconsContainer>
        <AiFillTwitterCircle />
        <AiFillInstagram />
        <BsFacebook />
        <BsPinterest />
        </IconsContainer>
        <h4>Get a Free eCookbook with our top 25 recipes.</h4>
        <FormContainer>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='Email'/>
        </FormContainer>
        <div>
        <GoButton>Go</GoButton>
        <ClosedButton onClick={handleClose}><GrClose /></ClosedButton>
        </div>
      </ModalContainer>
    </Backdrop>
  )
}

const ClosedButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: white;
  cursor: pointer;
  font-size: 1.5rem;
`


const ModalContainer = styled(motion.div)`
  h4 {
    font-style: italic;
  }
`

const GoButton = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter,sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s,-webkit-box-shadow .2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
  }
`


const IconsContainer = styled.div `
  display: flex;
  flex-direction: row;

  svg {
    margin: 1rem 1rem;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      opacity: 0.7
    } 
  }
`

const FormContainer = styled.form`
  margin: 1rem 0;

  input {
    border-radius: 1rem;
    outline: none;
    padding: 1rem 3rem;
    margin: 0 1rem;
    color: white;
    background: linear-gradient(35deg, #494949, #313131);
    border: none;
  }
`

export default Modal