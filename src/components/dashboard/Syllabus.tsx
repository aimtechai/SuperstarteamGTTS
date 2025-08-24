import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

import { BookOpen, ShieldCheck, Car, Hand, Gauge, HardHat, Waypoints, Navigation, FileText, Layers, CircleCheck, CircleDashed, FlaskConical, UserCheck, Signpost, Smartphone, ClipboardList, GraduationCap } from "lucide-react";

const Row = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-3">
    <span className="text-primary">{icon}</span>
    <span className="font-medium text-foreground">{title}</span>
  </div>
);

const LessonRow = ({ title, lessonId }: { title: string; lessonId?: string }) => (
  <div className="flex flex-wrap items-center justify-between gap-2 border p-3">
    <div className="text-base text-foreground" style={{ color: "#004985", fontSize: "18px" }}>{title}</div>
    <div className="flex items-center gap-2">
      {lessonId ? (
        <Link to={`/lesson/${lessonId}`}>
          <Button
            variant="ghost"
            size="sm"
            style={{
              borderRadius: "16px",
              borderWidth: "2px",
              borderColor: "#ffc107",
              color: "#ffc107",
            }}
          >
            Watch Now
          </Button>
        </Link>
      ) : (
        <Button variant="pillWarning" size="sm">Watch Now</Button>
      )}
      {/* <Button variant="pillOutlinePrimary" size="sm">Take Test</Button> */}
      <Button
        variant="ghost"
        size="sm"
        style={{
          borderRadius: "16px",
          borderWidth: "2px",
          borderColor: "#0b3c74",
          color: "#0b3c74",
        }}
      >
        Test
      </Button>
    </div>
  </div>
);

// export const Syllabus = () => {
//   return (
//     <section className="mt-6">
//       <Card className="border bg-background p-5 shadow-sm">
//       <Card className="border bg-background shadow-sm">
//         <h2 className="mb-4 rounded-xl border border-primary/30 px-4 py-2 text-lg font-semibold text-foreground">Course Syllabus</h2>
//         <div style={{ backgroundColor: "#E7F4FF" }}>
//           <Progress value={70} className="h-3" />
//           <div className="flex items-center gap-4 text-xs text-muted-foreground">
//             <span className="inline-flex items-center gap-1"><CircleCheck className="h-3 w-3 text-primary"/> Complete</span>
//             <span className="inline-flex items-center gap-1"><CircleDashed className="h-3 w-3"/> Incomplete</span>
//           </div>
//         </div>
//         <div className="mt-4">
//           <Accordion type="single" collapsible className="w-full">
//             <AccordionItem value="c1" className="border-none">
//               <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
//                 <Row title="Chapter 1 Course Introduction" icon={<BookOpen className="h-5 w-5" />} />
//               </AccordionTrigger>
//               <AccordionContent>
//                 <div style={{ backgroundColor: "#E7F4FF" }}>
//                   <LessonRow title="Course Introduction" />
//                   <LessonRow title="The Common Sense of Driving" />
//                 </div>
//               </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="c2" className="border-none">
//               <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
//                 <Row title="Chapter 2 Required Safety Equipment" icon={<ShieldCheck className="h-5 w-5" />} />
//               </AccordionTrigger>
//               <AccordionContent>
//                 <LessonRow title="Required Safety Equipment" />
//               </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="c3" className="border-none">
//               <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
//                 <Row title="Chapter 3 Defensive Driving" icon={<Car className="h-5 w-5" />} />
//               </AccordionTrigger>
//             </AccordionItem>

//             <AccordionItem value="c4" className="border-none">
//               <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
//                 <Row title="Chapter 4 Established Speed Laws" icon={<Gauge className="h-5 w-5" />} />
//               </AccordionTrigger>
//             </AccordionItem>

//             <AccordionItem value="c5" className="border-none">
//               <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
//                 <Row title="Chapter 5 Proper Lane Use" icon={<Waypoints className="h-5 w-5" />} />
//               </AccordionTrigger>
//             </AccordionItem>

