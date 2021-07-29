import React, {useEffect, useState} from 'react';
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

        },
        button: {
            color: "#fff"

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
            opacity: 0,
            transform: 'translateY(-10px)',
            transition: 'all .4s ease',
            padding: '10px 0 0',
            position: "absolute",
            background: "#fff",
            marginTop: "10px",
            right: 0,
            width: "200px",
            listStyle: "none",
            display: "flex",
            justifyContent:"space-around",
            flexDirection: "column",
            borderRadius: "5px",
            boxShadow: "0 4px 4px 1px rgba(0, 0, 0, .25)",

        },
        item: {
            display: 'flex',
            alignItems: "center",
            backgroundColor: "#fff",
            color: "#30655E",
            padding: "0 22px",
            transition: "background-color .2s",
            "&:hover:not(:first-child)": {
                cursor: "pointer",
                backgroundColor: "rgba(196, 196, 196, .44)"
            },
            "&:last-child": {
                borderTop: "1px solid #BABABA"
            }
        },

        option: {
            color: "#30655E",
            textDecoration: "none",
            fontSize: "15px",
            height: "30px",
            display: 'flex',
            alignItems: "center",
            fontWeight: 500,
            "&:hover": {
                "background": "none",
                "color": "inherit"
            },


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
        },
        active: {
            opacity: 1,
            transform: 'translateY(0)',
        }

    }),
);

const CustomDropdown = () => {



    const [isDisabled, setIsDisabled] = useState<boolean>(false)

    const classes = useStyles()


    return (
        <div className={classes.dropdown}>
            <Button className={classes.button} onClick={() => setIsDisabled(val => !val)}>Account <ExpandMoreIcon /></Button>
            <div className={classes.options}>
                <ul className={!isDisabled ? classes.list : `${classes.list} ${classes.active}`}>
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