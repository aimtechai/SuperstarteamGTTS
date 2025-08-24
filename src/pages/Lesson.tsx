// import { SEO } from "@/components/SEO";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Lesson() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <SEO
//         title="Chapter One - The Common Sense of Driving"
//         description="Learn the foundational principles of safe driving — from responsibility and parking etiquette to obeying traffic laws and showing courtesy on the road."
//       />

//       <div className="space-y-8">
//         {/* Header */}
//         <div className="flex items-center justify-between">
//           <Button
//             variant="ghost"
//             onClick={() => navigate("/")}
//             className="flex items-center gap-2"
//           >
//             <ChevronLeft className="h-4 w-4" />
//             Back to Dashboard
//           </Button>
//           <span className="text-sm text-muted-foreground">
//             Chapter 1 • Lesson 1
//           </span>
//         </div>

//         {/* Progress */}
//         <Card className="p-4">
//           <div className="flex items-center justify-between text-sm mb-2">
//             <span>Course Progress</span>
//             <span>15%</span>
//           </div>
//           <Progress value={15} className="h-2" />
//         </Card>

//         {/* Chapter Title */}
//         <Card className="p-6 text-center">
//           <h2 className="text-sm uppercase tracking-wide text-muted-foreground">
//             Chapter One
//           </h2>
//           <h1 className="text-2xl font-bold text-primary">
//             The Common Sense of Driving
//           </h1>
//           <img
//             src="https://via.placeholder.com/150x50"
//             alt="Course Logo"
//             className="mx-auto mt-2"
//           />
//         </Card>

//         {/* Illustration - Steering Wheel */}
//         <div className="rounded-lg overflow-hidden">
//           <img
//             src="https://via.placeholder.com/800x300"
//             alt="Steering wheel view"
//             className="w-full object-cover"
//           />
//         </div>

//         {/* Hello Section */}
//         <Card className="p-6">
//           <h3 className="text-lg font-bold text-primary">Hello and Welcome!</h3>
//           <p className="mt-2 text-foreground">
//             Over the next several hours, you are going to learn the rules of the road, how to keep yourself safe, and how to protect others. This will require your attention, but we know you’re ready for this challenge and we’re here to help. Let’s get started!
//           </p>
//         </Card>

//         {/* Operating a Motor Vehicle */}
//         <section>
//           <div className="bg-primary text-white px-4 py-2 font-bold uppercase text-sm rounded-t">
//             Operating a Motor Vehicle is a Serious Responsibility
//           </div>
//           <Card className="p-6 rounded-t-none">
//             <div className="flex flex-col md:flex-row items-center gap-6">
//               <img
//                 src="https://via.placeholder.com/300x200"
//                 alt="Driver smiling"
//                 className="rounded-lg"
//               />
//               <div>
//                 <p className="text-foreground">
//                   According to the National Highway Traffic Safety Administration, operating a motor vehicle requires constant attention and adherence to rules and laws. This section covers the core responsibility you accept as a driver.
//                 </p>
//               </div>
//             </div>
//           </Card>
//         </section>

//         {/* Parking Responsibility */}
//         <section>
//           <div className="bg-primary text-white px-4 py-2 font-bold uppercase text-sm rounded-t">
//             Parking Responsibility
//           </div>
//           <Card className="p-6 rounded-t-none space-y-4">
//             <img
//               src="https://via.placeholder.com/800x300"
//               alt="Parking example"
//               className="rounded-lg"
//             />
//             <ul className="list-disc list-inside space-y-1 text-foreground">
//               <li>Park within the designated lines.</li>
//               <li>Avoid blocking other vehicles.</li>
//               <li>Observe signs and markings for special parking rules.</li>
//             </ul>
//             <div className="grid grid-cols-3 gap-4">
//               <img
//                 src="https://via.placeholder.com/200x150"
//                 alt="Parking diagram 1"
//               />
//               <img
//                 src="https://via.placeholder.com/200x150"
//                 alt="Parking diagram 2"
//               />
//               <img
//                 src="https://via.placeholder.com/200x150"
//                 alt="Parking diagram 3"
//               />
//             </div>
//           </Card>
//         </section>

