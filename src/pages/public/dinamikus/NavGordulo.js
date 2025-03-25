import React from 'react'
import { NavDropdown } from 'react-bootstrap'

function NavGordulo(props) {
    if (props.almenu.szint == 2) {
        return (
          <NavDropdown.Item href={props.almenu.link}>{props.almenu.name}</NavDropdown.Item>
        )
      }
}

export default NavGordulo