// import { JobFilters } from "@/components/general/JobFilters";
// import JobListings from "@/components/general/JobListings";
// import JobListingsLoading from "@/components/general/JobListingsLoading";
// import { Suspense } from "react";

// type SearchParamsProps = {
//   searchParams: Promise<{
//     page?: string;
//     jobTypes?: string;
//     location?: string;
//   }>;
// };

// export default async function Home({ searchParams }: SearchParamsProps) {
//   const params = await searchParams;
//   const currentPage = Number(params.page) || 1;
//   const jobTypes = params.jobTypes?.split(",") || [];
//   const location = params.location || "";

//   // Create a composite key from all filter parameters
//   const filterKey = `page=${currentPage};types=${jobTypes.join(
//     ","
//   )};location=${location}`;

//   return (
    
//     <div className="grid grid-cols-3 gap-8">
      
//       <JobFilters />
//       <div className="col-span-2 flex flex-col gap-6">
//         <Suspense key={filterKey} fallback={<JobListingsLoading />}>
//           <JobListings
//             currentPage={currentPage}
//             jobTypes={jobTypes}
//             location={location}
//           />
//         </Suspense>
//       </div>
//     </div>
//   );
// }



'use client'

import Hero from '@/components/LandingPage/Hero'
import CompanyLogo from '@/components/LandingPage/CompanyLogo'
import PurposeSection from '@/components/LandingPage/PurposeSection'
import FeaturesSection from '@/components/LandingPage/FeaturesSection'
import ScheduleSection from '@/components/LandingPage/ScheduleSection'
import MonitorSection from '@/components/LandingPage/MonitorSection'
import ServicesSection from '@/components/LandingPage/ServicesSection'
import TestimonialSection from '@/components/LandingPage/TestimonialSection'
import NewsLetterSection from '@/components/LandingPage/NewsLetterSection'
import Footer from '@/components/LandingPage/Footer'

export default function Page() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      
      <div className='overflow-hidden'>
        <Hero />
        <CompanyLogo />
        <ScheduleSection />
        <PurposeSection />
        <FeaturesSection />
        <MonitorSection />
        <ServicesSection />
        <TestimonialSection />
        <NewsLetterSection />
        <Footer />
      </div>
    </main>
  )
}