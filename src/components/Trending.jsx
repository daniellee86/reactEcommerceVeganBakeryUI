import styled from "styled-components"

const Container = styled.div`
background-color: #FFFDD0;
position: relative;
display: flex;
align-items: center;

`

const Background = styled.h1`
font-size: 120px;
line-height: 65px;
font-weight: 800;
color:white;
padding: 20px 0px 0px 30px;

`

const TrendingText = styled.h1`
font-size: 40px;
letter-spacing: 15px;
font-weight: 2git 00;
position: absolute;
top:100px;
left: 60px;
`

const Trending = () => {
  return (
      <Container>
         <Background>YUM YUM YUM YUM YUM YUM.</Background>
          <TrendingText>Trending Treats:</TrendingText>
      </Container>
    
  )
}

export default Trending