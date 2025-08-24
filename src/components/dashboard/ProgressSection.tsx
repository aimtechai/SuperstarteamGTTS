// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { Badge } from "@/components/ui/badge";
// import { CalendarDays, Clock, PlayCircle, Home } from "lucide-react";

// export const ProgressSection = () => {
//   return (
//     <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
//       <Card className="xl:col-span-2 border shadow-sm">
//         <CardHeader className="pb-3">
//           <CardTitle className="flex items-center gap-3 text-xl">
//             <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-secondary">
//               <PlayCircle className="h-5 w-5 text-primary" />
//             </span>
//             Chapter 1 Page 2
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
//           <div className="flex items-center gap-3">
//             <Button variant="pillPrimary">Continue</Button>
//             <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">Lesson in progress</Badge>
//           </div>
//           <div className="grid grid-cols-2 gap-3 md:justify-end">
//             <div className="rounded-xl border bg-background p-3 text-sm">
//               <div className="flex items-center gap-2 text-muted-foreground">
//                 <CalendarDays className="h-4 w-4" /> Court Due Date
//               </div>
//               <div className="mt-1 font-semibold">9/11/2025</div>
//             </div>
//             <div className="rounded-xl border bg-background p-3 text-sm">
//               <div className="flex items-center gap-2 text-muted-foreground">
//                 <Clock className="h-4 w-4" /> Days Left
//               </div>
//               <div className="mt-1 text-2xl font-bold text-foreground">62</div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="border shadow-sm">
//         <CardHeader className="pb-3">
//           <CardTitle className="flex items-center gap-2 text-xl">
//             <Home className="h-5 w-5 text-primary" />
//             Make Money
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4 text-sm">
//           <ul className="list-disc pl-6 text-muted-foreground">
//             <li>
//               Refer friends and earn <span className="font-semibold text-foreground">$2.00</span> per referral. Your friend gets a <span className="font-semibold text-foreground">$1.00</span> discount.
//             </li>
//           </ul>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <div className="flex items-center justify-between text-xs text-muted-foreground">
//                 <span>Total Referrals</span>
//                 <span>0</span>
//               </div>
//               <Progress value={12} className="mt-1 h-2" />
//             </div>
//             <div>
//               <div className="flex items-center justify-between text-xs text-muted-foreground">
//                 <span>Total Paid</span>
//                 <span>$0.00</span>
//               </div>
//               <Progress value={5} className="mt-1 h-2" />
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };



import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, Target, ArrowRight, Wallet } from "lucide-react";
import { Phone, LogOut } from "lucide-react";

