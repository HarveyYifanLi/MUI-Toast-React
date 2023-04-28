import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { onMessage, createMockFormSubmission } from './service/mockServer';

import { connect } from "react-redux";
import { setCurrentForm } from "./store/actions/formActions";
import { useDispatch } from 'react-redux';

function Header(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    // upon first render, register the callback redux-thunk function (i.e. to dispatch action when called) for when we get a new form submission from the "server"
    onMessage((formSubmission) => {
      dispatch(setCurrentForm(formSubmission));
    });
  }, []);

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{marginRight: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>
            Toast Notification
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => {
              createMockFormSubmission();
              console.log('props.currentForm:', props.currentForm);
            }}
          >
            New Submission
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function mapStateToProps(state) {
  return {
    currentForm: state.currentForm
  };
}

export default connect(mapStateToProps, {})(Header);
