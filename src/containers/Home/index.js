import React from 'react';
import './style.css'
import Card from '../../mycomponent/UI/Card';
import RecentPosts from './RecentPosts';
import blogData from '../../data/blog.json';
import Layout from '../../mycomponent/Layout';

const SideImage = props => {
    return (
        <div style={{ height: `${props.height}px`}}>
            <img style={{ height: '100%'}}  src={props.src} className="leftImage" alt="SideImage" />
        </div>
    );
}

const ImageGallary = props => (

    <div className="gallaryDesign" style={props.gallaryStyle}>

        <section style={{ width: props.largeWidth }}>
            <div style={{height: '450px'}}>
                <img style={{ width: '100%',height: '100%'}} src={require('../../BlockImage/'+props.imagesArray[0])} />
            </div>
        </section>

        <section className="sideImageDesigns" style={{ width: props.smallWidth }}>
            {
                props.imagesArray.map((image,index)=>(
                    <SideImage
                        key={index}
                        height={props.sideImageHeight}
                        src={require('../../BlockImage/'+image) }
                    />
                ))
            }              
        </section>

    </div>
)

const Home = () => {

    const gallaryHeight = 450;
    const gallaryStyle = {
        height: gallaryHeight + 'px',
        overflow: 'hidden'
    }

    const sideImageHeight = gallaryHeight / 3;

    const imgAr = blogData.data.map(post=>post.blogImage);

    return (
        <div>

            <Card>
                <ImageGallary
                    largeWidth="70%"
                    smallWidth="30%"
                    sideImageHeight={sideImageHeight}
                    gallaryStyle={gallaryStyle}
                    imagesArray={imgAr}
                />
            </Card>

            <section className="homeContainer">

                <Layout>
                    <RecentPosts style={{ width: '70%' }} />
                </Layout>
                
            </section>

        </div>
    );
};

export default Home;