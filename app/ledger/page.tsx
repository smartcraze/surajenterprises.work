import AddLedgerModal from '@/components/Ledger/EntryForm';
import React from 'react';

function Page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Ledger</h1>
      <div className="flex gap-4">
        <AddLedgerModal />
      </div>
    </div>
  );
}

export default Page;
