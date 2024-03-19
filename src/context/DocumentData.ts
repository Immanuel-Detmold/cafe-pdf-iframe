import { createContext, useContext } from 'react'

const dataDefaults = {
  title: 'Untitled Document',
  fileName: 'document',
}

export type DocumentData = typeof dataDefaults

function getDocumentData() {
  const search = new URLSearchParams(window.location.search)
  return Object.fromEntries(
    Object.entries(dataDefaults).map(([key, value]) => [
      key,
      search.get(key) || value,
    ]),
  ) as DocumentData
}

const DocumentDataContext = createContext<DocumentData>(getDocumentData())

export const DocumentDataProvider = DocumentDataContext.Provider

export const useDocumentData = () => useContext(DocumentDataContext)
