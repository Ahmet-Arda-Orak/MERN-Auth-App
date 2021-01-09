import React from 'react'
import AuthApi from '../../utils/AuthApi';
import { signout } from "../auth-api";
import { useContext} from 'react';
import {Nav,Navbar,Button} from "react-bootstrap";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function ProfileNav() {

const authApi = useContext(AuthApi);
  const handleSignout = async() => {
    const res = await signout(); 
    authApi.setAuth(res.data.auth);
    console.log(res.data.auth)
  };

    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">The Armet App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Item>
                    <Button onClick={handleSignout}><ExitToAppIcon/> Logout</Button>
                </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default ProfileNav
