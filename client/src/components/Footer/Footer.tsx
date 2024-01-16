// src/components/Footer.tsx
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, InputBase, Button, Link } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    marginRight: theme.spacing(2),
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0.5, 1),
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: theme.spacing(1),
  },
  rightContent: {
    float: 'right',
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <div className={classes.leftContent}>
          <div className={classes.search}>
            <span role="img" aria-label="search icon">
              🔍
            </span>
            <InputBase
              placeholder="Search"
              className={classes.searchInput}
            />
          </div>
          <Link href="#" color="inherit" underline="hover" component="button">
            Login
          </Link>
          <Button variant="contained" color="secondary" size="small">
            Get Started
          </Button>
        </div>
        <div className={classes.rightContent}>
          <Typography variant="body2">Reactive Forge Product Resources</Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
