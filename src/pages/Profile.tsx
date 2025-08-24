import { SEO } from "@/components/SEO";
import { Welcome } from "@/components/dashboard/Header";
import { ProgressSection } from "@/components/dashboard/ProgressSection";
import { EditProfile } from "@/components/profile/EditProfile";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Styles.css";

const Profile = () => {
  return (
    <>
      <SEO title="Edit Profile" description="Update your personal and court information" />
      <Welcome />
      <ProgressSection />
      <EditProfile />
    </>
  );
};

export default Profile;

