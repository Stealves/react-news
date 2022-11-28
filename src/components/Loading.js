import { Box, CircularProgress } from "@mui/material"

export const Loading = () => {
  return (
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  )
}