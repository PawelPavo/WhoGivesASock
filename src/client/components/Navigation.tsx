import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaBloggerB, FaPeopleCarry, FaPortrait } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import styled from 'styled-components';

const NavigationBar = (props: NavigationBarProps) => {

    return (
        <Layout>
            <div className="row d-flex justify-content-center sticky">
                <a href="http://paweljaskolski.com/" target="_blank" className="text-muted">
                    <small>Made with <FcLike /> by codeBasix </small>
                </a>
            </div>
            <div className="row d-flex justify-content-center shadow mb-5 bg-bg-color fixed-top">
                <div className="col-6 my-auto text-center">
                    <NavLink exact to="/">
                        <img
                            style={{ height: "75px", width: "auto", borderRadius: "50%" }}
                            src="https://instagram.fmia1-1.fna.fbcdn.net/v/t51.2885-15/e35/124201391_451127345869651_1415385177111669575_n.jpg?_nc_ht=instagram.fmia1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DLIcyPzjAqMAX9EjhsB&tp=18&oh=f5c0449bbe01f39a72f357a2913ec50a&oe=5FD5D397" alt="WhoGivesASock-Logo" />
                    </NavLink>
                </div>
                <div className="col-6 py-3 border border-bottom-0 border-top-0 border-right-0 my-3 border-primary">
                    <div className="row d-flex justify-content-around mr-3">
                        <NavLink exact to="/blog" className="nav-text">
                            <div className=" menu-underline left"><FaBloggerB /></div>
                        </NavLink>
                        <NavLink exact to="/about" className="nav-text">
                            <div className=" menu-underline left"><FaPortrait /></div>
                        </NavLink>
                        <NavLink exact to="/partners" className="nav-text">
                            <div className=" menu-underline left"><FaPeopleCarry /></div>
                        </NavLink>
                        <a href="https://www.instagram.com/whogivesasock/" target="_blank" className="nav-text">
                            <div className="font-weight-light"><FaInstagram /></div>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};


const Layout = styled.div`
.nav-text {
    text-decoration: none;
    font-size: 1.5rem;
}

.icon {
    color: #cfaf4d;
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
  left: 20px;
  background-color: #7ed957;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
}

.menu-underline.left:hover:before {
    visibility: visible;
    width: 85%;
}
`

interface NavigationBarProps { }

export default NavigationBar;