//         {/* Obey Laws */}
//         <section>
//           <div className="bg-primary text-white px-4 py-2 font-bold uppercase text-sm rounded-t">
//             Obey the Literal Interpretation of Everyday Laws
//           </div>
//           <Card className="p-6 rounded-t-none space-y-4">
//             <p className="text-foreground">
//               Laws exist to keep everyone safe. Following them not only prevents accidents but also builds trust among drivers.
//             </p>
//             <img
//               src="https://via.placeholder.com/800x300"
//               alt="Stop sign"
//               className="rounded-lg"
//             />
//             <div>
//               <h4 className="font-semibold">What Does “Yield” Really Mean?</h4>
//               <p className="text-foreground">
//                 Yielding means letting other road users go first when required. Always look both ways and proceed only when safe.
//               </p>
//             </div>
//           </Card>
//         </section>

//         {/* Common Courtesy */}
//         <section>
//           <div className="bg-primary text-white px-4 py-2 font-bold uppercase text-sm rounded-t">
//             Common Courtesy is a Key to Safety
//           </div>
//           <Card className="p-6 rounded-t-none space-y-4">
//             <p>
//               Courteous driving keeps traffic moving smoothly and reduces the risk of conflict and collisions. Always signal your intentions and share the road.
//             </p>
//             <img
//               src="https://via.placeholder.com/400x200"
//               alt="Courteous driving illustration"
//               className="rounded-lg mx-auto"
//             />
//             <p>
//               Courtesy brings order out of chaos — even in heavy traffic or stressful driving situations.
//             </p>
//           </Card>
//         </section>

//         {/* Footer Navigation */}
//         <Card className="p-4 flex items-center justify-between">
//           <Button
//             variant="outline"
//             onClick={() => navigate("/lesson?id=prev")}
//             className="flex items-center gap-2"
//           >
//             <ChevronLeft className="h-4 w-4" />
//             Previous
//           </Button>
//           <div className="flex gap-2">
//             <Button variant="secondary">Take Quiz</Button>
//             <Button variant="default">Mark Complete</Button>
//           </div>
//           <Button
//             onClick={() => navigate("/lesson?id=next")}
//             className="flex items-center gap-2"
//           >
//             Next
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         </Card>
//       </div>
//     </>
//   );
// }












//   LESSON 1 



// import { SEO } from "@/components/SEO";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { ChevronLeft, ChevronRight, CircleCheck } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// /** Small helpers */
// const PillHeader = ({ children }: { children: React.ReactNode }) => (
//   <div className="w-full">
//     <div className="inline-flex rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
//       {children}
//     </div>
//   </div>
// );

// const Section = ({ children }: { children: React.ReactNode }) => (
//   <section className="space-y-4">{children}</section>
// );

// export default function Lesson() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <SEO
//         title="Chapter One – The Common Sense of Driving"
//         description="Foundational principles for safe, courteous, and law-abiding driving."
//       />

//       <div className="mx-auto max-w-3xl space-y-8">
//         {/* Top nav + progress */}
//         <div className="flex items-center justify-between">
//           <Button
//             variant="ghost"
//             className="flex items-center gap-2"
//             onClick={() => navigate("/")}
//           >
//             <ChevronLeft className="h-4 w-4" />
//             Back to Dashboard
//           </Button>
//           <span className="text-sm text-muted-foreground">
//             Chapter 1 • Lesson 1
//           </span>
//         </div>

//         <Card className="p-4">
//           <div className="mb-2 flex items-center justify-between text-sm">
//             <span>Course Progress</span>
//             <span>15%</span>
//           </div>
//           <Progress value={15} className="h-2" />
//         </Card>

//         {/* Chapter header block (title card + sublogo) */}
//         <Card className="p-8 text-center">
//           <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
//             Chapter One
//           </div>
//           <h1 className="mt-2 text-2xl font-extrabold text-primary">
//             THE COMMON SENSE
//             <br />
//             <span className="text-foreground">OF DRIVING</span>
//           </h1>
//           {/* small logo below title */}
//           <img
//             src="https://placehold.co/160x26/png"
//             alt="Sub-brand logo"
//             className="mx-auto mt-3 h-6 w-auto"
//           />
//         </Card>

