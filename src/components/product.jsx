import styled from "styled-components"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"


const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.5);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
border-radius: 50%;
`

const Container = styled.div`
flex:1;
margin: 5px;
min-width: 280px;
height: 290px;
display: flex;
align-items: center;
justify-content: center;
background-color: #${props=>props.bg};
position: relative;
border-radius: 50%;

&:hover ${Info}{
opacity: 1;
}
`
const Circle = styled.div`
width: 225px;
height: 225px;
background-color: white;
border-radius: 50%;
position: absolute;

`
const Image = styled.img`
height: 75%;
z-index: 2;
border-radius: 50%;
`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition:all 0.5s ease;

&:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
}

`

const product = ({item}) => {
  return (
    <Container bg={item.bg}>
   <Circle/>
      <Image src={item.img}/>
  
      <Info>
      <Icon>
          <ShoppingCartOutlined/>
      </Icon>
     <Icon>
          <SearchOutlined/>
      </Icon>
      <Icon>
          <FavoriteBorderOutlined/>
      </Icon>
      </Info>


    </Container>
  )
}

export default product