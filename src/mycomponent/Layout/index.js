import React from 'react';
import SideBar from '../SideBar';
import './style.css'

const Layout = (props) => {
    return (
        <div>

            <div className="containerDesigns">
                {props.children}
                <SideBar/>
            </div>

            <div className="footerDesing">
                <p className=" text-info">Design by shahinur rahman</p>
            </div>

        </div>
        
    );
};

export default Layout;