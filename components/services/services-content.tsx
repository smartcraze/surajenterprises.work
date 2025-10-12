import { ServiceHeader } from "@/components/services/service-header";
import { ConstructionService } from "@/components/services/construction-service";
import { ManpowerService } from "@/components/services/manpower-service";
import { ProjectManagementService } from "@/components/services/project-management-service";
import { ContractBiddingService } from "@/components/services/contract-bidding-service";
import { ServiceCTA } from "@/components/services/service-cta";

export function ServicesContent() {
  return (
    <div className="w-full space-y-12">
      <ServiceHeader />
      <ConstructionService />
      <ManpowerService />
      <ProjectManagementService />
      <ContractBiddingService />
      <ServiceCTA />
    </div>
  );
}