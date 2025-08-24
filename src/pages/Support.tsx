import { SEO } from "@/components/SEO";
import { Welcome } from "@/components/dashboard/Header";
import { ContactSupport } from "@/components/support/ContactSupport";
import { ProgressSection } from "@/components/dashboard/ProgressSection";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Styles.css";

const Support = () => {
  return (
    <>
      <SEO
        title="Contact Support"
        description="Get help from our team via the contact support form"
      />
      <Welcome />
      <ProgressSection />
      <ContactSupport />
    </>
  );
};

export default Support;

