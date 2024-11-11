import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button, Container, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <Box 
              sx={{
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: '#ff9900', 
                color: '#fff', 
                fontWeight: 'bold', 
                fontSize: '24px', 
                padding: '0 8px', 
                marginRight: '8px',
                borderRadius: "5px"
              }}
            >
              X-News
            </Box>
            <Typography 
              variant="subtitle1" 
              sx={{ display: { xs: 'none', md: 'block' } }}
              style={{ font: "small-caption" }} 
            >
              Sharing the Best Positive World News
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavLink 
              to="/" 
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontWeight: 'bold',
                color: isActive ? '#ff9900' : '#333',
              })}
            >
              <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink 
              to="/politics" 
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontWeight: 'bold',
                color: isActive ? '#ff9900' : '#333',
              })}
            >
              <Button color="inherit">Politics</Button>
            </NavLink>
            <NavLink 
              to="/sport" 
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontWeight: 'bold',
                color: isActive ? '#ff9900' : '#333',
              })}
            >
              <Button color="inherit">Sport</Button>
            </NavLink>
            <NavLink 
              to="/technology" 
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontWeight: 'bold',
                color: isActive ? '#ff9900' : '#333',
              })}
            >
              <Button color="inherit">Technology</Button>
            </NavLink>
            <NavLink 
              to="/business" 
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontWeight: 'bold',
                color: isActive ? '#ff9900' : '#333',
              })}
            >
              <Button color="inherit">Business</Button>
            </NavLink>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/" 
                style={({ isActive }) => ({
                  fontWeight: 'bold',
                  color: isActive ? '#ff9900' : 'inherit',
                })}
              >
                Home
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/politics" 
                style={({ isActive }) => ({
                  fontWeight: 'bold',
                  color: isActive ? '#ff9900' : 'inherit',
                })}
              >
                Politics
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/sport" 
                style={({ isActive }) => ({
                  fontWeight: 'bold',
                  color: isActive ? '#ff9900' : 'inherit',
                })}
              >
                Sport
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/technology" 
                style={({ isActive }) => ({
                  fontWeight: 'bold',
                  color: isActive ? '#ff9900' : 'inherit',
                })}
              >
                Technology
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/business" 
                style={({ isActive }) => ({
                  fontWeight: 'bold',
                  color: isActive ? '#ff9900' : 'inherit',
                })}
              >
                Business
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
