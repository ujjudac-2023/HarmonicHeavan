import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import leg1 from '../Photos/Leg1.webp';


class RespectToLegends extends React.Component {
    render() {
        return (
            <>
                <Header />

                <div style={{ backgroundColor: 'white' }}>
                    <p className="fs-1 text-#353C30">  <i><b>    We offer life time free service on any occation for the family of army officers died on the battelfield. Protecting the life of others.</b></i></p>
                    <img src={leg1} className="img-fluid" alt="..." style={{ width: '100%', height: '800px' }} />
                </div>

                <Footer/>
            </>
        )
    }
}

export default RespectToLegends;