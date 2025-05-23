import React, { useContext, useEffect } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
import AdatokContext from '../../../contexts/AdatokContext';
import NavGordulo from './NavGordulo';

function NavigacioAlmenu(props) {
    const { menuLista, setMenuLista, getAdat } = useContext(AdatokContext)

    useEffect(() => {
        getAdat("/api/menus", setMenuLista);
    }, []);

    if (props.elem.level === 0) {
        return (
            <Nav.Link className="text-white text-uppercase" href={props.elem.link}>
              {props.elem.name}
            </Nav.Link>
          )
    } else if (props.elem.level === 1 && props.elem.main_menu === null) {
        let fo = props.elem.id;
        return (
        <NavDropdown
              title={props.elem.name}
              id="collapsible-nav-dropdown"
              className="text-uppercase nav-item dropdown"
            >
            {
                menuLista.map((almenu, index) => {
                    if (almenu.main_menu === fo) {
                        return <NavDropdown.Item href={almenu.link} key={index}>{almenu.name}</NavDropdown.Item>
                    }
                })
            }
            </NavDropdown>
        )
    }
}

export default NavigacioAlmenu