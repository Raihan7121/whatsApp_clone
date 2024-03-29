import { useState } from "react";

import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem ,styled } from "@mui/material";

const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding : 15px 60px 5 px 24 px;
    color: #4a4a4a;

`;


const HeaderMenu = ({ setOpenDrawer }) => {

    const [ open ,setOpen ] = useState(null);

    const handleClose = () => {
        setOpen(null);
    };

    const handleClick = (e) =>{
        setOpen(e.currentTarget);
    };

    return (

        <>
            <MoreVert onClick= {handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={ () => { handleClose(); setOpenDrawer(true);}}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>My account</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>
        </>

    )
}

export default HeaderMenu;