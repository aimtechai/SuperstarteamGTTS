import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";


import "./ProfileLayout.css";
import React, { useState } from "react";




export const EditProfile = () => {

  const [upgrades, setUpgrades] = useState([
    {
      id: 1,
      title: "I read and agree that all information is correct before clicking the SAVE UPDATE button.",
      checked: false,
    },
    {
      id: 2,
      title: "I affirm that all information provided is true and accurate. I understand that providing false or fraudulent information may violate laws in the United States and Canada. If a court of law finds me in violation, I agree to accept full legal consequences, including possible criminal charges, fines, or imprisonment.",
      checked: false,
    },
    // {
    //   id: 3,
    //   title: "Custom Branding",
    //   description: "Add your own branding to the platform.",
    //   price: "$9.99",
    //   checked: false,
    // },
  ]);

  // Toggle function to update the checked state
  const toggle = (id) => {
    setUpgrades((prevUpgrades) =>
      prevUpgrades.map((u) =>
        u.id === id ? { ...u, checked: !u.checked } : u
      )
    );
  };
    
  return (
    <section className="space-y-4 mt-6" aria-labelledby="edit-profile-heading">
      {/* Title */}
      {/* <h1 id="edit-profile-heading" className="mb-1 rounded-xl border border-primary/30 px-4 py-2 text-lg text-2xl font-semibold text-foreground">
        Edit Profile
      </h1> */}

      {/* <h1 className="mb-4 rounded-xl border border-primary/30 px-4 py-2 text-3xl font-semibold text-foreground">
        Edit Profile
      </h1>

      <div>
        <div className="relative">
          <Progress value={30} className="h-3" />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-muted-foreground">30%</span>
        </div>
        <div className="mt-2 flex items-center gap-6 text-xs text-muted-foreground">
          <span>Complete</span>
          <span>Incomplete</span>
        </div>
      </div> */}

      <header>
        {/* <h1 className="text-2xl font-semibold text-foreground">Course Syllabus</h1>
         */}
        <h1 className="mb-4 rounded-xl px-4 py-2 text-3xl font-semibold" style={{ borderRadius: "16px", borderWidth: "1px", borderColor: "#154393", color: "#154393" }}>
          Edit Profile
        </h1>
        <div className="mt-4">
          <div className="relative">
            <Progress value={70} className="h-3" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-medium text-white">70%</div>
          </div>
          <div className="mt-2 flex items-center gap-4 text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" aria-hidden style={{ backgroundColor: "#79C3FF" }} />
              Complete
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-muted" aria-hidden />
              Incomplete
            </div>
          </div>
        </div>
      </header>

      {/* Stepper */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-foreground">
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-[#B4D5F1] text-lg">1</span>
          <span style={{ fontSize: "18px" }}>Personal Details</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-[#B4D5F1] text-lg">2</span>
          <span style={{ fontSize: "18px" }}>Court Information</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-[#B4D5F1] text-lg">3</span>
          <span style={{ fontSize: "18px" }}>Complete</span>
        </div>
      </div>

      {/* Main Card */}
      <Card className="border bg-card p-5 shadow-sm">
        {/* Personal Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Personal Details</h3>
          <Alert className="text-primary">
            <AlertTriangle className="h-5 w-5" style={{ marginTop: "10px" }} />
            <AlertDescription
              style={{ color: "#154393", fontWeight: "bold", fontSize: "18px" }}
            >
              Warning: Providing false or fraudulent information is a serious offense
              and may result in legal consequences under applicable laws.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <Label htmlFor="fullname">Full Name</Label>
              <Input id="fullname" name="fullname" placeholder="John Doe" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" placeholder="johndoe@email.com" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="address1">Address 1</Label>
              <Input id="address1" name="address1" placeholder="123 Main St" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="dayphone">Day Phone</Label>
              <Input id="dayphone" name="dayphone" placeholder="(123) 456-7890" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="aptsuite">Apt / Suite</Label>
              <Input id="aptsuite" name="aptsuite" placeholder="Apt 101" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="nightphone">Night Phone</Label>
              <Input id="nightphone" name="nightphone" placeholder="(123) 456-7890" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" placeholder="Los Angeles" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" name="state" placeholder="California" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="zipcode">Zip Code</Label>
              <Input id="zipcode" name="zipcode" placeholder="90001" className="mt-1" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 md:w-[520px]">
            <div>
              <Label>Date of Birth - Month</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <SelectItem key={i} value={`m-${i + 1}`}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Date of Birth - Day</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 31 }).map((_, i) => (
                    <SelectItem key={i} value={`d-${i + 1}`}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Date of Birth - Year</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 60 }).map((_, i) => (
                    <SelectItem key={i} value={`y-${1980 + i}`}>
                      {1980 + i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="md:w-[420px]">
            <Label htmlFor="referral">How I heard about GoToTrafficSchool.com</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="search">Search</SelectItem>
                <SelectItem value="friend">Friend</SelectItem>
                <SelectItem value="ad">Ad</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Court Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Court Information</h3>
          <div className="grid grid-cols-1 gap-3 md:w-[520px]">
            <div>
              <Label htmlFor="courtcase">Court docket / Ticket / Case / Citation Number</Label>
              <Input id="courtcase" name="courtcase" placeholder="Enter case number" className="mt-1" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 md:w-[520px]">
            <div>
              <Label>Court Date - Month</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <SelectItem key={i} value={`m-${i + 1}`}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Court Date - Day</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 31 }).map((_, i) => (
                    <SelectItem key={i} value={`d-${i + 1}`}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Court Date - Year</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <SelectItem key={i} value={`y-${2025 + i}`}>
                      {2025 + i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {upgrades.map((u) => (
              <label key={u.id} className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  checked={u.checked}
                  onCheckedChange={() => toggle(u.id)}
                  aria-label={`Toggle ${u.title}`}
                  className={`h-[30px] w-[30px] transition-all ${
                    u.checked ? "border-0" : "bg-white border-3 border-[#2764E7]"
                  }`}
                  style={
                    u.checked
                      ? { background: "linear-gradient(90deg, #36DFF1 0%, #2764E7 100%)" }
                      : undefined
                  }
                />
                <span className="text-base font-medium">{u.title}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center gap-3 md:justify-end">
            <Button variant="pill" size="lg" className="ml-auto bg-primary text-white">
              Save Update
            </Button>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Course Access */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Course Access</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <Label htmlFor="accessEmail">Email Address</Label>
              <Input id="accessEmail" placeholder="Enter email" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="oldPassword">Old Password</Label>
              <Input id="oldPassword" type="password" placeholder="Enter old password" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" placeholder="Enter new password" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="reNewPassword">Re-Enter New Password</Label>
              <Input id="reNewPassword" type="password" placeholder="Re-enter new password" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter phone number" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="authCode">Authorization Code</Label>
              <Input id="authCode" placeholder="Enter code" className="mt-1" />
            </div>
          </div>

          <div className="flex items-center gap-3 md:justify-end">
            <Button variant="pill" size="lg" className="ml-auto bg-primary text-white">
              Reset Password
            </Button>
          </div>
        </div>
      </Card>


      <div className="flex justify-center">
        {/* <Button variant="pillPrimary" className="px-8">Send Code</Button> */}
        <Button variant="pill" size="lg" className="bg-primary text-white px-8">Send Code</Button>
      </div>
    </section>
  );
};




// export const EditProfile = () => {
//   return (
//     <section className="space-y-4 mt-6" aria-labelledby="edit-profile-heading">
//       <h1 className="mb-4 rounded-xl border border-primary/30 px-4 py-2 text-3xl font-semibold text-foreground">
//         Edit Profile
//       </h1>

//       {/* Progress */}
//       <div>
//         <div className="relative">
//           <Progress value={30} className="h-3" />
//           <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-muted-foreground">30%</span>
//         </div>
//         <div className="mt-2 flex items-center gap-6 text-xs text-muted-foreground">
//           <span>Complete</span>
//           <span>Incomplete</span>
//         </div>
//       </div>

//       {/* Stepper */}
//       <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-foreground">
//         <div className="inline-flex items-center gap-2">
//           <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border bg-secondary text-xs">1</span>
//           Personal Details
//         </div>
//         <div className="inline-flex items-center gap-2">
//           <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border bg-secondary text-xs">2</span>
//           Court Information
//         </div>
//         <div className="inline-flex items-center gap-2">
//           <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border bg-secondary text-xs">3</span>
//           Complete
//         </div>
//       </div>

//       {/* Main Card */}
//       <Card className="border bg-card p-5 shadow-sm">
//         {/* Personal Details */}
//         <div className="space-y-4">
//           <h3 className="text-lg font-semibold">Personal Details</h3>
//           <Alert className="border-warning/40 bg-warning/10 text-foreground">
//             <AlertTriangle className="h-4 w-4" />
//             <AlertDescription className="text-xs">
//               Warning: Providing false or fraudulent information is a serious offense and may result in legal consequences under applicable laws.
//             </AlertDescription>
//           </Alert>

//           {/* Inputs */}
//           <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="Full Name" />
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="Email Address" />
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="Address 1" />
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="Day Phone" />
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="Apt / Suite" />
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="Night Phone" />
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="City" />
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="State" />
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="Zip Code" />
//           </div>

//           {/* Date of Birth */}
//           <div className="grid grid-cols-3 gap-3 md:w-[520px]">
//             <Select>
//               <SelectTrigger className="border border-[rgb(11_60_116/1)]">
//                 <SelectValue placeholder="Month" />
//               </SelectTrigger>
//               <SelectContent>
//                 {Array.from({ length: 12 }).map((_, i) => (
//                   <SelectItem key={i} value={`m-${i+1}`}>{i + 1}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             <Select>
//               <SelectTrigger className="border border-[rgb(11_60_116/1)]">
//                 <SelectValue placeholder="Day" />
//               </SelectTrigger>
//               <SelectContent>
//                 {Array.from({ length: 31 }).map((_, i) => (
//                   <SelectItem key={i} value={`d-${i+1}`}>{i + 1}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             <Select>
//               <SelectTrigger className="border border-[rgb(11_60_116/1)]">
//                 <SelectValue placeholder="Year" />
//               </SelectTrigger>
//               <SelectContent>
//                 {Array.from({ length: 60 }).map((_, i) => (
//                   <SelectItem key={i} value={`y-${1980 + i}`}>{1980 + i}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Referral Source */}
//           <div className="md:w-[420px]">
//             <Select>
//               <SelectTrigger className="border border-[rgb(11_60_116/1)]">
//                 <SelectValue placeholder="How I heard about GoToTrafficSchool.com" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="search">Search</SelectItem>
//                 <SelectItem value="friend">Friend</SelectItem>
//                 <SelectItem value="ad">Ad</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         <Separator className="my-6" />

//         {/* Court Information */}
//         <div className="space-y-4">
//           <h3 className="text-lg font-semibold">Court Information</h3>
//           <div className="grid grid-cols-1 gap-3 md:w-[520px]">
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="Court docket / Ticket / Case / Citation Number" />
//           </div>
//           <div className="grid grid-cols-3 gap-3 md:w-[520px]">
//             <Select>
//               <SelectTrigger className="border border-[rgb(11_60_116/1)]">
//                 <SelectValue placeholder="Month" />
//               </SelectTrigger>
//               <SelectContent>
//                 {Array.from({ length: 12 }).map((_, i) => (
//                   <SelectItem key={i} value={`m-${i+1}`}>{i + 1}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             <Select>
//               <SelectTrigger className="border border-[rgb(11_60_116/1)]">
//                 <SelectValue placeholder="Day" />
//               </SelectTrigger>
//               <SelectContent>
//                 {Array.from({ length: 31 }).map((_, i) => (
//                   <SelectItem key={i} value={`d-${i+1}`}>{i + 1}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             <Select>
//               <SelectTrigger className="border border-[rgb(11_60_116/1)]">
//                 <SelectValue placeholder="Year" />
//               </SelectTrigger>
//               <SelectContent>
//                 {Array.from({ length: 6 }).map((_, i) => (
//                   <SelectItem key={i} value={`y-${2025 + i}`}>{2025 + i}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         <Separator className="my-6" />

//         {/* Course Access */}
//         <div className="space-y-4">
//           <h3 className="text-lg font-semibold">Course Access</h3>
//           <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="Email Address" />
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="Old Password" type="password" />
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="New Password" type="password" />
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="Re-Enter New Password" type="password" />
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="Phone Number" />
//             <Input className="border border-[rgb(11_60_116/1)]" placeholder="Authorization Code" />
//           </div>
//         </div>
//       </Card>
//     </section>
//   );
// };
