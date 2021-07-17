import { Button, Menu, MenuItem, Theme } from '@material-ui/core'
import React, { CSSProperties } from 'react'


interface IDropDownProps {
    title: string
    elementsList: string[],
}

export default function DropDown(props: IDropDownProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (

        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true"  onClick={handleClick}>
                {props.title}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {props.elementsList.map((el, key) => {
                    return <MenuItem onClick={handleClose} key={key}>{el}</MenuItem>
                })}
            </Menu>
        </div>
    )
}