//         {/* Steering wheel hero illustration */}
//         <div className="overflow-hidden rounded-lg border">
//           <img
//             src="https://placehold.co/980x360/png"
//             alt="Driver view over steering wheel"
//             className="h-[360px] w-full object-cover"
//           />
//         </div>

//         {/* Hello + welcome callout */}
//         <Card className="p-6">
//           <div className="flex items-start gap-4">
//             <img
//               src="https://placehold.co/110x80/svg"
//               alt="Mascot left"
//               className="hidden h-20 w-[110px] md:block"
//             />
//             <div className="w-full">
//               <div className="rounded-md bg-[#0b5aa5] px-4 py-3 text-white">
//                 <div className="text-base font-extrabold tracking-wide">
//                   HELLO AND WELCOME!
//                 </div>
//               </div>
//               <p className="mt-3 text-sm leading-relaxed text-foreground">
//                 {/* TODO: paste exact paragraph from screenshot */}
//                 Over the next several hours, you are going to learn the rules of the road…
//               </p>
//             </div>
//             <img
//               src="https://placehold.co/110x80/svg"
//               alt="Mascot right"
//               className="hidden h-20 w-[110px] md:block"
//             />
//           </div>
//         </Card>

//         {/* Serious responsibility */}
//         <Section>
//           <PillHeader>Operating a Motor Vehicle is a Serious Responsibility</PillHeader>
//           <Card className="rounded-t-none p-6">
//             <div className="grid gap-6 md:grid-cols-[260px,1fr]">
//               <div className="relative">
//                 {/* circular framed portrait effect */}
//                 <div className="aspect-square overflow-hidden rounded-full border bg-muted">
//                   <img
//                     src="https://placehold.co/480x480/jpg"
//                     alt="Smiling driver at window"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-4 text-sm leading-relaxed text-foreground">
//                 <p>
//                   {/* TODO: exact paragraph 1 */}
//                   According to the National Highway Traffic Safety Administration…
//                 </p>
//                 <p>
//                   {/* TODO: exact paragraph 2 */}
//                   Driving requires constant attention and the ability to make good decisions…
//                 </p>

//                 {/* Defensive Driving Course callout */}
//                 <div className="space-y-1">
//                   <div className="text-sm font-bold">
//                     Defensive Driving Course
//                   </div>
//                   <p className="text-sm">
//                     {/* TODO: exact description lines */}
//                     This course will reinforce core defensive driving techniques and habits…
//                   </p>
//                 </div>

//                 {/* little phone/safety tip row */}
//                 <div className="mt-3 flex items-start gap-3 rounded-md bg-muted p-3 text-xs text-muted-foreground">
//                   <img
//                     src="https://placehold.co/28x28/png"
//                     alt="Phone icon"
//                     className="mt-0.5 h-7 w-7"
//                   />
//                   <p>
//                     {/* TODO: exact “read before using the course” tip */}
//                     Read the safety notice before using the course on mobile devices.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* portal screenshot */}
//             <div className="mt-6 overflow-hidden rounded-md border">
//               <img
//                 src="https://placehold.co/980x220/png"
//                 alt="Portal screenshot"
//                 className="h-[220px] w-full object-cover"
//               />
//             </div>
//           </Card>
//         </Section>

//         {/* Parking responsibility */}
//         <Section>
//           <PillHeader>Parking Responsibility</PillHeader>
//           <Card className="rounded-t-none p-6 space-y-5">
//             <div className="overflow-hidden rounded-md border">
//               <img
//                 src="https://placehold.co/980x360/jpg"
//                 alt="Parking lot example"
//                 className="h-[360px] w-full object-cover"
//               />
//             </div>

