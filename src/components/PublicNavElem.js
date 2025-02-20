import React from "react";

function PublicNavElem(props) {
  if (props.elem.main_menu == null) {
    return (
      <>
        <Nav.Link className="text-white text-uppercase" href={props.elem.link}>
          {props.elem.name}
        </Nav.Link>
      </>
    );
  }
  else{
    return(
        <>
            <NavDropdown
              title={props.elem.link}
              id="collapsible-nav-dropdown"
              className="text-uppercase nav-item dropdown"
            ></NavDropdown>
        </>
    )
  }
}

export default PublicNavElem;
