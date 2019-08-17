import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import { Input } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  function a(){
      console.log('11111');
  }

  return (
    <div className={classes.root}>
       
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
         
            <Input placeholder='输入副本ID搜索'></Input>
            <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          {/* <ListItemText primary="查询团队" onClick={a} /> */}
        </ListItem>
        {/* <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="创建团队" />
        </ListItem> */}
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="熔火之心" /> <ListItemText primary="44123323" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="黑翼之巢" /> <ListItemText primary="44123323" />
        </ListItemLink>
      </List>
    </div>
  );
}