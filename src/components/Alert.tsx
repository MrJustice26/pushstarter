import React from 'react'
import { Alert, Color } from '@material-ui/lab'
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface IAlertProps {
    text: string,
    severity?: Color | undefined,
    icon?: string,
    color?: Color
    // errorCount: number
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(1),
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
        alert: {
            display: 'flex',
            alignItems: "center"
        }
    }),
);

export default function MAlert(props: IAlertProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <Alert
                    className={classes.alert}
                    
                    color={props.color || "error"}
                    severity={props.severity || "error"}>
                    {props.text || "No text for show!"}
                </Alert>


        </div>

    )
}
