import AddLedgerModal from '@/components/Ledger/EntryForm';
import ListLedgerEntries from '@/components/Ledger/ListLedgerEntries';
import PaymentsFilter from '@/components/Ledger/PaymentsFilter';
import React from 'react';

function Page() {
  return (
    <div className="flex flex-col gap-4 p-4 mt-10">
      <h1 className="text-2xl font-bold">Ledger Book</h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center md:justify-between border-amber-200 border-2 p-4 rounded-lg">
        <div className="w-full md:w-auto">
          <AddLedgerModal />
        </div>

        <div className="w-full md:w-auto">
          <PaymentsFilter />
        </div>
      </div>

      <div>
        <ListLedgerEntries />
      </div>
    </div>
  );
}

export default Page;
