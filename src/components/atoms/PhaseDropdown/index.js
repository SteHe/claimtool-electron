import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Label, Input } from 'reactstrap'


const PhaseDropdown = () => {
  return (
    <Row>
      <Label for="dossierPhase" sm={2}>Phase</Label>
      <Col md={2}>
        <Input type="select" name="select" id="dossierPhase">
          <option>EPC</option>
          <option>PCT</option>
          <option>NAT</option>
        </Input>
      </Col>
    </Row>
  )
}

PhaseDropdown.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

PhaseDropdown.defaultProps = {
  palette: 'grayscale',
}

export default PhaseDropdown
