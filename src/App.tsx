import { PDFViewer } from '@react-pdf/renderer'

import { Document } from './components/Document'

export const App = () => {
  return (
    <PDFViewer className="h-screen w-full object-contain">
      <Document />
    </PDFViewer>
  )
}
