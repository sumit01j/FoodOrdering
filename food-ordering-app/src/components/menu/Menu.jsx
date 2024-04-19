import MenuCard from "./MenuCard"
import menus from "./menu_data"
 const Menu = ()=>{

    return (
    <>
    <div >   
    <MenuCard menus={menus} />
    </div>
      </>
    )
}

export default Menu