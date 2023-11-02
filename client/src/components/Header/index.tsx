/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  ButtonBase,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import logoSrc from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { getProductsBySearch } from '@/services/Walmart';
import { useClickOutside } from '@/utils/hooks';

type SearchResult = {
  Name: string;
  Id: string;
};

export const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const searchContainerRef = useRef<HTMLDivElement>(null);

  useClickOutside(searchContainerRef, () => {
    if (searchResults.length > 0) {
      setSearchResults([]);
    }
  });

  useEffect(() => {
    if (!searchValue) {
      setSearchResults([]);
    }
    const timer = setTimeout(async () => {
      if (searchValue.trim() !== '') {
        setIsSearching(true);
        const results = await getProductsBySearch(searchValue);
        setSearchResults(results);
        setIsSearching(false);
        console.log(isSearching);
      }
    }, 300);

    return () => clearTimeout(timer); // This clears the timer if the value changes before the delay finishes
  }, [isSearching, searchValue]);

  const handleDrawerToggle = () => {
    setDrawerOpen(prev => !prev);
  };

  const handleDealClick = () => {
    console.log('Deals clicked');
    setDrawerOpen(false);
  };

  const handleSearch = () => {
    if (searchValue.trim()) {
      navigate(`search?item=${searchValue}`);
      setSearchValue('');
    }
  };

  const handleClickSearchItem = (productId: string) => {
    // navigate(`/product/walmart/${productId}`);
    navigate('/product/walmart/' + productId, {
      state: { searchText: searchValue }
    });
    setSearchValue('');
  };

  const handleClickFurnitures = () => {
    navigate('/furnitures');
  };

  const handleClickElectronics = () => {
    navigate('/electronics');
  };

  return (
    <>
      <div>
        <AppBar
          position="static"
          sx={{ backgroundColor: '#2d2d86', marginBottom: '8px' }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => {
                navigate('/');
              }}
            >
              <img
                src={logoSrc}
                alt="logo"
                height="40px"
                style={{ borderRadius: '50%' }}
              />
            </IconButton>
            <Box
              ref={searchContainerRef}
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
                }
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

              {searchValue && searchResults.length > 0 && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                    zIndex: 2
                  }}
                >
                  {searchResults.map((result, index) => (
                    <Box
                      key={index}
                      onClick={() => handleClickSearchItem(result.Id)}
                      sx={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #e1e1e1',
                        cursor: 'pointer',
                        color: 'black',
                        '&:hover': {
                          backgroundColor: '#f5f5f5'
                        }
                      }}
                    >
                      {result.Name}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' }
              }}
            >
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
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: 'block', sm: 'none' }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Box sx={{ backgroundColor: 'white', height: '2px' }} />
          <Toolbar
            sx={{
              width: { xs: '90%', sm: '36%' },
              justifyContent: 'space-between',
              gap: 1
            }}
          >
            <Button
              color="inherit"
              sx={{ textTransform: 'none', padding: '0' }}
              onClick={() => {
                navigate('/');
              }}
            >
              Top Deals
            </Button>
            <Button
              color="inherit"
              sx={{ textTransform: 'none', padding: '0' }}
              onClick={handleClickElectronics}
            >
              Electronics
            </Button>
            <Button
              color="inherit"
              sx={{ textTransform: 'none', padding: '0' }}
              onClick={handleClickFurnitures}
            >
              Furnitures
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            width: '40%',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '40%'
            }
          }}
        >
          <List>
            <ListItem component={ButtonBase} onClick={handleDealClick}>
              <ListItemIcon>
                <NotificationsNoneIcon />
              </ListItemIcon>
              <ListItemText primary="Deals" />
            </ListItem>
            <ListItem component={ButtonBase} onClick={handleDealClick}>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Menu" />
            </ListItem>
            <ListItem component={ButtonBase} onClick={handleDealClick}>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
