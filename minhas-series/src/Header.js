
import React, {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavLink,
    NavItem,
    NavbarToggler
    } from 'reactstrap'
  import {Link} from 'react-router-dom'
const Header =()=>{
const [open, setOpen] = useState(false)
const toggle =() =>{
setOpen(!open)

  }

return (
    
    <Navbar color='light' light expand='md'> 
      <div className='container'>
      <NavbarBrand tag={Link} to= '/'> Minhas Séries </NavbarBrand>
      <NavbarToggler/>
      <Collapse isOpen = {true} navbar>
      <Nav className='ml-auto' navbar>
      <NavItem>
         <NavLink tag={Link} to ='/generos'> Generos </NavLink>
        </NavItem>
        <NavItem>
         <NavLink tag={Link} to ='/generos'> Séries </NavLink>
        </NavItem>
        

        </Nav>
     </Collapse>
     </div>
    </Navbar>

    )
    
}
export default Header
