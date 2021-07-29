import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dropdown: {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            height: '10vh'
        },
        button: {
            border: "none",
            background: 0,
        },
        link: {
            display: "flex",
            alignItems: "center",

        },
        options: {
            position: "relative"
        },
        list: {
            fontSize: "16px",
            padding: 0,
            position: "absolute",
            background: "#fff",
            marginTop: "10px",
            right: 0,
            width: "200px",
            height: "150px",
            listStyle: "none",
            display: "flex",
            justifyContent:"space-around",
            flexDirection: "column",
            borderRadius: "5px",
            boxShadow: "0 4px 4px 1px rgba(0, 0, 0, .25)"
        },
        item: {
            display: 'flex',
            alignItems: "center",
            backgroundColor: "#fff",
            color: "#30655E",
            padding: "0 22px",
            transition: "background-color .2s",
            "&:hover": {
                cursor: "pointer",
                backgroundColor: "rgba(196, 196, 196, .44)"
            }
        },

        option: {
            textDecoration: "none",
            color: "#30655E",
            marginLeft: "22px",
            height: "30px",
            display: 'flex',
            alignItems: "center",

        },
        avatar: {
            width: "31px",
            height: "31px"
        },
        userName: {
            fontSize: "14px",
            fontWeight: 500,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
        }

    }),
);

const CustomDropdown = () => {

    const classes = useStyles()

    return (
        <div className={classes.dropdown}>
            <Button ><a href="#" className={classes.link}>Account <ExpandMoreIcon /></a></Button>
            <div className={classes.options}>
                <button>Projects</button>
                <ul className={classes.list}>
                    <li className={classes.item}><AccountCircleIcon className={classes.avatar}/> <span className={classes.userName}>vladislav2074@gmail.com</span></li>
                    <li className={classes.item}><a className={classes.option} href="#">My projects</a></li>
                    <li className={classes.item}><a className={classes.option} href="#">Settings</a></li>
                    <li className={classes.item}><a className={classes.option} href="#">Exit</a></li>
                </ul>
            </div>
        </div>
    );
};

export default CustomDropdown;