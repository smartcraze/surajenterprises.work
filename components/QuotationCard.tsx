'use client';

import React from 'react';



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

export function QuotationCard() {
  const generatePDF = async () => {
    const { jsPDF } = await import('jspdf');
    const autoTable = (await import('jspdf-autotable')).default;
    const doc = new jsPDF();

    // Header - GSTIN, PAN, Mobile
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('GSTIN : 29CLZPV4129D1ZC', 14, 12);
    doc.text('PAN No : CLZPV4129D', 14, 16);
    doc.text('Mob : 9880494435', 200, 12, { align: 'right' });
    doc.text('     9880826136', 200, 16, { align: 'right' });

    // Company Name
    doc.setFontSize(25);
    doc.setTextColor(220, 20, 60); // Crimson red
    doc.setFont('helvetica', 'bold');
    doc.text('SURAJ ENTERPRISES', 105, 24, { align: 'center' });

    // Sub-Contractor text
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Sub-Contractor', 105, 32, { align: 'center' });

    // Address & Email
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    doc.text('Address : #9 , kuvempunagar ,singapura Road , Vidyaranyapura, Bangalore – 560097.', 105, 38, { align: 'center' });
    doc.text('Email : work.surajenterprises@gmail.com | www.surajenterprises.work', 105, 43, { align: 'center' });
    // Horizontal line
    doc.setDrawColor(41, 128, 185);
    doc.setLineWidth(0.7);
    doc.line(10, 52, 200, 52);

    // Date (right aligned)
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`Date : ${formattedDate}`, 200, 58, { align: 'right' });

    // Quotation title
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('QUOTATION', 105, 65, { align: 'center' });

    // Table with quotation data
    autoTable(doc, {
      startY: 70,
      head: [['Sl. No.', 'Particulars', 'Unit', 'Rate']],
      body: quotationData.map(({ id, item, unit, rate }) => [id, item, unit, rate]),
      theme: 'grid',
      headStyles: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' },
      styles: { fontSize: 9 },
      columnStyles: {
        0: { cellWidth: 20 },
        1: { cellWidth: 100 },
        2: { cellWidth: 40 },
        3: { cellWidth: 30 },
      },
    });

    // Terms & Conditions below table
    const finalY = (doc as any).lastAutoTable.finalY + 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Terms & Conditions:', 14, finalY);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    terms.forEach((term, idx) => {
      doc.text(`• ${term}`, 14, finalY + 6 + idx * 4);
    });

    // Footer with GSTIN, PAN and signature placeholders
    const pageHeight = doc.internal.pageSize.height;
    const footerY = pageHeight - 25;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('Signature of Engineer/Owner', 14, footerY);
    doc.text('By accepting the above hereby', 14, footerY + 5);
    doc.text('Place order to executive', 14, footerY + 10);

    doc.text('Contractor Sign. Agreed to Execute', 120, footerY + 5);

    // Save PDF file
    doc.save('quotation.pdf');
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg m-24 dark:shadow-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">QUOTATION</h1>
        <button
          onClick={generatePDF}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Download PDF
        </button>
      </div>

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
          {quotationData.map(({ id, item, unit, rate }) => (
            <tr key={id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-gray-900 dark:text-gray-200">{id}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-gray-900 dark:text-gray-200">{item}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-gray-900 dark:text-gray-200">{unit}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-gray-900 dark:text-gray-200">{rate}</td>
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

      <div className="mt-12 flex justify-between text-gray-900 dark:text-gray-200">
        <div>
          <p><strong>GSTIN:</strong> 29BVKPS7648A1ZL</p>
          <p><strong>PAN No:</strong> BVKPS7648A</p>
        </div>
        <div>
          <p>Signature of Engineer/Owner</p>
          <p className="mt-8">Contractor Sign. Agreed to Execute</p>
        </div>
      </div>
    </div>
  );
}

export default QuotationCard;
