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
    errorCount: number
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
    const [isOpen, setIsOpen] = React.useState(true);


    React.useEffect(() => {
        setIsOpen(false);
    }, [])
    React.useEffect(() => {
        setIsOpen(true);
    }, [props.errorCount])

    return (
        <div className={classes.root}>
            <Collapse in={isOpen}>
                <Alert
                    className={classes.alert}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    severity={props.severity || "error"}>
                    {props.text || "No text for show!"}
                </Alert>
            </Collapse>


        </div>

    )
}
