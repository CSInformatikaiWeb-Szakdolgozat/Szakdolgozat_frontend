import React from 'react'
import { Container } from 'react-bootstrap'

function General(props) {
  return (
    <Container>
        <h2>{props.elem.name}</h2>
        <div
          dangerouslySetInnerHTML={{__html: props.elem.content}}
        />
    </Container>
  )
}

export default General
