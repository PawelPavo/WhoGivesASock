import * as React from 'react';
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { FaSocks } from 'react-icons/fa';
import styled from 'styled-components';

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
            <div className="bg-custom-service-card-bg text-light pb-5">
                {/* <NavigationBar /> */}
                <div className="container">
                    <div className="col-md-12 p">
                        <h1 className="display-1 font-weight-lighter text-center mobile-text ">#WhoGivesASock</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 border py-5">
                            <p className="lead text-justify">Ongoing donation drive providing brand new pairs of socks to thousands of New Yorkers living on the streets & in shelters.</p>
                            <p className="font-weight-lighter text-justify">We are here to collect socks and inspire others to see a need in their community and be creative in their approaches to fill that need.</p>
                            <div className="col-md-12 text-center">
                                <a className="btn btn-logo-blue btn-lg mt-3" href="https://cash.app/$whogivesasock" target="_blank" role="button">Donate Today!</a>
                            </div>
                        </div>
                        <div className="col-md-4 my-auto mx-auto">
                            <IconContext.Provider value={{ style: { fontSize: '30px', color: "#ffbd4a" } }}>
                                <div className="text-center">
                                    <h3 className="mobile-text font-weight-lighter"> 1 organization </h3>
                                    <h3 className="mobile-text font-weight-lighter my-3"> 3,079 <FaSocks /> collected </h3>
                                    <h3 className="mobile-text font-weight-lighter"> 57,660 homeless in NYC </h3>
                                </div>
                            </IconContext.Provider>
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


interface HomeProps { }

export default Home;
