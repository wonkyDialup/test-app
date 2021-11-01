import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'
  import Home from './Homepage';
import Contact from './Contact';
import NavbarLinksData from "./NavbarLinksData"
import { NavbarContainer, SearchBox } from '../StyledComponents/NavbarStyle';
import { sidebardata } from "./NavbarLinks.js";

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <NavbarContainer>
                            <Navbar className="NavbarContainer" bg="#282C34" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">Strange Wheels Auto</Navbar.Brand>
                                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                            {sidebardata?.map((linkData) => (
                                                <NavbarLinksData linkData={linkData}
                                        />
                                            ))}
                                            <SearchBox>
                                            <Form className="searchBox" inline>
                                                <FormControl type="text" placeholder="Search" className="mb-2" />
                                                <Button variant="outline-success">Search</Button>
                                            </Form>  
                                        </SearchBox>
                                        </Nav>
                                         
                                </Navbar.Collapse>
                            </Navbar>
                            </NavbarContainer>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/Contact">
                                    <Contact />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;