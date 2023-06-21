import Header from "@/Components/Layout/Header";
import Career from "./Components/Career/Career";
import Employer from "./Components/Employer/Employer";
import InternshipSection from "./Components/InternshipSection/InternshipSection";
import LifeFeature from "./Components/LifeFeature/LifeFeature";
import Offer from "./Components/Offer/Offer";
import Opportunities from "./Components/Oppertunities/Opportunities";
import TestSection from "./Components/TestSection/TestSection";
import FirstUniqueFeature from "./Components/UniqueFeature/UniqueFeature";

export default function Home() {
  return (
    <>
      <Header />
      <FirstUniqueFeature />
      <Employer />
      <LifeFeature />
      <Opportunities />
      <Offer />
      <Career />
      <InternshipSection />
      <TestSection />
    </>
  );
}
