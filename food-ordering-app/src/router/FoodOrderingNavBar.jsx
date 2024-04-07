import {Link,Outlet} from 'react-router-dom'
const FoodOrderingNavBar = ()=>{

    return(
        <div>
             <nav className='navbar navbar-expand-md bg-dark' data-bs-theme="dark">
                <ul className='navbar-nav'>
                    <li className='nav-item'>                        
                        <Link className='nav-link' to="/home">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/menu">Menu</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/gallary">Gallary</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/order">Order Now</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/reservation">Reserve Table</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default FoodOrderingNavBar