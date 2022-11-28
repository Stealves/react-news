import { Container } from "@mui/material";
import { useLocation } from "react-router-dom"
import { Detail } from "../components/Detail"

export const Article = () => {
  const location = useLocation();
  const article = location.state.article

  return (
    <Container maxWidth='md'  sx={{ p: 4 }}>
      <Detail article={ article }/>
    </Container>
  )
}