//             <AccordionItem value="c6" className="border-none">
//               <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
//                 <Row title="Chapter 6 Backing Up Safely" icon={<Navigation className="h-5 w-5" />} />
//               </AccordionTrigger>
//             </AccordionItem>

//             <AccordionItem value="c7" className="border-none">
//               <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
//                 <Row title="Chapter 7 Interacting at Intersections Passing" icon={<Hand className="h-5 w-5" />} />
//               </AccordionTrigger>
//             </AccordionItem>

//             <AccordionItem value="c8" className="border-none">
//               <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
//                 <Row title="Chapter 8 Passing" icon={<Navigation className="h-5 w-5" />} />
//               </AccordionTrigger>
//             </AccordionItem>

//             <AccordionItem value="c9" className="border-none">
//               <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
//                 <Row title="Chapter 9 Demands of City Driving" icon={<Layers className="h-5 w-5" />} />
//               </AccordionTrigger>
//             </AccordionItem>

//             <AccordionItem value="c10" className="border-none">
//               <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
//                 <Row title="Chapter 10 Demands of Freeway Driving" icon={<Navigation className="h-5 w-5" />} />
//               </AccordionTrigger>
//             </AccordionItem>

//             <AccordionItem value="c11" className="border-none">
//               <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
//                 <Row title="Chapter 11 Driving in an Open Highway" icon={<FileText className="h-5 w-5" />} />
//               </AccordionTrigger>
//             </AccordionItem>

//             <AccordionItem value="c12" className="border-none">
//               <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
//                 <Row title="Chapter 12 Hazardous Conditions" icon={<HardHat className="h-5 w-5" />} />
//               </AccordionTrigger>
//             </AccordionItem>
//           </Accordion>
//         </div>
//       </Card>
//     </section>
//   );
// };

