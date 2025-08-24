import { SEO } from "@/components/SEO";
import { Welcome } from "@/components/dashboard/Header";
import { ProgressSection } from "@/components/dashboard/ProgressSection";
import { Syllabus } from "@/components/dashboard/Syllabus";
import { OptionalUpgrades } from "@/components/dashboard/OptionalUpgrades";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Styles.css";

const Index = () => {
  console.log("[Index] rendering");
  return (
    <>
      <SEO title="Student Dashboard" description="Course progress dashboard" />
      <Welcome />
      <ProgressSection />
      <Syllabus />
      <OptionalUpgrades />
    </>
  );
};

export default Index;

