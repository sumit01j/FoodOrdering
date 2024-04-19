import {Link,Outlet} from 'react-router-dom'
const FoodOrderingNavBar = ()=>{

    return(
        <div >
            <nav className='navbar navbar-expand-md bg-dark d-flex justify-content-center' data-bs-theme="dark">
        <ul className='navbar-nav'>
                    <li className='nav-item'>                        
                        <Link className='nav-link active' to="/home">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link active' to="/menu">Menu</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link active' to="/gallary">Gallary</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link active' to="/order">Order Now</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link active' to="/reservation">Reserve Table</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default FoodOrderingNavBar