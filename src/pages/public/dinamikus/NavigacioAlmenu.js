import React, { useContext, useEffect } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
import AdatokContext from '../../../contexts/AdatokContext';

function NavigacioAlmenu(props) {
    const { menuLista, setMenuLista, getAdat } = useContext(AdatokContext)

    useEffect(() => {
        getAdat("/api/menus", setMenuLista);
    }, []);

    if (props.elem.main_menu != null) {
        <NavDropdown
              title={setMenuLista[props.elem.main_menu].name}
              id="collapsible-nav-dropdown"
              className="text-uppercase nav-item dropdown"
            ></NavDropdown>
            for (let i = 0; i < [...setMenuLista].length; i++) {
                if (setMenuLista[i].main_menu == props.elem.main_menu) {
                    return (
                        <NavDropdown.Item href={setMenuLista[i].link}>{setMenuLista[i].name}</NavDropdown.Item>
                    )
                }
            }
    } else {
        return (
            <Nav.Link className="text-white text-uppercase" href={props.elem.link}>
              {props.elem.name}
            </Nav.Link>
          )
    }
}

export default NavigacioAlmenu