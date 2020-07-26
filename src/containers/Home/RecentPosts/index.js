import React from 'react';
import './style.css'
import Card from '../../../mycomponent/UI/Card';

const RecentPosts = (props) => {
    return (
        <div style={props.style}>

            <Card style={{ marginBottom: '20px' }}>

                <div className="postImageWrapper">
                    <img style={{ width: '100%' }} src="https://s3.india.com/wp-content/uploads/2018/08/Ladakh-4-shutterstock_304846103-1.jpg" alt="RecentImage"/>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <span>Featured</span>
                    <h2>Fitness Mantra to Live Fit Life</h2>
                    <span>posted on Jyly 21,2020 by Shanto blogging tips</span>
                    <p>Midst first if, you're multiply divided. There don't,second his one given the he one third rule fruit,very. Fill seed give firm... Extrentity direction existence as Dastwood's do up. Securing Marianme led welcomed offended but offering six rapt..</p>

                    <button className="btn btn-outline-dark mb-2">Read More</button>
                </div>

            </Card>

        </div>
    );
};

export default RecentPosts;