//             {/* bullet checklist with green checks */}
//             <div className="space-y-2 text-sm leading-relaxed">
//               <div className="flex items-start gap-2">
//                 <CircleCheck className="mt-0.5 h-4 w-4 text-green-600" />
//                 <p>{/* TODO exact item */}Park completely within the lines.</p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <CircleCheck className="mt-0.5 h-4 w-4 text-green-600" />
//                 <p>{/* TODO exact item */}Do not block neighboring vehicles.</p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <CircleCheck className="mt-0.5 h-4 w-4 text-green-600" />
//                 <p>{/* TODO exact item */}Observe posted signs and curb markings.</p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <CircleCheck className="mt-0.5 h-4 w-4 text-green-600" />
//                 <p>{/* TODO exact item */}Leave adequate space for emergency access.</p>
//               </div>
//             </div>

//             {/* three mini diagrams */}
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//               <img
//                 src="https://placehold.co/300x180/png?text=Left+Wheels+to+Curb"
//                 alt="Parking diagram A"
//                 className="h-[180px] w-full rounded-md border object-cover"
//               />
//               <img
//                 src="https://placehold.co/300x180/png?text=Right+Wheels+to+Curb"
//                 alt="Parking diagram B"
//                 className="h-[180px] w-full rounded-md border object-cover"
//               />
//               <img
//                 src="https://placehold.co/300x180/png?text=No+Parking+Along+Edge"
//                 alt="Parking diagram C"
//                 className="h-[180px] w-full rounded-md border object-cover"
//               />
//             </div>
//           </Card>
//         </Section>

//         {/* Obey the literal interpretation of everyday laws */}
//         <Section>
//           <PillHeader>Obey the Literal Interpretation of Everyday Laws</PillHeader>
//           <Card className="rounded-t-none p-6 space-y-5">
//             <p className="text-sm leading-relaxed text-foreground">
//               {/* TODO exact paragraph */}
//               Laws exist to protect everyone on the roadway. Following them precisely prevents collisions and confusion.
//             </p>

//             {/* stop sign photo + boxed stat */}
//             <div className="grid gap-4 md:grid-cols-[1fr,300px]">
//               <img
//                 src="https://placehold.co/980x250/jpg?text=STOP+Sign+Photo"
//                 alt="Stop sign street photo"
//                 className="h-[220px] w-full rounded-md border object-cover"
//               />
//               <div className="rounded-md border bg-muted p-3 text-xs text-muted-foreground">
//                 {/* TODO exact “DOT reports” blurb */}
//                 The Department of Transportation reports that accidents are often caused by failing to yield, running stop signs, and misreading road signage.
//               </div>
//             </div>

//             {/* What does Yield really mean? */}
//             <div className="grid gap-4 md:grid-cols-[300px,1fr]">
//               <img
//                 src="https://placehold.co/300x200/jpg?text=Yield+Sign"
//                 alt="Yield sign photo"
//                 className="h-[200px] w-full rounded-md border object-cover"
//               />
//               <div>
//                 <div className="text-base font-semibold">
//                   What Does “Yield” Really Mean?
//                 </div>
//                 <p className="mt-1 text-sm leading-relaxed text-foreground">
//                   {/* TODO exact paragraph */}
//                   Yield means you must slow and give the right of way to traffic and pedestrians already in or approaching the intersection; proceed only when safe.
//                 </p>
//               </div>
//             </div>
//           </Card>
//         </Section>

//         {/* Common courtesy is a key to safety */}
//         <Section>
//           <PillHeader>Common Courtesy is a Key to Safety</PillHeader>
//           <Card className="rounded-t-none p-6 space-y-5">
//             <div>
//               <div className="text-sm font-semibold">
//                 How to Share the Roadway with All Drivers
//               </div>
//               <p className="mt-1 text-sm leading-relaxed text-foreground">
//                 {/* TODO exact paragraph */}
//                 Signal your intentions, leave space, merge cooperatively, and never assume others see you.
//               </p>
//             </div>

//             {/* little colored rule strip + icon block */}
//             <div className="grid gap-4 md:grid-cols-[1fr,160px]">
//               <div className="rounded-md border p-3">
//                 {/* TODO exact “color tip / note” content */}
//                 <div className="text-xs text-muted-foreground">
//                   Color Tip: {`{Insert the note as shown on the screenshot here}`}.
//                 </div>
//               </div>
//               <img
//                 src="https://placehold.co/160x100/svg?text=Car+&+Ped"
//                 alt="Cars and pedestrians illustration"
//                 className="mx-auto h-[100px] w-[160px] rounded-md"
//               />
//             </div>

