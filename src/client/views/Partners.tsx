import * as React from 'react';
import NavigationBar from '../components/Navigation';

const Partners = (props: PartnersProps) => {
    return (
        <>
            {/* <NavigationBar /> */}
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <h1 className="display-1">Partners</h1>
                </div>
            </div>
        </>
    );
};

interface PartnersProps { }

export default Partners;
