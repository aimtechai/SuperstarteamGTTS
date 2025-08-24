import { useNavigate } from "react-router-dom";
import TrafficSchoolLogin from "../components/TrafficSchoolLogin/TrafficSchoolLogin";
import logo from "../assets/logo.png";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <TrafficSchoolLogin
      logoSrc={logo}
      onSubmit={(creds) => console.log("login", creds)}
      onSSO={{
        biometrics: () => console.log("biometrics"),
        apple: () => navigate("/course-enrollment/select-state"),
        google: () => navigate("/course-enrollment/select-state"),
        facebook: () => navigate("/course-enrollment/select-state"),
        linkedin: () => navigate("/course-enrollment/select-state"),
        microsoft: () => navigate("/student-enrollment"),
      }}
    />
  );
}