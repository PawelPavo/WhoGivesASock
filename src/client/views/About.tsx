import * as React from 'react';
import { FaSocks } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import NavigationBar from '../components/Navigation';

const About = (props: AboutProps) => {
    return (
        <Layout>
            <div className="">
                {/* <NavigationBar /> */}
                <div className="container py-5">
                    <div className="row font-weight-light text-primary bg-light p-5 shadow">
                        <div className="col-md-4 text-center">
                            <img
                                style={{ height: "250px", width: "auto", borderRadius: "50%" }}
                                src="https://instagram.fmia1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/46587149_368647507036134_7600797439857422836_n.jpg?_nc_ht=instagram.fmia1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=7Ajr3XkjsCUAX-KYvEg&_nc_tp=24&oh=bb1ca4c086d1d315ff4abcd2419c4051&oe=5FD310EB" alt="WGAS" />
                        </div>
                        <div className="col-md-8 my-auto text-justify">
                            <p>I started #WHoGivesASock in 2015. I convinced friends to start donation drives at their jobs or schools and once they reached their goal, I would pick up the socks from them and distribute at shelters all around New York.</p>
                            <p>Some days, when I'm going into the city or areas I know there's a lot of homelessness...I carry the socks around in my bag and distribute them directly to people on the street.</p>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

const Layout = styled.div`

.bg-custom-service-card-bg {
    background-color: rgba(25, 76, 130, .85);;
} 

.cardHover:hover {
    border-color:rgb(192, 180, 180) !important;
    box-shadow: 0 0 30px rgba(33,33,33,1) !important;
    transition: all 0.75s ease-in-out;
    background-color: rgba(25, 76, 130, 1);
}

.icon {
    color: #f8a320;
}

.mobile-text {
    @media not all and (min-width: 576px) {
      font-size: 30px;
      margin-top: 10px;
    }
}

`

interface AboutProps { }

export default About;
