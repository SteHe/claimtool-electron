export const initialState = {
  number: '',
  version: '',
  applicant: '',
  title: '',
  ordnum: 0,
  lang: '',
  keywords: '',
  priority: '',
  claim_set: [],
  documents: [],
}

export const getDossierState = (state = initialState) =>
  state || initialState

export const getNumber = (state = initialState) =>
  getDossierState(state).number

export const getVersion = (state = initialState) =>
  getDossierState(state).version

export const getClaimset = (state = initialState) =>
  getDossierState(state).claim_set

export const getDocuments = (state = initialState) =>
  getDossierState(state).documents

export const getDossier =  (state = initialState) =>
  ({
    applicant: getDossierState(state).applicant,
    title: getDossierState(state).title,
    priority: getDossierState(state).priority,
    number: getDossierState(state).number,
    lang: getDossierState(state).lang,
    version: getDossierState(state).version,
    keywords: getDossierState(state).keywords,
  })

