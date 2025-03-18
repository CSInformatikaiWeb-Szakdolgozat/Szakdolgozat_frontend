import React from 'react'
import { Nav } from 'react-bootstrap'

function NavigacioFomenu(props) {
  /* Ez csak a főmenüpontokat hozza létre */
  if (props.elem.main_menu == null) {
    return (
      <Nav.Link className="text-white text-uppercase" href={props.elem.link}>
        {props.elem.name}
      </Nav.Link>
    )
  }
}

export default NavigacioFomenu