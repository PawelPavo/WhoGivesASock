import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import styled from 'styled-components';

const NavigationBar = (props: NavigationBarProps) => {
    const [greeting, setGreeting] = React.useState<string>('');

    return (
        <Layout>
            <div className="row d-flex justify-content-center">
                <a href="http://paweljaskolski.com/" target="_blank" className="text-muted">
                    <small>Made with <FcLike /> by Pawel Jaskolski </small>
                </a>
            </div>
            <div className="row d-flex justify-content-center shadow mb-5 bg-light">
                <div className="col-6 text-right my-auto">
                    <NavLink exact to="/">
                        <img
                            style={{ height: "150px", width: "auto" }}
                            src="https://whogivesasock.s3.us-east-2.amazonaws.com/Who_Gives_A_Sock_Logo_no_bg.png?versionId=NCw_QGnWd8zWUp1pPJ_26.pK_xHmA4G6" alt="WhoGivesASock-Logo" />
                    </NavLink>
                </div>
                <div className="col-6 py-3 border border-bottom-0 border-top-0 border-right-0 my-3 border-primary">
                    <div className="row">
                        <NavLink exact to="/blog" className="nav-text">
                            <h4 className="font-weight-light pl-4 menu-underline left">Blogs</h4>
                        </NavLink>
                    </div>
                    <div className="row">
                        <NavLink exact to="/about" className="nav-text">
                            <h4 className="font-weight-light pl-4 menu-underline left">About Us</h4>
                        </NavLink>
                    </div>
                    <div className="row">
                        <NavLink exact to="/partners" className="nav-text">
                            <h4 className="font-weight-light pl-4 menu-underline left">Partners</h4>
                        </NavLink>
                    </div>
                    <div className="row mt-3">
                        <a href="https://www.instagram.com/whogivesasock/" target="_blank" className="icon">
                            <h4 className="font-weight-light pl-4"><FaInstagram /></h4>
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
    color: #07407b;
}

.icon {
    color: #f8a320;
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