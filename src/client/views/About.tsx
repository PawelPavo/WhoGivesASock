import * as React from 'react';
import NavigationBar from '../components/Navigation';

const About = (props: AboutProps) => {
    return (
        <>
            {/* <NavigationBar /> */}
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <h1 className="display-1">About</h1>
                </div>
            </div>
        </>
    );
};

interface AboutProps { }

export default About;
