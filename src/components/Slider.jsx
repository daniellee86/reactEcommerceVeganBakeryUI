import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { useState } from "react"
import { sliderItems } from "../data"
import {mobile, tablet} from "../responsive"


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);

`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
height: 100%;
flex: 1;
${mobile({ display: "none" })}
`
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

const InfoContainer = styled.div`
flex: 1;
color: white;
text-align: center;
${tablet({ 
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
    })}
`
const Title = styled.h1`
font-size: 75px;
${mobile({ fontSize: "50px" })}
`
const Desc = styled.p`
margin: 40px 0;
padding: 0px 60px;
font-size: 25px;
font-weight: 500;
letter-spacing: 3px;
${mobile({ fontSize: "15px" })}
`
const Button = styled.button`
padding: 10px 20px;
font-size: 25px;
font-weight: 200;
background-color: transparent;
color: black;
border: 1px solid black;
border-radius: 30px;
cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction)=> {

        if (direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 )
            
        } else {

            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0 )
        }
    }

  return (
   <Container>
       <Arrow direction="left" onClick={()=>handleClick("left")}>
           <ArrowLeftOutlined/>
       </Arrow>

        <Wrapper slideIndex={slideIndex}>

            {sliderItems.map(item => (
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
             <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
            ))}

        </Wrapper>

       <Arrow direction="right" onClick={()=>handleClick("right")}>
           <ArrowRightOutlined/>
       </Arrow>
   </Container>
  )
}

export default Slider