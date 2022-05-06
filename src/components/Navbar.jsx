import styled from 'styled-components'
import {mobile, tablet} from "../responsive"

const Container = styled.div`
height: 100px;
box-shadow: 0px 3px 10px #D0D0D0;
${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
padding: 15px 40px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({ padding: "7px 20px" })}
`
//
const Left = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: flex-start;
`
const NavLink = styled.div`
font-size: 16px;
font-weight: 600;
cursor: pointer;
margin-right: 45px;
transition: all 0.5s ease;
&:hover {transform: scale(1.1)};
${mobile({ 
fontSize: "8px",
marginRight: "20px" })}
`
//

const Center = styled.div`
flex: 1;
text-align: center;
${mobile({ flex: "2" })}
`
const Logo = styled.h1`
font-family: 'Yesteryear', cursive;
font-size: 55px;
color: #FE7171;
${mobile({ fontSize: "25px" })}
${tablet({ fontSize: "25px" })}
`
//

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ display: "none" })}
`
const Button = styled.button`
margin-left: 35px;
font-size: 16px;
font-weight: 700;
padding: 10px 25px;
border-radius: 30px;
color: ${props=>props.color}; 
background-color: ${props=>props.bg};
border: ${props=>props.border};
cursor: pointer;
`
//

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <NavLink>HOME</NavLink>
                <NavLink>MENU</NavLink>
                <NavLink>CONTACT</NavLink>
            </Left>
            
            <Center>
                <Logo>
                    Chloe's Kitchen.
                </Logo>
            </Center>

            <Right>
                <Button color="#007944" bg="white" border="1px solid #007944 "   >Sign In</Button>
                <Button color="white" bg="#007944" border="none" >Join Now</Button>
            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar