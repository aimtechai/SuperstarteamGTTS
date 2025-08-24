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
          <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
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
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border bg-[#B4D5F1] text-md">1</span>
          Personal Details
        </div>
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border bg-[#B4D5F1] text-md">2</span>
          Court Information
        </div>
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border bg-[#B4D5F1] text-md">3</span>
          Complete
        </div>
      </div>

      {/* Main Card */}
      <Card className="border bg-card p-5 shadow-sm">
        {/* Personal Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Personal Details</h3>
          <Alert className="text-primary">
          {/* <Alert className="border-warning/40 bg-warning/10 text-foreground"> */}
            <AlertTriangle className="h-5 w-5" style={{ marginTop: "10px" }} />
            <AlertDescription style={{ color: "#154393", fontWeight: "bold", fontSize: "12px"}}>
              Warning: Providing false or fraudulent information is a serious offense and may result in legal consequences under applicable laws.
            </AlertDescription>
          </Alert>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {/* <Input placeholder="Full Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Address 1" />
            <Input placeholder="Day Phone" />
            <Input placeholder="Apt / Suite" />
            <Input placeholder="Night Phone" />
            <Input placeholder="City" />
            <Input placeholder="State" />
            <Input placeholder="Zip Code" /> */}

            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" className="mt-1" />
              {/* <p className="mt-1 text-xs text-muted-foreground">Note: This input is locked by administrator. To avoid misuse of someone’s identity.</p> */}
            </div>

            <div>
              <Label htmlFor="name">Email Address</Label>
              <Input id="name" name="name" placeholder="John Doe" className="mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 md:w-[520px]">
            <Select>
              <SelectTrigger><SelectValue placeholder="Month" /></SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }).map((_, i) => (
                  <SelectItem key={i} value={`m-${i+1}`}>{i + 1}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger><SelectValue placeholder="Day" /></SelectTrigger>
              <SelectContent>
                {Array.from({ length: 31 }).map((_, i) => (
                  <SelectItem key={i} value={`d-${i+1}`}>{i + 1}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger><SelectValue placeholder="Year" /></SelectTrigger>
              <SelectContent>
                {Array.from({ length: 60 }).map((_, i) => (
                  <SelectItem key={i} value={`y-${1980 + i}`}>{1980 + i}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="md:w-[420px]">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="How I heard about GoToTrafficSchool.com" />
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
            <Input placeholder="Court docket / Ticket / Case / Citation Number" />
          </div>
          <div className="grid grid-cols-3 gap-3 md:w-[520px]">
            <Select>
              <SelectTrigger><SelectValue placeholder="Month" /></SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }).map((_, i) => (
                  <SelectItem key={i} value={`m-${i+1}`}>{i + 1}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger><SelectValue placeholder="Day" /></SelectTrigger>
              <SelectContent>
                {Array.from({ length: 31 }).map((_, i) => (
                  <SelectItem key={i} value={`d-${i+1}`}>{i + 1}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger><SelectValue placeholder="Year" /></SelectTrigger>
              <SelectContent>
                {Array.from({ length: 6 }).map((_, i) => (
                  <SelectItem key={i} value={`y-${2025 + i}`}>{2025 + i}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground">
            {/* <label className="flex items-start gap-2">
              {upgrades.map((u) => (
                <div key={u.id}>
                  <div className="flex items-start gap-4">
                    <Checkbox
                      checked={u.checked}
                      onCheckedChange={() => toggle(u.id)}
                      aria-label={`Toggle ${u.title}`}
                      className={`h-[30px] w-[30px] transition-all
                        ${u.checked ? 'border-0' : 'bg-white border-3 border-[#2764E7]'}`}
                      style={
                        u.checked
                          ? { background: 'linear-gradient(90deg, #36DFF1 0%, #2764E7 100%)' }
                          : undefined
                      }
                    />
                  </div>
                </div>
              ))}
              <span>I read and agree that all information is correct before clicking the SAVE UPDATE button.</span>
            </label>
            <label className="flex items-start gap-2">
              <span>I affirm that all information provided is true and accurate. I understand that providing false or fraudulent information may violate laws.</span>
            </label> */}

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
                          ? {
                              background: "linear-gradient(90deg, #36DFF1 0%, #2764E7 100%)",
                            }
                          : undefined
                      }
                    />
                    <span className="text-sm font-medium">{u.title}</span>
                  </label>
                ))}
              </div>
          </div>
          <div className="flex items-center gap-3 md:justify-end">
            {/* <Button variant="pillPrimary">Save Update</Button> */}
            <Button variant="pill" size="lg" className="ml-auto bg-primary text-white">Save Update</Button>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Course Access */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Course Access</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <Input placeholder="Email Address" />
            <Input placeholder="Old Password" type="password" />
            <Input placeholder="New Password" type="password" />
            <Input placeholder="Re-Enter New Password" type="password" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Authorization Code" />
          </div>
          <div className="flex items-center gap-3 md:justify-end">
            {/* <Button variant="pillPrimary">Reset Password</Button> */}
            <Button variant="pill" size="lg" className="ml-auto bg-primary text-white">Reset Password</Button>
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
