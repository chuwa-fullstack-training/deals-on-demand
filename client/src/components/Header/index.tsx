/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';

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
import { useNavigate } from 'react-router-dom';
import { getProductsBySearch } from '@/services/Walmart';
import { useClickOutside } from '@/utils/hooks';

type SearchResult = {
  Name: string;
};

export const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
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
  }, [searchValue]);

  const handleSearch = () => {
    if (searchValue.trim()) {
      navigate(`search?item=${searchValue}`);
      setSearchValue('');
    }
  };

  const handleClickSearchItem = () => {};

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
                      onClick={handleClickSearchItem}
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
              onClick={() => {
                navigate('/');
              }}
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
