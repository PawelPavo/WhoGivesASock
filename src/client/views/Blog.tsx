import * as React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const Blog = (props: BlogProps) => {
    return (
        <>

            {/* <NavigationBar /> */}
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center font-weight-lighter text-primary bg-light p-5">
                    <div className="row display-1 text-center p-5 font-weight-lighter">
                        Under Construction...
                    </div>
                    <div className="row">
                        <h1 className="font-weight-light">We will be blogging soon.</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

interface BlogProps { }

export default Blog;
