import MenuCard from "../menu/MenuCard"
import menus from "../menu/menu_data"
import food from '../images/cover.jpg'


const Home = () => {

    return(
        <>  
        <div className="row align-items-center" style={{ backgroundImage: `url(${food})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '350px' }}>
        <div className="d-flex d-inline align-items-center justify-content-center">
        <h1 className="m-2 ">Order Your Food </h1>
            <h1 >here!!!</h1>
            <input className="border border-2 rounded-5 m-3 p-2" size={50} placeholder="Search here" />
        </div>
        </div>
        <h1 className="text-center mt-4 mb-4"></h1>
        <MenuCard menus={menus} />
        
    </>
)
}

export default Home