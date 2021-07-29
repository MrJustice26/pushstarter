import React from 'react'

import { Button, MenuItem, Popper, Paper, Grow, MenuList, ClickAwayListener, Icon} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { keys } from '@material-ui/core/styles/createBreakpoints';


interface IDropDownProps {
    title: string
    elementsList: string[],
}




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    button: {
      color: "#fff",
      textTransform: 'none',
      fontWeight: "bold",
      fontSize: '1.06rem',
      display: 'flex',
      alignItems: "center"
    },
    list: {
      color: "#30655E"
    }
  }),
);


export default function DropDown(props: IDropDownProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {

    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    // if (event?.currentTarget?.dataset?.option){
    //   const option = event?.currentTarget?.dataset?.option
    //
    //
    // }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
    return (

        <React.Fragment>
        <Button
          className={classes.button}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          
          endIcon={<ExpandMoreIcon />}
        >
          Account
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" className={classes.list} onKeyDown={handleListKeyDown}>
                    {props.elementsList.map((el, key) => {
                      return <MenuItem onClick={handleClose} value={el.replace(' ', '-').toLowerCase()} key={key}>{el}</MenuItem>
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </React.Fragment>
    )
}


