import * as React from 'react';
import NavigationBar from '../components/Navigation';

const Blog = (props: BlogProps) => {
    return (
        <>
            {/* <NavigationBar /> */}
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <h1 className="display-1">Blog</h1>
                </div>
            </div>
        </>
    );
};

interface BlogProps { }

export default Blog;
