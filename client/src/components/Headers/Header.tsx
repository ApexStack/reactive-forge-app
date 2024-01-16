import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import Logo from '../../assests/logo.png'

const Header: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#0d47a1', // Dark blue background color
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.1)',
  };

  const leftContentStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };

  const rightContentStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto', // Move content to the right
  };

  const searchStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
    backgroundColor: '#fff',
    borderRadius: '4px',
    padding: '4px',
  };

  const inputStyle: React.CSSProperties = {
    marginLeft: '8px',
  };

  const logoStyle: React.CSSProperties = {
    maxWidth: '100px', // Adjust the size as needed
  };

  return (
    <AppBar position="static" style={headerStyle}>
      <Toolbar>
        <div style={leftContentStyle}>
        <img src={Logo} alt="Logo" style={logoStyle} />
            
        </div>
        <Hidden smDown>
          {/* Hide on small screens (mobile) and below */}
          <div style={rightContentStyle}>
            <div style={searchStyle}>
              <InputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                style={inputStyle}
              />
            </div>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Get Started</Button>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
