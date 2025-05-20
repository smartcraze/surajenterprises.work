'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Import PDF components directly
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Dynamic import for PDFViewer
const PDFViewer = dynamic(
    () => import('@react-pdf/renderer').then(mod => mod.PDFViewer),
    { ssr: false }
);

const PDFDownloadLink = dynamic(
    () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
    { ssr: false }
);

const quotationData = [
    { id: 1, item: 'Shuttering for Footing', unit: 'Per Sq. Mtr.', rate: '320.00' },
    { id: 2, item: 'Column box shuttering and deshutering', unit: 'Per Sq. Mtr.', rate: '320.00' },
    { id: 3, item: 'Starter Making', unit: '1 No.', rate: '350.00' },
    { id: 4, item: 'Starter fixing', unit: '1 No.', rate: '200.00' },
    { id: 5, item: 'Board Making', unit: 'Per Sq. Mtr.', rate: '220.00' },
    { id: 6, item: 'Slab and beam shuttering and deshuttering', unit: 'Per Sq. Mtr.', rate: '320.00' },
    { id: 7, item: 'Stair Case beam and waste slab in riser', unit: 'Per Sq. Mtr.', rate: '350.00' },
    { id: 8, item: 'Chhajja Lintel and other works', unit: 'Per Sq. Mtr.', rate: '350.00' },
    { id: 9, item: 'Staging work above 3 mtr height and additional support', unit: 'Per Cu. Mtr.', rate: '85.00' },
    { id: 10, item: 'Carpenter and Barbender rate', unit: 'No/8 Hrs.', rate: '950.00' },
    { id: 11, item: 'Helper N.M.R rate', unit: 'No./8 Hrs.', rate: '750.00' },
    { id: 12, item: 'Lift Wall and retaining wall', unit: 'Per Sq. Mtr.', rate: '320.00' },
    { id: 13, item: 'Ramp Shuttering', unit: 'Per Sq. Mtr.', rate: '350.00' },
    { id: 14, item: 'Starter fixing lift wall and retaining wall', unit: 'Per Run Mtr.', rate: '320.00' },
    { id: 15, item: 'Shuttering material shifting from storeyard to site', unit: 'Per Sq. Mtr.', rate: '150.00' },
    { id: 16, item: 'Lifting charges floor to floor from second slab', unit: 'Per Sq. Mtr.', rate: '40.00' },
    { id: 17, item: 'Steel Work 8mm & 32mm', unit: 'Per Ton', rate: '9500.00' },
    { id: 18, item: 'Mivan shuttering & deshuttering', unit: 'Per Sq. Mtr', rate: '195.00' },
    { id: 19, item: 'Lifting charges mivan materials every floor', unit: 'Per Sq. Mtr', rate: '5.00' },
    { id: 20, item: 'Bracket jhali Fixing', unit: 'Per Run Mtr', rate: '175.00' },
];

const terms = [
    'Above rates are labour charges only.',
    'Kindly arrange for labour sheds, water, electricity and other basic facility.',
    'Kindly pay advance for mobilization per labour Rs. 5000/- only.',
    'On every additional Floors to be add 10% on the above rates and lifting charges separate.',
    'Payment : weekly on every Friday.',
    'Please hold 10% for deshuttering of slab & beam, release 90% for shuttering.',
    'Transportations charges of labour shall be borne by company.',
    'If any rectification charge will be paid by company.',
];

// PDF Document Component
const QuotationPDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.title}>QUOTATION</Text>
            </View>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Sl. No.</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Particulars</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Unit</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Rate</Text>
                </View>

                {quotationData.map((item) => (
                    <View key={item.id} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{item.id}</Text>
                        <Text style={styles.tableCell}>{item.item}</Text>
                        <Text style={styles.tableCell}>{item.unit}</Text>
                        <Text style={styles.tableCell}>{item.rate}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Terms & Conditions:</Text>
                {terms.map((term, idx) => (
                    <Text key={idx} style={styles.term}>• {term}</Text>
                ))}
            </View>

            <View style={styles.footer}>
                <View style={styles.footerColumn}>
                    <Text style={styles.footerText}>GSTIN: 29BVKPS7648A1ZL</Text>
                    <Text style={styles.footerText}>PAN No: BVKPS7648A</Text>
                </View>
                <View style={styles.footerColumn}>
                    <Text style={styles.footerText}>Signature of Engineer/Owner</Text>
                    <Text style={styles.footerText}>Contractor Sign. Agreed to Execute</Text>
                </View>
            </View>
        </Page>
    </Document>
);

// PDF Styles
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    table: {
        display: 'flex',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        marginBottom: 20,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#bfbfbf',
    },
    tableHeader: {
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
    },
    tableCell: {
        padding: 5,
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: '#bfbfbf',
    },
    section: {
        marginTop: 20,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    term: {
        marginBottom: 5,
    },
    footer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerColumn: {
        flex: 1,
    },
    footerText: {
        marginBottom: 5,
    },
});

export function QuotationCard() {
    const [showPDF, setShowPDF] = useState(false);

    return (
        <div className="max-w-6xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg mt-24 dark:shadow-gray-700">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">QUOTATION</h1>
                <button
                    onClick={() => setShowPDF(!showPDF)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                    {showPDF ? 'Hide PDF' : 'Show PDF'}
                </button>
            </div>

            {showPDF && (
                <div className="h-[800px] w-full mb-4">
                    <PDFViewer width="100%" height="100%">
                        <QuotationPDF />
                    </PDFViewer>
                </div>
            )}

            <div>
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-left text-gray-900 dark:text-white">Sl. No.</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-left text-gray-900 dark:text-white">Particulars</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-left text-gray-900 dark:text-white">Unit</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-left text-gray-900 dark:text-white">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quotationData.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-gray-900 dark:text-gray-200">{item.id}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-gray-900 dark:text-gray-200">{item.item}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-gray-900 dark:text-gray-200">{item.unit}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-gray-900 dark:text-gray-200">{item.rate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Terms & Conditions:</h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-900 dark:text-gray-200">
                    {terms.map((term, idx) => (
                        <li key={idx}>{term}</li>
                    ))}
                </ul>

                <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-900 dark:text-gray-200">
                    <div>
                        <strong>GSTIN:</strong> 29BVKPS7648A1ZL<br />
                        <strong>PAN No:</strong> BVKPS7648A
                    </div>
                    <div className="text-right">
                        <p><strong>Signature of Engineer/Owner</strong></p>
                        <p>Contractor Sign. Agreed to Execute</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function QuotationPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <QuotationCard />
        </div>
    );
}
