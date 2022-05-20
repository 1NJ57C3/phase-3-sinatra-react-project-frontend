import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

// import SearchBar from './SearchBar';

function NavBar({ search, setSearch }) {
  const [auth, setAuth] = React.useState(true);
  const [userAnchorEl, setUserAnchorEl] = React.useState(null);
  const [navAnchorEl, setNavAnchorEl] = React.useState(null);

  const toggleLogin = (event) => {
    setAuth(event.target.checked);
  };

  const handleNavMenu = (event) => {
    setNavAnchorEl(event.currentTarget);
  };

  const handleUserMenu = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setUserAnchorEl(null);
    setNavAnchorEl(null);
  };

  const handleLogin = () => {
    setAuth(true);
  }

  const handleLogout = () => {
    setAuth(false);
    setUserAnchorEl(null);
    setNavAnchorEl(null);
  }

  const open = (anchorEl) => {
    return Boolean(anchorEl)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel style={{marginLeft: 'auto', marginRight: '1em', width: 'auto'}}
          control={
            <Switch
              checked={auth}
              onChange={toggleLogin}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logged in' : 'Logged out'}
        />
      </FormGroup>
      <AppBar position="static" style={{ backgroundColor:'#000000', color:'#bbac9b' }}>
        <Toolbar>
          <IconButton
            onClick={handleNavMenu} 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={navAnchorEl}
            open={open(navAnchorEl)}
            onClose={handleClose}
            onClick={handleClose}
            MenuListProps={{'aria-labelledby': 'basic-button'}}
          >
            <MenuItem>Coming Soon™</MenuItem>
          </Menu>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {/* Empty Header/Element left in place as spacer */}
          </Typography>

          {/* <SearchBar search={search} setSearch={setSearch} /> */}
          
          {auth ? (
            <div>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleUserMenu}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>
                      {/* This space for User's Profile Picture or Initial - Leave Blank for generic no-PFP icon */}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={userAnchorEl}
                id="account-menu"
                open={open(userAnchorEl)}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>
                  <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Button color="inherit" onClick={handleLogin}>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;