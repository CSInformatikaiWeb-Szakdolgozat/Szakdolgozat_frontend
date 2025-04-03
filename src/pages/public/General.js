import React from 'react'
import { Container } from 'react-bootstrap'

function General(props) {
  return (
    <Container>
        dhjdfrejejhfge
        <h2>{props.elem.name}</h2>
        {props.elem.content}
    </Container>
  )
}

export default General
