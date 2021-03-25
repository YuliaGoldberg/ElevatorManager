
import PropTypes from 'prop-types'

const Button = ({ id, color, text, onClick}) => {
    return (
        <button 
        id={id}
        onClick={onClick} 
        style={{ backgroundColor: color }} 
        className='btn'
        >{text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelBlue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

