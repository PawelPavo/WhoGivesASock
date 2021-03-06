import * as React from 'react';
import NavigationBar from '../components/Navigation';

const Partners = (props: PartnersProps) => {
    return (
        <>
            {/* <NavigationBar /> */}
            <div className="container">
            <div className="row d-flex justify-content-center align-items-center font-weight-lighter text-primary bg-light p-5">
                    <div className="row display-1 text-center p-5 font-weight-lighter">
                        Under Construction...
                    </div>
                    <div className="row">
                        <h1 className="font-weight-light">We are gathering our partners.</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

interface PartnersProps { }

export default Partners;
