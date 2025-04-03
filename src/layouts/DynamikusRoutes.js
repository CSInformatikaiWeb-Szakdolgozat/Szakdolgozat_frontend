import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import AdatokContext from '../contexts/AdatokContext';
import General from '../pages/public/General';

function DynamikusRoutes() {
  const {cikkLista} = useContext(AdatokContext);

  return (
    cikkLista.map((elem, index) => {
      return (
        <Route path={elem.page_link} element={<General elem={elem} key={index} index={index} />} />
      )
    })
  )
}

export default DynamikusRoutes