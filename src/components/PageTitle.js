import { Box, Typography } from "@mui/material"

export const PageTitle = ({ title }) => {
  if (title) {
    return (
      <Box sx={{ mb: 4, p: 2, border: 3, borderRadius: '15px', borderColor: 'primary.main', backgroundColor: 'white', color: 'custom.light' }}>
        <Typography variant="h6" component="span" sx={{ color: 'primary.light' }}>Latest Headlines </Typography>
        <Typography variant="h6" component="span" sx={{ textTransform: 'uppercase', color: 'primary.main', fontWeight: 'bold' }} >{ title }</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ mb: 4, p: 2, border: 3, borderRadius: '15px', borderColor: 'primary.main', backgroundColor: 'white', color: 'custom.light' }}>
      <Typography variant="h6" component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Latest Headlines</Typography>
    </Box>
  )
  
}