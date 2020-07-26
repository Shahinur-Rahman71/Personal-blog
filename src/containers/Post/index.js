import React from 'react';
import './style.css';
import BlogPost from '../../mycomponent/BlogPost';
import Layout from '../../mycomponent/Layout';


const Post = (props) => {
    console.log(props);

    return (
        <Layout>
            <BlogPost {...props}/>
        </Layout>
    );
};

export default Post;