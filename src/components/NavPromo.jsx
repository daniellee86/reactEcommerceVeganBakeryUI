import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: #FFFDD0;
display: flex;
justify-content: center;
align-items: center;
`

const PromoText = styled.p`

font-weight: 300;
`



const NavPromo = () => {
  return (
  
    <Container>
        <PromoText>WINNER OF THE VEGAN SOCIETY AWARD FOR -  "BEST VEGAN BAKERY 2022".</PromoText>
    </Container>


  )
}

export default NavPromo