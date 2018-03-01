import React from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row, Label, Input, } from 'reactstrap';

import { PhaseDropdown } from 'components'

const DossierForm = ({
  handleSubmit, phase, title, keywords, lang, applicant, number, priority, remarks, ...props
}) => {
  return (
    <Container>
      <Row>
        <Col sm={5}>
          <h4 className="text-primary">{number}</h4>
        </Col>
      </Row>
      <Row>
        <Label for="dossierLang" sm={2} bsSize="sm">Language</Label>
        <Label for="dossierPriority" sm={3} bsSize="sm">Priority</Label>
        <Label for="dossierApplicant" sm={7} bsSize="sm">Applicant</Label>
      </Row>
      <Row>
        <Col sm={2}>
          <Input type="select" name="select" id="dossierLang" bsSize="sm">
            <option>DE</option>
            <option>EN</option>
            <option>FR</option>
          </Input>
        </Col>
        <Col sm={3}>
          <Input type="datetime" name="priority" id="dossierPriority" value={priority} bsSize="sm"/>
        </Col>
        <Col sm={7}>
          <Input type="text" name="applicant" id="dossierApplicant" value={applicant} bsSize="sm"/>
        </Col>
      </Row>
      <Row>
        <Label for="dossierTitle" sm={3} bsSize="sm">Title</Label>
      </Row>
      <Row>
        <Col sm={12}>
          <Input type="text" name="title" id="dossierTitle" value={title} />
        </Col>
      </Row>
      <Row>
        <Label for="dossierRemarks" sm={3} bsSize="sm">Remarks</Label>
      </Row>
      <Row>
        <Col sm={12}>
          <Input type="text" name="remarks" id="dossierRemarks" value={remarks} />
        </Col>
      </Row>
      <PhaseDropdown />
    </Container>
  )
}

DossierForm.propTypes = {
  title: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.string,
  phase: PropTypes.string,
  number: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

export default DossierForm
