import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FoodOrderingNavBar from './FoodOrderingNavBar'
import Home from '../components/home/Home'
import Menu from '../components/menu/Menu'
import Gallary from '../components/gallary/Gallary'
import Order from '../components/order/Order'
import Reservation from '../components/reservation/Reservation'

//Router Component
const FoodOrderingRouter = () => {

    //Route definitions 
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <FoodOrderingNavBar />}>
                    {/* child rout definitions */}
                    <Route path='/home' element={<Home/>} />
                    <Route path='/menu' element = { <Menu/> } />
                    <Route path='/gallary' element = { <Gallary/> } />
                    <Route path='/order' element = { <Order/> } />
                    <Route path='/reservation' element = { <Reservation/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default FoodOrderingRouter