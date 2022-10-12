import React from "react";
import PropTypes from 'prop-types'

const Rating = ({value, text, color}) => {

    const firstStar = value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'
    const secondStar = value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'
    const thirdStar = value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'
    const fourthStar = value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'
    const fifthStar = value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'

    console.log('text', text);
	return (
		<div className='rating'>
			<span>
                <i style={{color}} className={firstStar}></i>
            </span>
            <span>
            <i style={{color}} className={secondStar}></i>
        </span>
        <span>
                <i style={{color}} className={thirdStar}></i>
            </span>
            <span>
                <i style={{color}} className={fourthStar}></i>
            </span>
            <span>
                <i style={{color}} className={fifthStar}></i>
            </span>
            <span>
                {text && text}
            </span>
		</div>
	);
};


export default Rating;

Rating.defaultProps = {
    color: '#f8e825'
}

Rating.propTypes = {
    value : PropTypes.number.isRequired,
    text : PropTypes.string.isRequired,
    color: PropTypes.string
}
