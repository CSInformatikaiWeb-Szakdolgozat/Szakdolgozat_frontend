import React, { useContext, useEffect } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
import AdatokContext from '../../../contexts/AdatokContext';
import NavGordulo from './NavGordulo';

function NavigacioAlmenu(props) {
    const { menuLista, setMenuLista, getAdat } = useContext(AdatokContext)

    useEffect(() => {
        getAdat("/api/menus", setMenuLista);
    }, []);

    if (props.elem.szint === 1) {
        return (
        <NavDropdown
              title={props.elem.name}
              id="collapsible-nav-dropdown"
              className="text-uppercase nav-item dropdown"
            >
            {
                menuLista.map((almenu, index) => {
                    <NavGordulo almenu={almenu} key={index} index={index} />
                })
            }
            </NavDropdown>
        )
    } else {
        return (
            <Nav.Link className="text-white text-uppercase" href={props.elem.link}>
              {props.elem.name}
            </Nav.Link>
          )
    }
}

export default NavigacioAlmenu