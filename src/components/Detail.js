import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material"
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded'
import { Link } from "react-router-dom";

export const Detail = ({ article }) => {
  const date = new Date(article.publishedAt);
  const formatedDate = date.toLocaleDateString();

  return (
    <Card variant='detail'>
      {article.urlToImage ? <CardMedia component='img' image={article.urlToImage} alt={article.title} height="500" /> : null}
      <CardContent>
        <Box sx={{ p: 4 }}>
          <Typography variant='h3' component="h1" gutterBottom>{article.title}</Typography>
          <Typography>{`${article.source.name} - ${formatedDate}`}</Typography>
          {article.author ? <Typography>By {article.author}</Typography> : null}
        </Box>
        <Divider light />
        <Box sx={{ p: 4 }}>
          <Typography variant="body1">{article.content}...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ px: 4, py: 2, backgroundColor: 'custom.light' }}>
        <Button variant='outlined' size='large' component={Link} to='/'>Back Home</Button>
        <Button
          variant='contained'
          size='large'
          href={article.url}
          target='_blank'
          endIcon={<ArrowCircleRightRoundedIcon />}
        >
          Read More at: {article.source.name}
        </Button>
      </CardActions>
    </Card>
  )
}