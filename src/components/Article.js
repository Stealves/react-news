import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { Link } from 'react-router-dom';
import { ArticleMeta } from './ArticleMeta';

export const Article = ({ article }) => {
  const date = new Date(article.publishedAt);
  const formatedDate = date.toLocaleDateString();

  return (
    <Card variant='article'>
      <ArticleMeta source={ article.source.name } date={ formatedDate }/>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: 'auto max-content',
          gridTemplateAreas: {
            xs: `'content'
                'action'`,
            lg: `'content'
                'action'`
          },
          ...(article.urlToImage && {
            gridTemplateColumns: { xs: '1fr', lg: '0.8fr 1.2fr' },
            gridTemplateRows: { xs: 'max-content auto max-content', lg: 'auto max-content' },
            gridTemplateAreas: {
              xs: `'img'
                'content'
                'action'`,
              lg: `'img content'
                'img action'`
            }
          })
        }}
      >
        {article.urlToImage ? <Box sx={{ gridArea: 'img', height: { xs: '200px', lg: '100%' }, display: 'flex', borderRight: { lg: 3 }, borderBottom: { xs: 3, lg: 0 }, borderColor: 'primary.main' }}>
          <CardMedia component='img' image={article.urlToImage} alt={article.title} />
        </Box> : null}

        <CardContent sx={{ gridArea: 'content' }}>
          <Typography gutterBottom variant='h6'>
            {article.title}
          </Typography>
        </CardContent>
        <Box sx={{ gridArea: 'action', borderTop: 3, borderColor: 'primary.main' }}>
          <CardActions sx={{ p: 3, backgroundColor: 'custom.light' }}>
            <Button
              component={Link}
              to='/article'
              state={{ article }}
              endIcon={<ArrowCircleRightRoundedIcon />}
            >
              Read more
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card >
  )
}