/** Exact gradient bars (blue + orange) */
const GradientBar = ({
  value,
  variant = "blue",
}: {
  value: number;
  variant?: "blue" | "orange";
}) => {
  const grad =
    variant === "blue"
      ? "bg-[linear-gradient(90deg,#2C66BF_0%,#61A3FF_70%,#EAF2FF_100%)]"
      : "bg-[linear-gradient(90deg,#F59E0B_0%,#FBBF24_70%,#FFEFD2_100%)]";

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-[#E9EEF7]">
      <div
        className={`h-2 rounded-full ${grad}`}
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
};

export default function WelcomeDashboardExact() {
  return (
    // px-4 
    <div>
      <header className="mb-6 flex items-center justify-between">
        <Button variant="pill" size="lg" className="ml-auto bg-primary text-white">
          <LogOut className="h-4 w-4" /> Logout
        </Button>
      </header>

      <div className="mx-auto max-w-[875px] sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* LEFT */}
          <div className="flex-1 lg:max-w-[540px]">
            {/* Heading */}
            <h1 className="text-[#0B3C74] text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[52px] font-bold">
              Welcome,
              <br />
              Yasmine Kavandi
            </h1>

            {/* Chapter and Continue */}
            {/* rounded-2xl sm:rounded-full  */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 p-3" style={{ borderRadius: "16px", borderWidth: "1px", borderColor: "#154393" }}>
              {/* Chapter Box */}
              <div className="flex items-center gap-3 px-2 sm:px-4 py-2 sm:py-3 flex-1">
                <div className="grid size-8 sm:size-10 place-items-center border-[#C7DBFF]">
                  <Target className="h-6 w-6 sm:h-10 sm:w-10 text-[#0B3C74]" />
                </div>
                <div className="text-[#0B3C74] font-semibold text-sm sm:text-base">
                  Chapter 1 Page 2
                </div>
              </div>

              {/* Continue Box */}
              <div className="flex justify-center sm:justify-end">
                <button className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 text-[#0B3C74] text-xs sm:text-[14px] font-bold uppercase hover:bg-[#F5FAFF] transition-colors" style={{ borderRadius: "16px", borderWidth: "1px", borderColor: "#154393" }}>
                  Continue
                  <span className="grid size-6 sm:size-7 place-items-center ">
                    {/* rounded-full border border-[#C8D6E8] */}
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </span>
                </button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Court Due Date */}
              <div className="flex flex-1 flex-col items-center justify-center rounded-[12px] bg-[#E7F4FF] px-4 py-3 min-h-[80px]">
                <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#5B6B7F] font-medium">
                  <CalendarDays className="h-3 w-3 sm:h-4 sm:w-4" />
                  Court Due Date:
                </div>
                <div className="mt-1 text-base sm:text-[18px] font-bold text-[#0B3C74]">
                  9/11/2025
                </div>
              </div>

              {/* Days Left */}
              <div className="flex flex-1 flex-col items-center justify-center rounded-[12px] bg-[#E7F4FF] px-4 py-3 text-center min-h-[80px]">
                <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#5B6B7F] font-medium">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  Days Left:
                </div>
                <div className="mt-1 text-2xl sm:text-3xl lg:text-[36px] leading-none font-bold text-[#0B3C74]">
                  62
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[325px] lg:flex-shrink-0 rounded-[12px] p-4 sm:p-5 mt-6 lg:mt-0" style={{ borderRadius: "16px", borderWidth: "1px", borderColor: "#154393" }}>
            {/* Header */}
            <div className="flex items-center gap-3 text-xl sm:text-2xl lg:text-[30px] font-bold text-[#0B3C74] mb-3">
              <Wallet className="h-5 w-5 sm:h-6 sm:w-6" />
              Make Money
            </div>

            {/* Description */}
            <ul className="list-disc pl-4 sm:pl-5 text-sm sm:text-[14px] text-[#42546A] leading-tight">
              <li>
                Refer friends to our website and make{" "}
                <span className="font-bold text-[#0B3C74]">$2.00</span> per referral!
                Not only that, but your friend will get a{" "}
                <span className="font-bold text-[#0B3C74]">$1.00</span> discount on
                the course!
              </li>
            </ul>

            {/* Centered Text */}
            <div className="mt-3 text-center text-xs sm:text-[13px] font-bold uppercase text-[#0B3C74] tracking-wide">
              IT'S SIMPLE!
            </div>

            {/* Referral Stats */}
            <div className="mt-3 grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <div className="text-xs sm:text-[12px] text-[#5B6B7F]">Total Referrals</div>
                <div className="text-base sm:text-[18px] font-bold text-[#0B3C74] mt-1">0</div>
                <div className="mt-2 h-2 w-full rounded-full bg-[#E9EEF7] overflow-hidden">
                  <div className="h-full w-[18%] rounded-full bg-gradient-to-r from-[#2C66BF] via-[#61A3FF] to-[#EAF2FF]" />
                </div>
              </div>
              <div>
                <div className="text-xs sm:text-[12px] text-[#5B6B7F]">Total Paid</div>
                <div className="text-base sm:text-[18px] font-bold text-[#0B3C74] mt-1">$0.00</div>
                <div className="mt-2 h-2 w-full rounded-full bg-[#E9EEF7] overflow-hidden">
                  <div className="h-full w-[18%] rounded-full bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#FFEFD2]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export const ProgressSection = WelcomeDashboardExact;
