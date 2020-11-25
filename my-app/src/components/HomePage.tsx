import { findByLabelText } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'
import { withTheme } from 'styled-components';



function HomePage(props: any) {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    `

  const Box = styled.input`
    padding: 10px;
    width: 40%;
    `

  const Button = styled.button`
    background: ${props => props.theme.background};
    border-radius: 3px;
    border: none;
    color: ${props => props.theme.text};
    padding: 10px;
    width: 20%`;

  const Text = styled.p`
    color: ${props => props.theme.text};`;

  return (
    <Wrapper>
      <Text>
        Hi there! Welcome to your education showcase
      </Text>
      <Text>
        Type your name and click "Enter" below to begin!
      </Text>
      <Box placeholder={"Your Name"}>
      </Box>
      <Button>
        Enter
      </Button>
    </Wrapper>
  )
}



export default withTheme(HomePage);
