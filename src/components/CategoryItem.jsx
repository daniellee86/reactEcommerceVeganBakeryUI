import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
border: 0.5px solid black;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
top: 0;
right: 0;
width: 60%;
height: 25%;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
border-bottom-left-radius: 100px;
padding: 0px 0px 9px 20px;
   
`
const Title = styled.p`
margin: 10px 0px;
font-size: 22px;
font-weight: 700;
${mobile({ 
margin: "0px",
fontSize: "12px" })}
`
const Button = styled.button`
border: 1px solid black;
border-radius: 40px;
padding: 7.5px;
margin: 5px 5px;
background-color: transparent;
color: black;
cursor: pointer;
font-weight: 500;
transition: all 0.5s ease;
&:hover {transform: scale(1.1)};

${mobile({ 
display: "none" })}
`

const CatergoryItem = ({ item }) => {
  return (

    <Container>
      <Image src={item.img} />
      <Info>
      <Title>{item.title}</Title>
      <Button>SHOP NOW</Button>
      </Info>
    </Container>

  )
}

export default CatergoryItem