//             <div>
//               <div className="text-sm font-semibold">
//                 Courtesy Brings Order Out of Chaos
//               </div>
//               <p className="mt-1 text-sm leading-relaxed text-foreground">
//                 {/* TODO exact paragraph */}
//                 In heavy traffic or stressful situations, courteous behaviors like zipper merges and letting others in reduce conflict and crashes.
//               </p>
//             </div>

//             {/* closing illustration */}
//             <div className="overflow-hidden rounded-lg border">
//               <img
//                 src="https://placehold.co/980x260/svg?text=Two+People+and+Car+Illustration"
//                 alt="People near car illustration"
//                 className="h-[260px] w-full object-cover"
//               />
//             </div>
//           </Card>
//         </Section>

//         {/* Footer controls */}
//         <Card className="flex items-center justify-between p-4">
//           <Button
//             variant="outline"
//             onClick={() => navigate("/lesson?id=prev")}
//             className="flex items-center gap-2"
//           >
//             <ChevronLeft className="h-4 w-4" />
//             Previous
//           </Button>
//           <div className="flex gap-2">
//             <Button variant="secondary">Take Quiz</Button>
//             <Button>Mark Complete</Button>
//           </div>
//           <Button
//             onClick={() => navigate("/lesson?id=next")}
//             className="flex items-center gap-2"
//           >
//             Next
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         </Card>

//         {/* tiny footer row links (as in screenshot) */}
//         <div className="flex items-center justify-between text-xs text-muted-foreground">
//           <Button variant="link" className="px-0">
//             Device & Zoom
//           </Button>
//           <Button variant="link" className="px-0">
//             Need to leave a suggestion?
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// }





// LESSON 2

import { SEO } from "@/components/SEO";
import { LessonHeader } from "@/components/dashboard/LessonHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, CircleCheck } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Styles.css";

/** Reuse small helpers from Ch1 */
const PillHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">
    <div className="inline-flex rounded-full bg-primary px-4 py-2 text-[11px] font-extrabold uppercase tracking-wide text-white">
      {children}
    </div>
  </div>
);

const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="space-y-4">{children}</section>
);

const Test = ({ label, to }: { label: string; to: string }) => {
  return (
    <div>
      <div>{label}</div>
      <div>{to}</div>
    </div>
  );
};

const insertParagraph = ({ type }: { type: string }) => {
  return (
    <div className="m-5 rounded-lg bg-gray-100 p-5">
      <p className="text-sm leading-relaxed">
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
        <br /><br />
      </p>
    </div>
  );
};

const insertImage = ({ type }: { type: string }) => {
  return (
    <div className="text-center">
        <img
          className="mx-auto h-auto w-full max-w-[1000px]"
          src="https://placehold.co/1000x1000/png?text=Placeholder"
          alt="placeholder"
        />
    </div>
  );
};

const insertHeadingParagpraph = ({ type }: { type: string }) => {
  return (
    <div className="m-5 p-5">
        <h1 className="text-2xl font-bold">LOREM IPSUM</h1>
        <p className="mt-2 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
  );
};

