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
    return (
        <div className="max-w-6xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg mt-24 dark:shadow-gray-700">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">QUOTATION</h1>
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
    );
}

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <QuotationCard />
        </div>
    );
}
