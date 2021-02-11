import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color='black' 
            text={showAdd ? 'close' : 'New Task'} 
            onClick={onAdd}/>
        </header>
    )
}


Header.defaultProps = {
    title: 'To-Do',
}

export default Header
