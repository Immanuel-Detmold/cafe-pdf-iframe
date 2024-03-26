import { useDocumentData } from '@/context/DocumentData'
// import {
//   DataTableCell,
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
// } from '@david.kucsai/react-pdf-table'
import {
  Page,
  Document as PdfDocument,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    fontSize: 13,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  tableHeaderCell: {
    padding: 5,
    fontSize: 13,
  },
  listing: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  listingTitle: {
    width: 150,
  },
  listingText: {
    width: 100,
    textAlign: 'right',
  },
})

// Create Document Component
export const Document = () => {
  const {
    date,
    ordersCount,
    totalRevenue,
    cardRevenue,
    cashRevenue,
    paypalRevenue,
  } = useDocumentData()
  return (
    <PdfDocument>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Umsatzübersicht Immanuel Café</Text>
          <Text style={styles.subtitle}>vom {date}</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.listing}>
            <Text style={styles.listingTitle}>Anzahl Bestellungen:</Text>
            <Text style={styles.listingText}>{ordersCount}</Text>
          </View>
          <View style={styles.listing}>
            <Text style={styles.listingTitle}>Gesamtumsatz:</Text>
            <Text style={styles.listingText}>{totalRevenue}</Text>
          </View>
          <View style={styles.listing}>
            <Text style={styles.listingTitle}>Umsatz Bar:</Text>
            <Text style={styles.listingText}>{cashRevenue}</Text>
          </View>
          <View style={styles.listing}>
            <Text style={styles.listingTitle}>Umsatz Café Karte:</Text>
            <Text style={styles.listingText}>{cardRevenue}</Text>
          </View>
          <View style={styles.listing}>
            <Text style={styles.listingTitle}>Umsatz PayPal:</Text>
            <Text style={styles.listingText}>{paypalRevenue}</Text>
          </View>
        </View>
        {/* <View style={styles.section}>
          <Table
            data={[
              {
                firstName: 'John',
                lastName: 'Smith',
                dob: new Date(2000, 1, 1),
                country: 'Australia',
                phoneNumber: 'xxx-0000-0000',
              },
            ]}
          >
            <TableHeader>
              <TableCell style={styles.tableHeaderCell}>First Name</TableCell>
              <TableCell style={styles.tableHeaderCell}>Last Name</TableCell>
              <TableCell style={styles.tableHeaderCell}>DOB</TableCell>
              <TableCell style={styles.tableHeaderCell}>Country</TableCell>
              <TableCell style={styles.tableHeaderCell}>Phone Number</TableCell>
            </TableHeader>
            <TableBody>
              <DataTableCell getContent={(r) => r.firstName} />
              <DataTableCell getContent={(r) => r.lastName} />
              <DataTableCell getContent={(r) => r.dob.toLocaleString()} />
              <DataTableCell getContent={(r) => r.country} />
              <DataTableCell getContent={(r) => r.phoneNumber} />
            </TableBody>
          </Table>
        </View> */}
      </Page>
    </PdfDocument>
  )
}
