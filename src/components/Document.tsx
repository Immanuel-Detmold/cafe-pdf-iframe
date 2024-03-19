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
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

// Create Document Component
export const Document = () => (
  <PdfDocument>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #123</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </PdfDocument>
)
