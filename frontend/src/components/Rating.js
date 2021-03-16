import React from 'react'
import propTypes from 'prop-types';

const Rating = ({value,text,color}) => {
    return (
        <div className="rating">
           <span>
              <i style={{color}} className={value >= 1 ? "fas fa-star": value >= 0.5 ? "fas fa-star-half-alt": "far fa-star"}></i>
              <i style={{color}}  className={value >= 2 ? "fa fa-star": value >= 1.5 ? "fa fa-star-half-alt": "fa fa-star"}></i>
              <i style={{color}}  className={value >= 3 ? "fa fa-star": value >= 2.5 ? "fa fa-star-half-alt": "fa fa-star"}></i>
              <i style={{color}}  className={value >= 4 ? "fa fa-star": value >= 3.5 ? "fa fa-star-half-alt": "fa fa-star"}></i>
              <i style={{color}}  className={value >= 5 ? "fa fa-star": value >= 4.5 ? "fa fa-star-half-alt": "fa fa-star"}></i>
               </span> 
               <span>{text && text}</span>
        </div>
    )
}
Rating.defaultProps={
    color:"#f8e826"
}

Rating.propTypes={
    value: propTypes.number.isRequired,
    text: propTypes.string.isRequired,
    color: propTypes.string,
}
export default Rating