import { Metadata } from 'next';
import { QuotationCard } from "@/components/QuotationCard";
export default function QuotationPage() {
    return (
        <div >
            <QuotationCard />
        </div>
    );
}

 
export const metadata: Metadata = {
  title: 'Get Quote ',
  description: 'Get Quote from Surendra Vishwakarma for your construction needs',

};