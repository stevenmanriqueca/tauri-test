// PDFWithQRCode.js
import React from 'react';
import { Document, Page, View, Text, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer';
import QRCodeLib from 'qrcode';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const generateQRCode = async (value) => {
  return new Promise((resolve, reject) => {
    QRCodeLib.toDataURL(value, { errorCorrectionLevel: 'H' }, (err, url) => {
      if (err) {
        reject(err);
      } else {
        resolve(url);
      }
    });
  });
};

const PDFWithQRCode = ({ qrData }) => {
  const qrCodeDataUrl = generateQRCode(qrData);

  const MyDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>QR Code:</Text>
          <Image src={qrCodeDataUrl} />
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <h1>PDF with QR Code</h1>
      <PDFViewer>
        {MyDocument}
      </PDFViewer>
    </div>
  );
};

export default PDFWithQRCode;
