import React from "react";
import leg1 from '../Photos/Leg1.webp';


class RespectToLegends extends React.Component {
    render() {
        return (
            <>

                <div className="bg-dark text-light">
                    <p className="fs-1 text-#353C30">  <b>    We offer life time free service on any occation for the family of army officers died on the battelfield. Protecting the life of others.</b></p>
                    <img src={leg1} className="img-fluid" alt="..." style={{ width: '100%', height: '800px' }} />
                </div>

            </>
        )
    }
}

export default RespectToLegends;