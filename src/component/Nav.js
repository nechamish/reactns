import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import * as React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Nav() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (

    <div className={classes.root}>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button onClick={() => { navigate('/admin', { state: { managerId: "5e8da483-0a02-4131-b52f-648cf5e4c974"}}); }}>Manager</Button>
        {/* <Button onClick={() => { navigate('/user'); }}>User</Button> */}
        <Button onClick={() => navigate('/signIn')}>Sign In</Button>
      </ButtonGroup>
    </div>

  );
}
