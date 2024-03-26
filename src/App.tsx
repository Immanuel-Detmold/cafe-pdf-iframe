import { DocumentDownloader } from './components/DocumentDownloader'
import { useDocumentData } from './context/DocumentData'

export const App = () => {
  const documentData = useDocumentData()
  return (
    <div>
      <DocumentDownloader />
      <pre>{JSON.stringify(documentData, null, 2)}</pre>
    </div>
  )
}
// import { DocumentPreview } from './components/DocumentPreview'

// export const App = () => {
//   return <DocumentPreview />
// }
