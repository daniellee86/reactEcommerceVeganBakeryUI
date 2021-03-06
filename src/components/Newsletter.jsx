import { Send } from '@material-ui/icons'
import styled from "styled-components"
import {mobile, tablet} from "../responsive"


const Container = styled.div`
height: 60vh;
background-color: #FE7171;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
${tablet({ height: "40vh" })}
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
color: white;
${mobile({ fontSize: "40px" })}
`
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({ fontSize: "10px" })}
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border:2px solid lightgray;
${mobile({ width: "70%" })}
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
flex: 1;
border:none;
background-color: #FFE162;
color: white;
`

const Newsletter = () => {
  return (
   
    <Container>
        <Title>Newsletter</Title>
        <Desc>Let's connect. Receive updates on your favourite items.</Desc>
        <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter