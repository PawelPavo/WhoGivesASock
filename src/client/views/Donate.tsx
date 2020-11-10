import * as React from 'react';
import NavigationBar from '../components/Navigation';

const Donate = (props: DonateProps) => {
    return (
        <>
            {/* <NavigationBar /> */}
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <h1 className="display-1">Donate</h1>
                </div>
            </div>
        </>
    );
};

interface DonateProps { }

export default Donate;
