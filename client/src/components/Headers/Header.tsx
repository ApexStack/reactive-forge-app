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
    backgroundColor: '#1a1a1a', // Dark background color
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
    maxWidth: '150px', // Adjust the size as needed
    marginRight: '16px', // Add margin for separation from text
  };

  const titleStyle: React.CSSProperties = {
    color: '#fff', // White text color
    fontWeight: 'bold', // Bold font weight
    flexGrow: 1, // Allow title to take available space
  };

  const buttonStyle: React.CSSProperties = {
    marginLeft: '16px', // Add margin between buttons
  };

  return (
    <AppBar position="static" style={headerStyle}>
      <Toolbar>
        <div style={leftContentStyle}>
          <img src={Logo} alt="Logo" style={logoStyle} />
          <Typography variant="h6" noWrap style={titleStyle}>
            Reactive Forge
          </Typography>
          <Typography variant="h6" noWrap style={titleStyle}>
            Product
          </Typography>
          <Typography variant="h6" noWrap style={titleStyle}>
            Resources
          </Typography>
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
            <Button color="inherit" style={buttonStyle}>
              Login
            </Button>
            <Button color="inherit" style={buttonStyle}>
              Get Started
            </Button>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
