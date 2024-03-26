import { createContext, useContext } from 'react'

const dataDefaults = {
  date: new Date().toISOString(),
  ordersCount: '0',
  totalRevenue: '0',
  cashRevenue: '0',
  cardRevenue: '0',
  paypalRevenue: '0',
}
type DocumentDataKeys = keyof typeof dataDefaults

const processEuro = (value: string) =>
  parseFloat(value).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
  })

const processors = {
  date: (value: string) => new Date(value).toLocaleDateString(),
  ordersCount: (value: string) => parseInt(value).toLocaleString(),
  totalRevenue: processEuro,
  cashRevenue: processEuro,
  cardRevenue: processEuro,
  paypalRevenue: processEuro,
} as const satisfies { [key in DocumentDataKeys]: (value: string) => unknown }

export type DocumentData = {
  [key in DocumentDataKeys]: ReturnType<(typeof processors)[key]>
}

function getDocumentData() {
  const search = new URLSearchParams(window.location.search)
  return Object.fromEntries(
    Object.entries(dataDefaults).map(([key, value]) => [
      key,
      processors[key as DocumentDataKeys](search.get(key) || value),
    ]),
  ) as DocumentData
}

const DocumentDataContext = createContext<DocumentData>(getDocumentData())

export const DocumentDataProvider = DocumentDataContext.Provider

export const useDocumentData = () => useContext(DocumentDataContext)
