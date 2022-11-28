import { Chip, Stack, Tooltip } from "@mui/material"

export const ArticleMeta = ({ source, date }) => {
  return (
    <Stack
      direction='row'
      spacing={{ xs: 1, sm: 2 }} justifyContent='space-between' alignItems='center'
      sx={{
        p: 3,
        backgroundColor: 'custom.main',
        borderBottom: 3,
        borderColor: 'primary.main'
      }}
    >
      <Tooltip title='Source'>
        <Chip label={source} size='small' />
      </Tooltip>
      <Tooltip title='Published Date'>
        <Chip label={date} color='primary' variant='outlined' />
      </Tooltip>
    </Stack>
  )
}