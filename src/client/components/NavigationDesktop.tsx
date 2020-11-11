import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import styled from 'styled-components';

const NavigationDesktop = (props: NavigationDesktopProps) => {

    return (
        <Layout>
            <div className="bg-bg-color shadow mt-2 fixed-top">
                <div className="row mx-5">
                    <div className="col-md-4 my-2">
                    <a href="https://www.instagram.com/whogivesasock/" target="_blank" className="icon">
                            <h4 className="my-auto"><FaInstagram /></h4>
                        </a>
                    </div>
                    <div className="col-md-8 my-auto">
                        <div className="row justify-content-between">
                            <NavLink exact to="/" className="nav-text">
                                <div className="nev-text menu-underline left">Home</div>
                            </NavLink>
                            <NavLink exact to="/blog" className="nav-text">
                                <div className="nev-text menu-underline left">Blogs</div>
                            </NavLink>
                            <NavLink exact to="/about" className="nav-text">
                                <div className="nav-text menu-underline left">About Me</div>
                            </NavLink>
                            <NavLink exact to="/partners" className="nav-text">
                                <div className="nav-text menu-underline left">Partners</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};


const Layout = styled.div`

@import url('https://fonts.googleapis.com/css?family=Open Sans Condensed');

.nav-text {
    text-decoration: none;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 1rem;
    letter-spacing: 3px;
    font-weight: lighter;
}

.icon {
    
}

.icon:hover {
    color: white;
}

.menu-underline.left {
    position: relative !important;
}

.menu-underline.left:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0px;
  background-color: white;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
}

.menu-underline.left:hover:before {
    visibility: visible;
    width: 100%;
}
`

interface NavigationDesktopProps { }

export default NavigationDesktop;