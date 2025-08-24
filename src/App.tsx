import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import LandingLayout from "./layouts/LandingLayout";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Referral from "./pages/Referral";
import Upgrades from "./pages/Upgrades";
import Upload from "./pages/Upload";
import Lesson from "./pages/Lesson";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
// New pages from gototrafficschoolonline-react
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import PreLoginPage from "./pages/PreLoginPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import CoursePage from "./pages/CoursePage";
// New components from gototrafficschoolonline-react
import OnboardingSelectState from "./components/OnboardingSelectState/OnboardingSelectState";
import OnboardingUpgradeSelection from "./components/OnboardingUpgradeSelection/OnboardingUpgradeSelection";
import StudentEnrollment from "./components/StudentEnrollment/StudentEnrollment";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import Payment from "./components/Payment/Payment";

import A0001 from "./pages/A0001";
import A0002 from "./pages/A0002";
import A0003 from "./pages/A0003";
import A0004 from "./pages/A0004";
import A0005 from "./pages/A0005";

const queryClient = new QueryClient();

const App = () => {
  console.log("[App] rendering");
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Landing page and auth routes without layout */}
            <Route element={<LandingLayout />}>
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/A0001" element={<A0001 />} />
              <Route path="/A0002" element={<A0002 />} />
              <Route path="/A0003" element={<A0003 />} />
              <Route path="/A0004" element={<A0004 />} />
              <Route path="/A0005" element={<A0005 />} />
            </Route>
            
            {/* Auth routes with AuthLayout */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/pre-login" element={<PreLoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route
                path="/course-enrollment/select-state"
                element={
                  <OnboardingSelectState
                    logoSrc="/src/assets/logo.png"
                    onNext={() => {}}
                  />
                }
              />
              <Route
                path="/course-enrollment/select-upgrade/:stateName"
                element={
                  <OnboardingUpgradeSelection
                    logoSrc="/src/assets/logo.png"
                    onNext={() => {}}
                  />
                }
              />
              <Route
                path="/student-enrollment"
                element={
                  <StudentEnrollment
                    headerLogoSrc="/src/assets/logo.png"
                    onNext={() => {}}
                  />
                }
              />
              <Route
                path="/student-enrollment/order-summary"
                element={<OrderSummary headerLogoSrc="/src/assets/logo.png" />}
              />
              <Route
                path="/student-enrollment/payment"
                element={<Payment headerLogoSrc="/src/assets/logo.png" />}
              />
              <Route path="/dashboard-v2" element={<DashboardPage />} />
              <Route path="/course-v2" element={<CoursePage />} />
            </Route>
            
            {/* Dashboard routes with DashboardLayout */}
            <Route element={<AuthLayout />}>
              <Route element={<DashboardLayout />}>
                <Route path="/" element={<Index />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/support" element={<Support />} />
                <Route path="/referral" element={<Referral />} />
                <Route path="/upgrades" element={<Upgrades />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/lesson" element={<Lesson />} />
                <Route path="/lesson/:Id" element={<Lesson />} />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
