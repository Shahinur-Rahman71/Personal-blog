import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import './style.css';
import blogData from '../../data/blog.json';
import {NavLink} from 'react-router-dom'

const SideBar = () => {

    const [postBar, setPost] = useState([]);

    useEffect(() => {
        const posts = blogData.data;
        setPost(posts);
    }, [postBar]);

    return (
        <div className="sideBarContainer">

            <Card className="cardDesigns" >
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="SideImageDesign">
                    <img src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.0-9/67575566_937620856617577_3074630949628018688_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=jSc-Fc-mZb8AX_y1fpt&_nc_ht=scontent.fdac5-1.fna&oh=3094d5da6715fadcd2c783eb353a9be0&oe=5F322566" alt="MyImage" />
                </div>
                <div className="aboutDesign">
                    <p>My name is shahinur rahman shanto. I am a software engineer. I live in bangladesh.</p>
                </div>
            </Card >

            <Card className="cardDesigns" >
                <div className="cardHeader">
                    <span>Social Networks</span>
                </div>
                <div className="cardHeaderIcon">
                    <a href="https://www.facebook.com/" target="blank"><i className=" sideIcon fab fa-facebook  text-light bg-info rounded-circle p-2"></i></a>
                    <a href="https://www.linkedin.com/" target="blank"><i className=" sideIcon fab fa-linkedin  text-light bg-info rounded-circle p-2"></i></a>
                    <a href="https://www.twitter.com/" target="blank" ><i className=" sideIcon fab fa-twitter  text-light bg-info rounded-circle p-2"></i></a>
                    <a href="https://www.instagram.com/" target="blank"><i className=" sideIcon fab fa-instagram-square text-light bg-info rounded-circle p-2"></i></a>
                </div>
            </Card>

            {/* <Card style={{ marginBottom: '10px', padding: '20px', boxSizing: 'border-box' }}> */}
            <Card className="cardDesigns">
                <div className="cardHeader">
                    <span>Recent Post</span>
                </div>
                
                <div className="recentPosts mt-4">
                   {postBar.map(post=>{
                       return(
                            <NavLink key={post.id} to={`/post/${post.slug}`}>
                                <div className="recentPost">
                                    <h3>{post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                </div>
                            </NavLink>
                       )
                   })}
                </div>  

            </Card>
        </div >
        
    );
};

export default SideBar;