export const Syllabus = () => {
  return (
    <section className="mt-6">
      {/* <Card className="border bg-background p-5 shadow-sm"> */}
      {/* <h1 className="mb-4 rounded-xl border border-primary/30 px-4 py-2 text-3xl font-semibold text-foreground">
        Course Syllabus
      </h1>

        <div style={{ backgroundColor: "#E7F4FF" }}>
          <div className="relative">
            <Progress value={70} className="h-3" />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-muted-foreground">50%</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <CircleCheck className="h-3 w-3 text-primary" /> Complete
            </span>
            <span className="inline-flex items-center gap-1">
              <CircleDashed className="h-3 w-3" /> Incomplete
            </span>
          </div>
        </div> */}

      <header>
        {/* <h1 className="text-2xl font-semibold text-foreground">Course Syllabus</h1>
         */}
        <h1 className="mb-4 rounded-xl px-4 py-2 text-3xl font-semibold" style={{ borderRadius: "16px", borderWidth: "1px", borderColor: "#154393", color: "#154393" }}>
          Course Syllabus
        </h1>
        <div className="mt-4">
          <div className="relative">
            <Progress value={70} className="h-3" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-base font-medium text-white">70%</div>
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

        <div className="mt-4">
          <Accordion type="single" collapsible className="w-full">
            {/* 1–12 (existing) */}
            <AccordionItem value="c1" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 1 Course Introduction" icon={<BookOpen className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF"}}>
                  <LessonRow title="Course Introduction" lessonId="1-1" />
                  <LessonRow title="The Common Sense of Driving" lessonId="1-2" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c2" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 2 Required Safety Equipment" icon={<ShieldCheck className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Required Safety Equipment" lessonId="2-1" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c3" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 3 Defensive Driving" icon={<Car className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Defensive Driving Basics" lessonId="3-1" />
                  <LessonRow title="Following Distance" lessonId="3-2" />
                  <LessonRow title="Scanning Techniques" lessonId="3-3" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c4" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 4 Established Speed Laws" icon={<Gauge className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Speed Limits and Laws" lessonId="4-1" />
                  <LessonRow title="Safe Driving Speeds" lessonId="4-2" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c5" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 5 Proper Lane Use" icon={<Waypoints className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Lane Positioning" lessonId="5-1" />
                  <LessonRow title="Lane Changes" lessonId="5-2" />
                  <LessonRow title="Multiple Lane Roads" lessonId="5-3" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c6" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 6 Backing Up Safely" icon={<Navigation className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Safe Backing Techniques" lessonId="6-1" />
                  <LessonRow title="Parallel Parking" lessonId="6-2" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c7" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 7 Interacting at Intersections" icon={<Hand className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Intersection Safety" lessonId="7-1" />
                  <LessonRow title="Right of Way Rules" lessonId="7-2" />
                  <LessonRow title="Traffic Signals" lessonId="7-3" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c8" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 8 Passing" icon={<Navigation className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Safe Passing Techniques" lessonId="8-1" />
                  <LessonRow title="When Not to Pass" lessonId="8-2" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c9" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 9 Demands of City Driving" icon={<Layers className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Urban Driving Challenges" lessonId="9-1" />
                  <LessonRow title="Pedestrian Safety" lessonId="9-2" />
                  <LessonRow title="City Traffic Patterns" lessonId="9-3" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c10" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 10 Demands of Freeway Driving" icon={<Navigation className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Freeway Entry and Exit" lessonId="10-1" />
                  <LessonRow title="High Speed Driving" lessonId="10-2" />
                  <LessonRow title="Freeway Safety" lessonId="10-3" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c11" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 11 Driving in an Open Highway" icon={<FileText className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Rural Highway Driving" lessonId="11-1" />
                  <LessonRow title="Long Distance Safety" lessonId="11-2" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c12" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 12 Hazardous Conditions" icon={<HardHat className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Weather Conditions" lessonId="12-1" />
                  <LessonRow title="Emergency Situations" lessonId="12-2" />
                  <LessonRow title="Vehicle Breakdowns" lessonId="12-3" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c13" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 13 Alcohol and Other Drugs" icon={<FlaskConical className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Impaired Driving Laws" lessonId="13-1" />
                  <LessonRow title="Effects of Substances" lessonId="13-2" />
                  <LessonRow title="Prevention and Safety" lessonId="13-3" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c14" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 14 Driver Responsibility" icon={<UserCheck className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Legal Responsibilities" lessonId="14-1" />
                  <LessonRow title="Insurance Requirements" lessonId="14-2" />
                  <LessonRow title="Accident Procedures" lessonId="14-3" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c15" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 15 Traffic Signs, Signals & Controls" icon={<Signpost className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Traffic Signs" lessonId="15-1" />
                  <LessonRow title="Traffic Signals" lessonId="15-2" />
                  <LessonRow title="Road Markings" lessonId="15-3" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c16" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 16 Texting While Driving" icon={<Smartphone className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Distracted Driving Laws" lessonId="16-1" />
                  <LessonRow title="Dangers of Phone Use" lessonId="16-2" />
                  <LessonRow title="Safe Communication Practices" lessonId="16-3" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c17" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 17 Licensing Control Measures" icon={<ClipboardList className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="License Requirements" lessonId="17-1" />
                  <LessonRow title="Point System" lessonId="17-2" />
                  <LessonRow title="License Suspension" lessonId="17-3" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="c18" className="border-none">
              <AccordionTrigger className="px-4 text-left no-underline border-b border-b-orange-500">
                <Row title="Chapter 18 Final Exam Information" icon={<GraduationCap className="h-5 w-5" />} />
              </AccordionTrigger>
              <AccordionContent>
                <div style={{ backgroundColor: "#E7F4FF" }}>
                  <LessonRow title="Exam Preparation" lessonId="18-1" />
                  <LessonRow title="Test Taking Strategies" lessonId="18-2" />
                  <LessonRow title="Course Review" lessonId="18-3" />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      {/* </Card> */}
    </section>
  );
};


