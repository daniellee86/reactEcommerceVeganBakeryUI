import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./product"

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
background-color: #FFFDD0;
`



const products = () => {
  return (
 <Container>

{popularProducts.map((item) => (
    <Product item={item} key={item.id}/>
))}

 </Container>
  );
};

export default products



