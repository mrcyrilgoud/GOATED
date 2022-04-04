import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title,onAdd,showAdd}) => {
  const location = useLocation()
  return (
    <header className='header'>
        <h1 style={headStyle}>{title}</h1>
        {location.pathname === '/' && (<Button color ={'#FFDA00'}

          text={showAdd ? 'Close' : 'Add'} 
          onClick = {onAdd}/>)}
    </header>
    
  )
}
Header.defaultProps = {
    title: 'Request Tracker',
}

Header.propTypes={
    title: PropTypes.string.isRequired,
}

const headStyle ={
    color: 'black', backgroundColor: ''
}
export default Header