import * as React from 'react';
import { AppBar, Toolbar, IconButton, Container, Drawer, Stack, Button, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../logo.svg'
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function Header({ categories }) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <>
      <AppBar position="static" color='transparent' open={state} sx={{ py: 2, boxShadow: 0 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to='/'>
              <img
                src={Logo}
                alt="Simple News"
                height={"50px"}
              />
            </Link>
            <IconButton
              color="primary"
              size="large"
              aria-label="open menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'flex', lg: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
      >
        <Box
          onClick={toggleDrawer(false)}
        >
          <Box sx={{ p: 2, backgroundColor: 'secondary.main' }}>
          <IconButton color="primary" aria-label="close drawer" >
            <CloseIcon />
          </IconButton>
          </Box>
          <Stack
            direction="column"
            divider={<Divider sx={{ borderBottom: 3, borderColor: 'custom.light' }}/>}
          >
            {categories.map((category, index) => {
              return (
                <Button
                  component={Link}
                  to={`/${category}`}
                  sx={{
                    px: 3,
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    color: 'primary.main'
                  }}
                  size='large'
                  key={index}
                >
                  {category}
                </Button>
              );
            })
            }
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
export default Header;