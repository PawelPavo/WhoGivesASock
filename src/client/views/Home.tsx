import * as React from 'react';
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { FaSocks } from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Home = (props: HomeProps) => {
    const [greeting, setGreeting] = React.useState<string>('');

    React.useEffect(() => {
        (async () => {
            try {
                const res = await fetch("/instagram_oembed");
                const greeting = await res.json();
                setGreeting(greeting);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);


    return (
        <Layout>
            <div className="container" style={{marginTop: "100px"}}>
                <div className="row justify-content-center mt-5 header-style">
                    <div className="col-md-12 text-center my-auto">
                        <div className="main-text header-style-mobile">
                            Who Gives A Sock
                        </div>
                        <div className="pb-3 tag-line">Ongoing sock donation drive.</div>
                    </div>
                </div>
                <div className="text-center text-primary mt-3">Providing brand new pairs of socks to thousands of New Yorkers living on the streets & in shelters.</div>
                <div className="row row justify-content-center mt-3">
                <a href="https://cash.app/$whogivesasock" target="_blank" type="button" className="btn btn-outline-primary px-5 py-2 shadow">Donate Today!</a>
                </div>
                <div className="card my-5 rounded-0 border-0 shadow bg-bg-color">
                    <div className="row no-gutters">
                        <div className="col-md-4 p-4">
                            <img src="https://instagram.fmia1-1.fna.fbcdn.net/v/t51.2885-15/e35/124201391_451127345869651_1415385177111669575_n.jpg?_nc_ht=instagram.fmia1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DLIcyPzjAqMAX8du-XE&tp=18&oh=618a9002b5ebabcbac2997ce7ccb0e7d&oe=5FD5D397" className="card-img" alt="LOGO" style={{ borderRadius: "50%" }} />
                        </div>
                        <div className="col-md-8 my-auto">
                            <div className="card-body text-center">
                                <div className="info-text py-3 border border-primary"> 1 organization </div>
                                <div className="info-text py-3 border border-primary my-2"> 3,079 <FaSocks /> collected </div>
                                <div className="info-text py-3 border border-primary"> 57,660 homeless in NYC </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const Layout = styled.div`

@import url('https://fonts.googleapis.com/css?family=Nanum Pen Script');

.main-text {
    font-size: 5rem;
    font-family: 'Nanum Pen Script', sans-serif;
    padding: 0;
    margin: 0;
}

.tag-line {
    color: #cfaf4d;
    letter-spacing: 3px;
    font-weight: light;
}

.info-text {
    font-size: 2rem;
    color: #696463;
    font-weight: lighter;
}

.info-text:hover {
    border-color:rgb(105, 100, 99) !important;
    box-shadow: 0 0 30px rgba(33,33,33,1) !important;
    transition: all 0.75s ease-in-out;
    background-color: rgba(105, 100, 99, 1);
    color: white;
}

.header-style {
    border-style: solid;
    border-width: 2px;
    border-left: 0;
    border-right: 0;
    border-color: #ddd6d3;
    color: #696463;
}

.header-style-mobile {
    @media not all and (min-width: 576px) {
      font-size: 2.5rem;
    }
}


`


interface HomeProps { }

export default Home;
