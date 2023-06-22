import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@mui/material/styles";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface UserAvatarProps {
  userName: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ userName }) => {
    
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Avatar
        className={"classes.avatar"}
        alt={userName}
        onClick={handleMenuOpen}
      >
        {userName.charAt(0)}
      </Avatar>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserAvatar;
