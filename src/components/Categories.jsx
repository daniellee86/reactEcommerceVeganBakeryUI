import styled from "styled-components"
import {categories} from "../data"
import CatergoryItem from "./CategoryItem";

const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
`

const Categories = () => {
  return (
    <Container>

{categories.map(item=>(
  <CatergoryItem item={item} key={item.id}/>
))}

    </Container>
  )
}

export default Categories