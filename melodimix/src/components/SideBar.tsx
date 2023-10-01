import "../asset/css/sideBar.css"
import homeIcon from '../asset/images/icon/homeIcon.svg'
import playListIcon from '../asset/images/icon/playList.svg'
import searchIcon from '../asset/images/icon/search.svg'
import favoritesIcon from '../asset/images/icon/favorites.svg'
import Logo from "../asset/images/icon/MelodiMixLogo.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Menu as MenuIcon } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MoveToInbox as InboxIcon } from '@mui/icons-material';
import { Mail as MailIcon } from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



const SideBar: React.FC = () => {

    const [path, setPath] = useState<String>("/")
    const changeLink = (pathname: String) => {
        setPath(pathname);
    }

    const menuItem = [
        {
            name: 'Home',
            path: '/',
            icon: `${homeIcon}`,
            active: (path === "/") ? true : false
        },
        {
            name: 'Search',
            path: '/search',
            icon: `${searchIcon}`,
            active: (path === "/search") ? true : false
        },
        {
            name: 'PlayList',
            path: '/playlist',
            icon: `${playListIcon}`,
            active: (path === "/playlist") ? true : false
        },
        {
            name: 'Favorities',
            path: '/favorites',
            icon: `${favoritesIcon}`,
            active: (path === "/favorites") ? true : false
        }
    ]

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{backgroundColor : "#AADCDC"}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>

                    
                    <ListItem  disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                display : open ? "grid" : "",
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <a href="" ><img className="logo" src={Logo} alt="" /><span></span></a>
                            </ListItemIcon>
                            {/* <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} /> */}
                        </ListItemButton>
                    </ListItem>
                    {
                        menuItem.map((item) => {
                            return (
                                <ListItem key={item.name} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <img src={item.icon} alt="" />
                                        </ListItemIcon>
                                        <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                </List>
            </Drawer>
        </Box>










        // <>
        //     <div className="sidebar">
        //         <a href=""><img className="logo" src={Logo} alt="" /><span></span></a>
        //         <div className="navbar">
        //             <div className="classList">
        //                 {menuItem.map(item => {
        //                     return (
        //                         <div className="listItem">
        //                             <Link className={`navitem ${item.active ? "active " : null}`} to={item.path} onClick={()=>{changeLink(item.path)}}>
        //                                 <img src={item.icon} alt="" />
        //                                 <span>{item.name}</span>
        //                             </Link>
        //                         </div>
        //                     )
        //                 })}
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
};

export default SideBar;