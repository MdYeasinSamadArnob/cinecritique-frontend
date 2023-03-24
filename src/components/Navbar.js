import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ['Home', 'SignIn', 'SignUp', 'About'];

  return (
   
    <AppBar position="fixed"  style={{ background: 'transparent', boxShadow: 'none'}}>
            <Toolbar className={`justify-between`}>
              {/* <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h6" noWrap className='text-white'>
                CineCritique
              </Typography>
              <div className='flex justify-center items-center flex-grow text-white'>
                {menuItems.map((item, index) => (
                  <MenuItem key={index} onClick={handleMenuClose}>
                    <Link to={item==='Home'?'/':`/${item.toLowerCase()}`}>{item}</Link>
                  </MenuItem>
                ))}
               
              </div>
              <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={menuAnchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(menuAnchorEl)}
                  onClose={handleMenuClose}
                >
                  {menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleMenuClose}>
                   <Link to={item==='Home'?'/':`/${item.toLowerCase()}`}>{item}</Link>
                    </MenuItem>
                  ))}
                </Menu>
            </Toolbar>
          </AppBar>
   
  );
}










// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, MenuItem, Menu, Drawer } from '@material-ui/core';
// import { Menu as MenuIcon } from '@material-ui/icons';
// // import tw from 'tailwindcss';

// const Navbar = () => {
//   const [menuAnchorEl, setMenuAnchorEl] = useState(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleMenuOpen = (event) => {
//     setMenuAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setMenuAnchorEl(null);
//   };

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const menuItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

//   return (
//     <>
//       <AppBar position="fixed">
//         <Toolbar className={`justify-between`}>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             MyApp
//           </Typography>
//           <div>
//             {menuItems.map((item, index) => (
//               <MenuItem key={index} onClick={handleMenuClose}>
//                 {item}
//               </MenuItem>
//             ))}
//             <IconButton
//               edge="end"
//               color="inherit"
//               aria-label="menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleMenuOpen}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={menuAnchorEl}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(menuAnchorEl)}
//               onClose={handleMenuClose}
//             >
//               {menuItems.map((item, index) => (
//                 <MenuItem key={index} onClick={handleMenuClose}>
//                   {item}
//                 </MenuItem>
//               ))}
//             </Menu>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
//         <div className={`w-64 h-full bg-white`}>Drawer content</div>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;
