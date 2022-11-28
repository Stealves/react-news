import { Button, Divider, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const Navigation = ({ categories }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      divider={<Divider variant='nav' orientation="vertical" flexItem/>}
      sx={{
        p: 2,
        m: '-3px',
        border: 3,
        borderColor: 'primary.main',
        borderRadius: '15px',
        display: { xs: 'none', lg: 'flex' }
      }}
    >
      {categories.map((category, index) => {
        return (
          <Button
            component={Link}
            to={`/${category}`}
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'bold',
              color: 'primary.main'
            }}
            key={index}
          >
            {category}
          </Button>
        );
      })
      }
    </Stack>
  )
}