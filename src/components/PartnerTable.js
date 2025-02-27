import React, { useContext } from 'react'
import AdatokContext from '../contexts/AdatokContext';
import { Button, Table } from 'react-bootstrap';
import PartnerTableSor from './PartnerTableSor';

function PartnerTable() {
    const { partnerLista } = useContext(AdatokContext);

    return (
      <div>
        <div className="">
          <Button
            onClick={() => {
              // postAdat("/menu",);
              console.log("felvett új menüt");
            }}
            variant="success"
          >
            Mentés
          </Button>
        </div>
     
  
        <Table striped bordered hover>
          <thead className="text-center">
            <tr>
              <th>Név</th>
              <th>Oldal</th>
              <th>Megjelenítés</th>
              <th>Modosít</th>
              <th>Törlés</th>
            </tr>
          </thead>
          <tbody>
            <>
              {partnerLista.map((elem, index) => {
                console.log("belépet a ciklusba");
                return <PartnerTableSor elem={elem} key={index} index={index} />;
              })}
            </>
          </tbody>
        </Table>
      </div>
  )
}

export default PartnerTable
