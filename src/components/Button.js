import PropTypes from 'prop-types'
const Button = ({color, text}) => {
    const onClick = (e) => {
        console.log(e)
    }

    return  <button onClick={onClick} className="btn" style={{backgroundColor :color}}>{text}</button>
}
Button.defaultProps ={
    text : " buttonss",
    color : "green"
}
Button.prototype = {
    text : PropTypes.string,
    color : PropTypes.string,
}
export default Button