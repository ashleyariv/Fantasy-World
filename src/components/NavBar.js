import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <nav id='nav'>
            <NavLink className= 'links' to='/'>Home </NavLink>
            <NavLink className='links' to='/mybooks'> My List </NavLink>
            <NavLink className='links' to='/reviews'> Book Reviews</NavLink>
        </nav>
    )
}

export default NavBar 