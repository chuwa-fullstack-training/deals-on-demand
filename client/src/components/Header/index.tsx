/* eslint-disable @typescript-eslint/no-unused-vars */
// Header.tsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
  Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import logoSrc from '../../assets/logo.png';

export const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = () => {
    if (searchValue.trim()) {
      console.log(searchValue);
    }
  };

  return (
    <>
      <div>
        <AppBar
          position="static"
          sx={{ backgroundColor: '#2d2d86', marginBottom: '8px' }}
        >
          <Toolbar>
            <IconButton edge="start" color="inherit">
              <img
                src={logoSrc}
                alt="logo"
                height="40px"
                style={{ borderRadius: '50%' }}
              />
            </IconButton>
            <Box
              sx={{
                position: 'relative',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '40%'
              }}
            >
              <InputBase
                placeholder="What can we help you buy today"
                value={searchValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchValue(e.target.value)
                } // 2. Update state on input change with TypeScript type annotation
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === 'Enter') handleSearch();
                }}
                sx={{
                  color: 'black',
                  padding: '0 8px',
                  paddingRight: '40px', // Increased padding to make space for icon
                  width: '100%',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  '&::placeholder': {
                    color: 'black'
                  }
                }}
              />
              <SearchIcon
                sx={{
                  color: 'gray',
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer'
                }}
                onClick={handleSearch}
              />
            </Box>
            <Box>
              <Button
                color="inherit"
                startIcon={<NotificationsNoneIcon />}
                sx={{ textTransform: 'none', fontSize: '20px', mr: 2 }}
              >
                Deals
              </Button>
              <Button
                color="inherit"
                startIcon={<MenuIcon />}
                sx={{ textTransform: 'none', fontSize: '20px', mr: 2 }}
              >
                Menu
              </Button>
              <Button
                color="inherit"
                startIcon={<AccountCircle />}
                sx={{ textTransform: 'none', fontSize: '20px', mr: 2 }}
              >
                Account
              </Button>
            </Box>
          </Toolbar>
          <Box sx={{ backgroundColor: 'white', height: '2px' }} />
          <Toolbar sx={{ width: '60%', justifyContent: 'space-between' }}>
            <Button
              color="inherit"
              sx={{ textTransform: 'none', padding: '0' }}
            >
              Top Deals
            </Button>
            <Button
              color="inherit"
              sx={{ textTransform: 'none', padding: '0' }}
            >
              Electronics
            </Button>
            <Button
              color="inherit"
              sx={{ textTransform: 'none', padding: '0' }}
            >
              Travel & Vacation
            </Button>
            <Button
              color="inherit"
              sx={{ textTransform: 'none', padding: '0' }}
            >
              Automobile
            </Button>
            <Button
              color="inherit"
              sx={{ textTransform: 'none', padding: '0' }}
            >
              More
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
