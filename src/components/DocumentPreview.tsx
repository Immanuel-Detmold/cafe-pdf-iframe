import { PDFViewer } from '@react-pdf/renderer'

import { Document } from './Document'

export const DocumentPreview = () => {
  return (
    <PDFViewer className="h-screen w-full object-contain">
      <Document />
    </PDFViewer>
  )
}
