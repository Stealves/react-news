import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { Link } from 'react-router-dom';
import { ArticleMeta } from './ArticleMeta';

export const Featured = ({ article }) => {
  const date = new Date(article.publishedAt);
  const formatedDate = date.toLocaleDateString();

  return (
    <Card variant='featured' sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      {article.urlToImage ? <CardMedia component='img' image={article.urlToImage} alt={article.title} sx={{ width: { xs: '100%', md: '35%' }, borderRight: { md: 3 }, borderBottom: { xs: 3, md: 0 }, borderColor: 'primary.main' }} /> : null}
      <Box sx={{ flexGrow: 1 }}>
        <ArticleMeta source={article.source.name} date={formatedDate} />
        <CardContent sx={{ p: 3 }}>
          <Typography gutterBottom variant='h4' component='h1'>{article.title}</Typography>
          {article.description ? <Typography variant='body'>{article.description}</Typography> : null}
        </CardContent>
        <CardActions sx={{ p: 3, backgroundColor: 'custom.light', borderTop: 3, borderColor: 'primary.main' }}>
          <Button
            variant='contained'
            size='large'
            component={Link}
            to='/article'
            state={{ article }}
            endIcon={<ArrowCircleRightRoundedIcon />}
          >
            Read more
          </Button>
        </CardActions>
      </Box>
    </Card>
  )
}