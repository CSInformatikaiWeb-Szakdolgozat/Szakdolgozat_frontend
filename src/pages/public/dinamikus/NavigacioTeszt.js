import React, { useContext, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import AdatokContext from '../../../contexts/AdatokContext'
import NavigacioFomenu from './NavigacioFomenu'
import NavigacioAlmenu from './NavigacioAlmenu'

function NavigacioTeszt() {
    const { menuLista, setMenuLista, getAdat } = useContext(AdatokContext)

    useEffect(() => {
        getAdat("/api/menus", setMenuLista);
    }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary sticky-top background"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="./kepek/test_logo.png"
            width={100}
            className="img-fluid"
            alt="Logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {
                menuLista.map((elem, index) => {
                    console.log("Belépett a ciklusba")
                    return <NavigacioFomenu elem={elem} key={index} index={index} />;
                })
            }
          </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default NavigacioTeszt