const insertImageParagraph = ({ type }: { type: string }) => {
  return (
    <div className="m-5 p-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <img
            className="h-auto w-full rounded-md"
            src="https://placehold.co/1000x1000/png?text=Placeholder"
            alt="placeholder"
          />
        </div>
        <div>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

const insertImageHeadingParagraph = ({ type }: { type: string }) => {
  return (
    <div className="m-5 p-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <img
            className="h-auto w-full rounded-md"
            src="https://placehold.co/1000x1000/png?text=Placeholder"
            alt="placeholder"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">LOREM IPSUM</h1>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

const insertHeading = ({ type }: { type: string }) => {
  return (
    <div className="m-5 rounded-lg bg-primary p-5">
        <h1 className="text-2xl font-bold text-white">LOREM IPSUM</h1>
    </div>
  );
};


const getId = (id: string | undefined) => {
  if (!id) return { chapter: 1 };
  const [chapter] = id.split('-');
  return { chapter: parseInt(chapter) || 1 };
};

export default function Lesson() {
  const navigate = useNavigate();
  const { Id } = useParams<{ Id: string }>();

  // const items = [
  //   { label: "Lesson 1", to: "/lesson/1" },
  //   { label: "Lesson 2", to: "/lesson/2" },
  //   { label: "Lesson 3", to: "/lesson/3" },
  // ];

  // const items = [
    // insertHeading({ type: "heading" }),
    // insertParagraph({ type: "paragraph" }),
    // insertImage({ type: "image" }),
    // insertHeadingParagpraph({ type: "heading-paragraph" }),
    // insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    // insertImageParagraph({ type: "image-paragraph" }),
  // ];

  const chapter1 = [
    insertImage({ type: "image" }),
    insertImage({ type: "image" }),
    insertImage({ type: "image" }),
    insertHeading({ type: "heading" }),
    insertImage({ type: "image" }),
    insertParagraph({ type: "paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertParagraph({ type: "paragraph" }),
    insertImage({ type: "image" }),
    insertHeading({ type: "heading" }),
    insertImage({ type: "image" }),
    insertParagraph({ type: "paragraph" }),
    insertImage({ type: "image" }),
    insertHeading({ type: "heading" }),
    insertParagraph({ type: "paragraph" }),
    insertImageParagraph({ type: "image-paragraph" }),
    insertParagraph({ type: "paragraph" }),
    insertImageParagraph({ type: "image-paragraph" }),
    insertHeading({ type: "heading" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImage({ type: "image" }),
  ];

  const chapter2 = [
    insertImage({ type: "image" }),
    insertParagraph({ type: "paragraph" }),
    insertImage({ type: "image" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertHeading({ type: "heading" }),
    insertImage({ type: "image" }),
    insertParagraph({ type: "paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertParagraph({ type: "paragraph" }),
    insertHeading({ type: "heading" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImage({ type: "image" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImage({ type: "image" }),
    insertParagraph({ type: "paragraph" }),
    insertParagraph({ type: "paragraph" }),
    insertImage({ type: "image" }),
    insertParagraph({ type: "paragraph" }),
    insertImage({ type: "image" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertHeading({ type: "heading" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImage({ type: "image" }),
    insertHeading({ type: "heading" }),
    insertImage({ type: "image" }),
    insertParagraph({ type: "paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertHeading({ type: "heading" }),
    insertImage({ type: "image" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImage({ type: "image" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }), // Glasses - Corrective Lenses 
  ];

  const chapter3 = [
    // insertHeading({ type: "heading" }),
    // insertParagraph({ type: "paragraph" }),
    // insertImage({ type: "image" }),
    // insertHeadingParagpraph({ type: "heading-paragraph" }),
    // insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    // insertImageParagraph({ type: "image-paragraph" }),

    insertImage({ type: "image" }),
    insertParagraph({ type: "paragraph" }),
    insertHeading({ type: "heading" }),
    insertImage({ type: "image" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertParagraph({ type: "paragraph" }),
    insertHeading({ type: "heading" }),
    insertImage({ type: "image" }),
    insertParagraph({ type: "paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImage({ type: "image" }),
    insertHeading({ type: "heading" }),
    insertImage({ type: "image" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertHeading({ type: "heading" }),
    insertImage({ type: "image" }),
    insertParagraph({ type: "paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImage({ type: "image" }),
    insertHeading({ type: "heading" }),
    insertImage({ type: "image" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImage({ type: "image" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImage({ type: "image" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImage({ type: "image" }),
    insertParagraph({ type: "paragraph" }),
    insertImageParagraph({ type: "image-heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImage({ type: "image" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertHeading({ type: "heading" }),
    insertImageParagraph({ type: "image-heading-paragraph" }),
    insertHeadingParagpraph({ type: "heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertHeading({ type: "heading" }),
    insertParagraph({ type: "paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImage({ type: "image" }),
    insertHeading({ type: "heading" }),
    insertImage({ type: "image" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImageHeadingParagraph({ type: "image-heading-paragraph" }),
    insertImage({ type: "image" }), // U Drive U Text U Pay
  ];

  return (
    <>
      <LessonHeader 
        userName="Yasmine"
        currentChapter={getId(Id)?.chapter || 1}
        currentPage={1}
        totalPages={1}
        progress={18}
        timeRequired="6 Hours"
        timeRemaining="05:52:42"
      />
      
      <section>
        {Id === "1-1" &&
          chapter1.map((item, index) => (
            <div key={index}>{item}</div>
          ))}

      {Id === "2-1" &&
        chapter2.map((item, index) => (
          <div key={index}>{item}</div>
        ))}

      {Id === "3-1" &&
        chapter3.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
          
      {/* <div className="text-center">
        <img
          className="mx-auto h-auto w-full max-w-[1000px]"
          src="https://placehold.co/1000x1000/png?text=Placeholder"
          alt="placeholder"
        />
      </div> */}

      {/* <div className="m-5 rounded-lg bg-gray-100 p-5">
        <p className="text-sm leading-relaxed">
          <div>
            {items.map((item, index) => (
              <Test key={index} label={item.label} to={item.to} />
            ))}
          </div>
          <br />
          <Test label="Test" to="/test" />
          <br />
          Lesson ID: {Id} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br /><br />
        </p>
      </div> */}

      {/* <div className="m-5 rounded-lg bg-gray-100 p-5">
        <p className="text-sm leading-relaxed">
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br /><br />
        </p>
      </div> */}

      {/* <div className="text-center">
        <img
          className="mx-auto h-auto w-full max-w-[1000px]"
          src="https://placehold.co/1000x1000/png?text=Placeholder"
          alt="placeholder"
        />
      </div> */}

      {/* <div className="m-5 p-5">
        <h1 className="text-2xl font-bold">LIGHTS</h1>
        <p className="mt-2 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div> */}
    </section>

    {/* <section>
      <div className="m-5 rounded-lg bg-primary p-5">
        <h1 className="text-2xl font-bold text-white">HEADLIGHTS</h1>
      </div>

      <div className="text-center">
        <img
          className="mx-auto h-auto w-full max-w-[1000px]"
          src="https://placehold.co/1000x1000/png?text=Placeholder"
          alt="placeholder"
        />
      </div>

      <div className="m-5 p-5">
        <p className="text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="m-5 p-5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <img
              className="h-auto w-full rounded-md"
              src="https://placehold.co/1000x1000/png?text=Placeholder"
              alt="placeholder"
            />
          </div>
          <div>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <div className="m-5 p-5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <img
              className="h-auto w-full rounded-md"
              src="https://placehold.co/1000x1000/png?text=Placeholder"
              alt="placeholder"
            />
          </div>
          <div>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="m-5 rounded-lg bg-primary p-5">
        <h1 className="text-2xl font-bold text-white">REAR LIGHTS</h1>
      </div>

      <div className="m-5 p-5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <img
              className="h-auto w-full rounded-md"
              src="https://placehold.co/1000x1000/png?text=Placeholder"
              alt="placeholder"
            />
          </div>
          <div>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <div className="m-5 p-5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <img
              className="h-auto w-full rounded-md"
              src="https://placehold.co/1000x1000/png?text=Placeholder"
              alt="placeholder"
            />
          </div>
          <div>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <div className="m-5 p-5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <img
              className="h-auto w-full rounded-md"
              src="https://placehold.co/1000x1000/png?text=Placeholder"
              alt="placeholder"
            />
          </div>
          <div>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <img
          className="mx-auto h-auto w-full max-w-[1000px]"
          src="https://placehold.co/1000x1000/png?text=Placeholder"
          alt="placeholder"
        />
      </div>

      <div className="m-5 p-5">
        <h1 className="text-2xl font-bold">Turn Signals</h1>
        <p className="mt-2 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section> */}
    </>
  );
}
