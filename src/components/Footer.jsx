import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
display:flex;

`
//
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
`
const Logo = styled.h1`
font-family: 'Yesteryear', cursive;
font-size: 55px;
color: #FE7171;
`
const SocialContainer = styled.div`
display: flex;

`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
transition:all 0.5s ease;

&:hover{
  background-color: black;
  transform: scale(1.1);
}
`

//
const Center = styled.div`
flex: 1;
padding: 20px;

`
const Title = styled.h3` 
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
//
const Right = styled.div`
flex: 1;
padding: 20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 50%;
`

//
const Footer = () => {
  return (
 
<Container>
    <Left>
        <Logo>Chloe's Kitchen.</Logo>

        <SocialContainer>
            <SocialIcon color="3B5999" >
              <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest/>
            </SocialIcon>
        </SocialContainer>

    </Left>

    <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Cupcake</ListItem>
          <ListItem>Loaves</ListItem>
          <ListItem>Cake</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Event Catering</ListItem>
          <ListItem>Terms</ListItem>
        </List>
    </Center>

    <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}}/>
             Burnley, Lancashire, UK
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}}/>
            +44 7903075092
        </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/>
            chloeskitchen@hotmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
    </Right>


</Container>



  )
}

export default Footer