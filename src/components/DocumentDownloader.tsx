import { useDocumentData } from '@/context/DocumentData'
import { usePDF } from '@react-pdf/renderer'
import clsx from 'clsx'

import { Document } from './Document'

export const DocumentDownloader = () => {
  const { date } = useDocumentData()
  const [instance] = usePDF({ document: <Document /> })
  return (
    <a
      href={instance.url || ''}
      download={`Umsatzübersicht Immanuel Café ${date}.pdf`}
      className={clsx(
        'inline-block rounded-md bg-[#292929] px-4 py-2 text-white',
        instance.loading && 'pointer-events-none opacity-40',
      )}
    >
      PDF herunterladen
    </a>
  )
}
