import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import { Link } from 'react-router-dom';
import { Form, Navbar, Button } from 'react-bootstrap';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShopRoundedIcon from '@material-ui/icons/ShopRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import InfoIcon from '@material-ui/icons/Info';

function Sidebar() {
    const [showNav, setShowNav] = useState();
    const [searchString, setSearchString] = useState('');

    const onSearchTextChange = (e) => {
        setSearchString(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        if (searchString === "" || searchString.length < 3 || searchString.length > 50) {
            alert('Try to search something relevant');
            return;
        }
        window.location = `/search/${searchString}`;
        setSearchString('');
    }

    const navItems = [
        <Form inline onSubmit={search}>
            <Form.Control type="text" onChange={onSearchTextChange} value={searchString} name="searchString" placeholder="Search" className="mr-sm-2 mt-2" />
            <Button variant="outline-info" type="submit" className="mt-2" id="buttonLink">Search</Button>
        </Form>,
        <Link to="/" id="homeLink">
            <div id="homeBlock">
                <HomeRoundedIcon className="icons" id="homeIcon" htmlColor="grey" />
                <span to="/" id="home" className="nav-link">Home</span>
            </div>
        </Link>,
        <Link to="/store" id="storeLink">
            <div id="storeBlock">
                <ShopRoundedIcon className="icons" id="storeIcon" htmlColor="grey" />
                <span to="/store" id="store" className="nav-link">Store</span>
            </div>
        </Link>,
        <Link to="/contact" id="contactLink">
            <div id="contactBlock">
                <ContactMailRoundedIcon className="icons" id="contactIcon" htmlColor="grey" />
                <span to="/contact" id="contact" className="nav-link">Contact me</span>
            </div>
        </Link>,
        <Link to="/about" id="aboutLink">
            <div id="aboutBlock">
                <InfoIcon className="icons" id="aboutIcon" htmlColor="grey" />
                <span to="/about" id="about" className="nav-link">About</span>
            </div>
        </Link>,
    ];

    useEffect(() => {
        document.getElementById("homeBlock").onmouseover = () => {
            document.getElementById("home").style.color = "white";
            document.getElementById("homeIcon").style.color = "white";
        }
        document.getElementById("homeBlock").onmouseout = () => {
            document.getElementById("home").style.color = "grey";
            document.getElementById("homeIcon").style.color = "grey";
        }
        document.getElementById("storeBlock").onmouseover = () => {
            document.getElementById("store").style.color = "white";
            document.getElementById("storeIcon").style.color = "white";
        }
        document.getElementById("storeBlock").onmouseout = () => {
            document.getElementById("store").style.color = "grey";
            document.getElementById("storeIcon").style.color = "grey";
        }
        document.getElementById("contactBlock").onmouseover = () => {
            document.getElementById("contact").style.color = "white";
            document.getElementById("contactIcon").style.color = "white";
        }
        document.getElementById("contactBlock").onmouseout = () => {
            document.getElementById("contact").style.color = "grey";
            document.getElementById("contactIcon").style.color = "grey";
        }
        document.getElementById("aboutBlock").onmouseover = () => {
            document.getElementById("about").style.color = "white";
            document.getElementById("aboutIcon").style.color = "white";
        }
        document.getElementById("aboutBlock").onmouseout = () => {
            document.getElementById("about").style.color = "grey";
            document.getElementById("aboutIcon").style.color = "grey";
        }

        document.getElementById("homeLink").onclick = () => {
            setShowNav(false);
        }
        document.getElementById("storeLink").onclick = () => {
            setShowNav(false);
        }
        document.getElementById("contactLink").onclick = () => {
            setShowNav(false);
        }
        document.getElementById("aboutLink").onclick = () => {
            setShowNav(false);
        }
        document.getElementById("buttonLink").onclick = () => {
            setShowNav(false);
        }
    });

    return (
        <div className="sidebar">
            <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
                <Link to="/home"><Navbar.Brand><h2>DevOM</h2></Navbar.Brand></Link>
                <MenuIcon
                    onClick={() => setShowNav(true)}
                    className="menuIcon"
                />
            </Navbar>
            <SideNav
                showNav={showNav}
                onHideNav={() => setShowNav(false)}
                title="DevOM"
                navStyle={itemStyle}
                items={navItems}
                titleStyle={titleStyle}
                itemStyle={itemStyle}
                itemHoverStyle={itemHoverStyle}
            />
        </div>
    )
}

const titleStyle = {
    backgroundColor: "black",
    fontWeight: "bold",
}

const itemStyle = {
    backgroundColor: "#111111",
    fontSize: 18,
}

const itemHoverStyle = {
    backgroundColor: "#212121",
    fontWeight: "bold",
    fontSize: 21,
    cursor: "pointer"
}

export default Sidebar;

