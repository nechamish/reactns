import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import * as React from "react";
import { Typography } from '@material-ui/core';

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
  const send = () => {
    navigate("/signUp");
  };

  return (

    <div className={classes.root}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/PikiWiki_Israel_65689_extreme.jpg/800px-PikiWiki_Israel_65689_extreme.jpg" alt="water sport" />
      <Typography gutterBottom variant="h5" component="div">
        Water Sport
      </Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button onClick={() => navigate('/signIn')}>Sign In</Button>
        <Button></Button>
        <Button onClick={send}>Pipes</Button>
        <Button onClick={send}>Kayaks</Button>
        <Button onClick={send}>Bananas</Button>
      </ButtonGroup>
    </div>

  );
}
