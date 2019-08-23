import React from 'react';
import "./headerHalber.scss";
import CalendarIcon from "../svg/CalendarIcon";
import Logo from "../svg/Logo";
import PropTypes from "prop-types";

const HeaderHalber = (props) => {
    return (
        <span className="header-halber">
             <Logo/>
             <div>
                    <p className="p3">{props.name}</p>
                    <p className="p4">{props.fonction}</p>
             </div>
            </span>
    )
}

export default HeaderHalber;
HeaderHalber.propTypes={
    name: PropTypes.string.isRequired,
    fonction: PropTypes.string.isRequired,
}