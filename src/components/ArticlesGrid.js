import { Grid } from "@mui/material"
import { Featured } from "./Featured"
import { Article } from "./Article"

export const ArticlesGrid = ({ articles }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}><Featured article={articles[0]} /></Grid>
      {
        articles.slice(1).map((article, index) => {
          return <Grid item xs={12} md={6}><Article key={index} article={article} /></Grid>
        })
      }
    </Grid>
  )
}