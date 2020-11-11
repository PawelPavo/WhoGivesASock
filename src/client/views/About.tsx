import * as React from 'react';
import styled from 'styled-components';

const About = (props: AboutProps) => {
    return (
        <Layout>
            <div className="container py-5 " style={{ marginTop: "50px" }}>
                <div className="card my-5 rounded-0 border-0 shadow info-card">
                    <div className="row no-gutters">
                        <div className="col-md-4 p-4">
                            <img src="https://instagram.fmia1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/46587149_368647507036134_7600797439857422836_n.jpg?_nc_ht=instagram.fmia1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=7Ajr3XkjsCUAX-KYvEg&_nc_tp=24&oh=bb1ca4c086d1d315ff4abcd2419c4051&oe=5FD310EB" className="card-img" alt="Amanda" style={{ borderRadius: "50%" }} />
                        </div>
                        <div className="col-md-8 my-auto text-justify">
                            <p className="px-5 font-weight-light">I started #WHoGivesASock in 2015. I convinced friends to start donation drives at their jobs or schools and once they reached their goal, I would pick up the socks from them and distribute at shelters all around New York.</p>
                            <p className="px-5 font-weight-light">Some days, when I'm going into the city or areas I know there's a lot of homelessness...I carry the socks around in my bag and distribute them directly to people on the street.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const Layout = styled.div`

.info-card {
    background-color: rgba(221, 214, 211, 0.5);
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
