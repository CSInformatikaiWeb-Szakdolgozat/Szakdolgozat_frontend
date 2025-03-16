import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import AdatokContext from '../contexts/AdatokContext';

function EsemenyTableSor(props) {
    const { patchAdat, deletAdat,getAdat,setEsemenyLista } = useContext(AdatokContext);
    
    const [isOn, setIsOn] = useState(props.elem.megjelenit);
    const toggleSwitch = () => {
      setIsOn(!isOn);
    };
    return (
      <tr>
        <td className="text-center">{props.elem.description}</td>
        <td className="text-center">{props.elem.location}</td>
        <td className="text-center">{props.elem.date}</td>
        <td className="text-center">
          <div>
            <Button
              variant={isOn ? "success" : "outline-danger"}
              onClick={toggleSwitch}
            >
              {isOn ? "Megjelenítve" : "Nincs Megjelenítve"}
            </Button>
          </div>
        </td>
        <td className="text-center">
          <Button
            //nem mükszik még!
            onClick={() => {
              patchAdat("/api/event", props.elem.id);
            }}
            variant="warning"
          >
            Szerkesztés
          </Button>
        </td>
        <td className="text-center">
          <Button
            onClick={() => {
              deletAdat("/api/event", props.elem.id);
              getAdat("/api/events", setEsemenyLista);
            }}
            variant="danger"
          >
            Törlés
          </Button>
        </td>
      </tr>
    );
}

export default EsemenyTableSor