import React, {ReactChildren} from 'react';

import {Card, CardActions, CardContent, CardMedia, CardActionArea, Typography, Button} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";


interface ICardActions {
    firstButton?: ICardActionsButton,
    secondButton?: ICardActionsButton
}

interface ICardActionsButton {
    text: string,
}

interface ICard {
    cardTitle: string,
    cardImageSrc?: string,
    cardImageTitle?: string
    cardActions?: ICardActions
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
        width: "100%"
    },
});

const MCard = (props:ICard) => {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.cardImageSrc}
                    title={props.cardImageTitle}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.cardTitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
                <CardActions>
                    <Button>
                        Edit
                    </Button>
                </CardActions>
        </Card>
    );
};

export default MCard;