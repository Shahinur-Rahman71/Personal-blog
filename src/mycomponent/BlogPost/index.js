import React,{useState,useEffect} from 'react';
import './style.css'
import Card from '../UI/Card';
import blogData from '../../data/blog.json'

const BlogPost = (props) => {
    
    const [post,setPost]=useState({
            id: "",
            blogCategory: "", 
            blogTitle : "",
            slug: "",
            postedOn: "",
            author: "",
            blogImage: "", 
            blogText: ""
    });


    const [slug,setSlug]=useState('');

    useEffect(()=>{
        const slug = props.match.params.slug;
        const posts=blogData.data.find(post=>post.slug==slug);
        setPost(posts);
        setSlug(slug);
    },[post,props.match.params.slug]);

    if(post.blogImage=="") return null;

    return (
        <div className="blogPostDesign">
            <Card>

                <div className="blogHeader">
                    <span className="featured">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
                </div>

                <div className="PostedImageDesign">
                    <img style={{width: '100%'}} src={require("../../BlockImage/"+post.blogImage)}alt="PostImage"/>
                </div>

                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>
                </div>

            </Card>
        </div>
        
       
    );
};

export default BlogPost;