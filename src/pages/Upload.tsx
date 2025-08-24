// import React, { useRef, useState } from "react";
// import { SEO } from "@/components/SEO";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { Upload, FileText, FileType } from "lucide-react";
// import { ProgressSection } from "@/components/dashboard/ProgressSection";
// import { Welcome } from "@/components/dashboard/Header";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/Styles.css";

// type UploadItem = {
//   id: string;
//   title: string;
//   presetFile?: string;
//   active?: boolean;
//   type?: "pdf" | "doc" | "generic";
// };

// const items: UploadItem[] = [
//   { id: "affidavit", title: "Student-Parent Application Affidavit", presetFile: "Affidavit_Uploaded.Pdf", type: "pdf" },
//   { id: "homeschooled", title: "Home Schooled Verification", type: "doc" },
//   { id: "ch1", title: "Chapter 1 Worksheet", presetFile: "Chapter 1.pdf", type: "pdf" },
//   { id: "ch2", title: "Chapter 2 Worksheet", type: "generic" },
//   { id: "ch3", title: "Chapter 3 Worksheet", active: true, type: "generic" },
//   { id: "ch8", title: "Chapter 8 Worksheet", type: "generic" },
//   { id: "course-completion", title: "Course Completion Affidavit", type: "generic" },
// ];

// const IconBadge = ({ type }: { type?: UploadItem["type"] }) => {
//   const cls = "mx-auto mb-3 flex h-20 w-16 items-center justify-center rounded-md";
//   if (type === "pdf") return (
//     <div className={cls} aria-label="PDF file icon">
//       <FileText className="h-10 w-10 text-primary" />
//     </div>
//   );
//   if (type === "doc") return (
//     <div className={cls} aria-label="DOC file icon">
//       <FileType className="h-10 w-10 text-primary" />
//     </div>
//   );
//   return (
//     <div className={cls} aria-label="Upload icon">
//       <Upload className="h-10 w-10 text-primary" />
//     </div>
//   );
// };

// const DropTile = ({ item }: { item: UploadItem }) => {
//   const inputRef = useRef<HTMLInputElement | null>(null);
//   const [fileName, setFileName] = useState<string | undefined>(item.presetFile);
//   const [dragOver, setDragOver] = useState(false);

//   const onDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
//     e.preventDefault();
//     setDragOver(false);
//     const f = e.dataTransfer.files?.[0];
//     if (f) setFileName(f.name);
//   };

//   return (
//     <div
//       className={`relative rounded-xl border bg-card p-5 shadow-sm transition ${item.active ? "ring-2 ring-primary" : ""}`}
//     >
//       <h3 className="mb-2 text-center text-lg font-semibold text-foreground">{item.title}</h3>

//       <IconBadge type={item.type} />

//       {/* File status */}
//       <div className="text-center text-sm text-foreground">
//         {fileName ? fileName : "No File Selected"}
//       </div>
//       <div
//         className={`mt-1 text-center text-xs ${fileName ? "text-muted-foreground" : "text-muted-foreground"}`}
//       >
//         {fileName ? "Click or drag to replace" : "Drag & drop file here / Click to upload"}
//       </div>

//       {/* Drop area */}
//       <div
//         onClick={() => inputRef.current?.click()}
//         onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
//         onDragLeave={() => setDragOver(false)}
//         onDrop={onDrop}
//         className={`mt-4 rounded-lg border-2 border-dashed p-8 text-center ${dragOver ? "border-primary" : "border-border"}`}
//         role="button"
//         aria-label={`Upload for ${item.title}`}
//       >
//         <Upload className="mx-auto h-6 w-6 text-muted-foreground" />
//       </div>

//       <input
//         ref={inputRef}
//         type="file"
//         className="hidden"
//         onChange={(e) => setFileName(e.target.files?.[0]?.name)}
//       />
//     </div>
//   );
// };

// const UploadPage: React.FC = () => {
//   return (
//     <>
//       <SEO title="Course Syllabus – Uploads" description="Upload your worksheets and affidavits to complete your course." />
//       <Welcome />
//       <ProgressSection />
//       {/* Header + progress */}
//       <header>
//         {/* <h1 className="text-2xl font-semibold text-foreground">Course Syllabus</h1>
//          */}
//         <h1 className="mb-4 mt-4 rounded-xl px-4 py-2 text-3xl font-semibold" style={{ borderRadius: "16px", borderWidth: "1px", borderColor: "#154393", color: "#154393" }}>
//           Course Syllabus
//         </h1>
//         <div className="mt-4">
//           <div className="relative">
//             <Progress value={70} className="h-3" />
//             <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-medium text-white">70%</div>
//           </div>
//           <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
//             <div className="flex items-center gap-2">
//               <span className="h-2 w-2 rounded-full" aria-hidden style={{ backgroundColor: "#79C3FF" }} />
//               Complete
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="h-2 w-2 rounded-full bg-muted" aria-hidden />
//               Incomplete
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Upload grid */}
//       <section className="mt-6">
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {items.map((item) => (
//             <DropTile key={item.id} item={item} />
//           ))}
//         </div>
//       </section>

//       <div className="mt-8 flex justify-end">
//         <Button variant="pillPrimary">Submit</Button>
//       </div>
//     </>
//   );
// };

// export default UploadPage;











import React, { useRef, useState } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload as UploadIcon, ClipboardCheck, ClipboardList } from "lucide-react";
import { ProgressSection } from "@/components/dashboard/ProgressSection";
import { Welcome } from "@/components/dashboard/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Styles.css";

type UploadItem = {
  id: string;
  title: string;
  presetFile?: string;
  active?: boolean;
  type?: "pdf" | "doc" | "generic";
};

const items: UploadItem[] = [
  { id: "affidavit", title: "Student-Parent Application Affidavit", presetFile: "Affidavit_Uploaded.Pdf", type: "pdf" },
  { id: "homeschooled", title: "Home Schooled Verification", type: "doc" },
  { id: "ch1", title: "Chapter 1 Worksheet", presetFile: "Chapter 1.pdf", type: "pdf" },
  { id: "ch2", title: "Chapter 2 Worksheet", type: "generic" },
  { id: "ch3", title: "Chapter 3 Worksheet", active: false, type: "generic" },
  { id: "ch8", title: "Chapter 8 Worksheet", type: "generic" },
  { id: "course-completion", title: "Course Completion Affidavit", type: "generic" },
];

/* ---------- Icon tile (matches mock) ---------- */
const FileTile: React.FC<{ type?: UploadItem["type"]; dragOver: boolean }> = ({ type, dragOver }) => {
  const wrapper =
    "mx-auto mb-3 flex h-[110px] w-[110px] items-center justify-center rounded-lg transition-shadow";
  const bgStyle = {
    backgroundImage: "linear-gradient(180deg,#EAF3FF 0%, #CFE0FF 100%)",
  } as React.CSSProperties;

  if (type === "pdf" || type === "doc") {
    return (
      <div
        className={`${wrapper}`}
        style={bgStyle}
        aria-label={type.toUpperCase() + " file icon"}
      >
        {/* Doc sheet */}
        <div className="relative h-[80px] w-[60px] rounded-md bg-white">
          {/* top dog-ear */}
          <div
            className="absolute right-0 top-0 h-5 w-5 rounded-bl-md"
            style={{ backgroundColor: "#E9F1FF" }}
          />
          {/* badge */}
          <div
            className="absolute bottom-0 left-0 right-0 flex h-7 items-center justify-center rounded-b-md text-base font-black tracking-wider text-white"
            style={{ backgroundColor: type === "pdf" ? "#E05656" : "#2F6FEA" }}
          >
            {type === "pdf" ? "PDF" : "DOC"}
          </div>
        </div>
      </div>
    );
  }

  // generic upload tile
  return (
    <div
      className={`${wrapper} ${dragOver ? "" : ""} `}
      style={bgStyle}
      aria-label="Upload icon"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-md" style={{ backgroundColor: "#6FA5F6" }}>
        <UploadIcon className="h-7 w-7 text-white" />
      </div>
    </div>
  );
};

/* ---------- Card ---------- */
const DropTile = ({ item }: { item: UploadItem }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | undefined>(item.presetFile);
  const [dragOver, setDragOver] = useState(false);

  const onDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) setFileName(f.name);
  };

  const onPick: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const f = e.target.files?.[0];
    if (f) setFileName(f.name);
  };

  return (
    <div
      className={`relative rounded-xl border bg-white p-5 transition ${
        item.active ? "ring-2 ring-[#2F6FEA]" : ""
      } min-h-[270px]`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={onDrop}
      onClick={() => inputRef.current?.click()}
      role="button"
      aria-label={`Upload for ${item.title}`}
    >
      {/* top-right status icon like mock */}
      <div className="absolute right-2 top-2 text-muted-foreground">
        {fileName ? (
          <ClipboardCheck className="h-4 w-4" />
        ) : (
          <ClipboardList className="h-4 w-4 opacity-60" />
        )}
      </div>

      <h3 className="mb-3 mt-2 text-center text-[18px] font-bold leading-tight text-foreground">
        {item.title}
      </h3>

      {/* big icon tile */}
      <FileTile type={item.type} dragOver={dragOver} />

      {/* status text (matches order in mock) */}
      {fileName ? (
        <>
          <div className="text-center text-base font-semibold text-foreground">{fileName}</div>
          <div className="mt-1 text-center text-base text-muted-foreground">Click or drop to replace</div>
        </>
      ) : (
        <>
          <div className="text-center text-base font-semibold text-foreground">
            Drag &amp; drop file here / Click to upload
          </div>
          <div className="mt-1 text-center text-base text-muted-foreground">No File Selected</div>
        </>
      )}

      <input ref={inputRef} type="file" className="hidden" onChange={onPick} />
    </div>
  );
};

const UploadPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Course Syllabus – Uploads"
        description="Upload your worksheets and affidavits to complete your course."
      />
      <Welcome />
      <ProgressSection />

      <header>
        <h1
          className="mb-4 mt-4 rounded-xl px-4 py-2 text-3xl font-semibold"
          style={{ borderRadius: "16px", borderWidth: "1px", borderColor: "#154393", color: "#154393" }}
        >
          Course Syllabus
        </h1>
        <div className="mt-4">
          <div className="relative">
            <Progress value={70} className="h-3" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-base font-medium text-white">
              70%
            </div>
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

      {/* Upload grid */}
      <section className="mt-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <DropTile key={item.id} item={item} />
          ))}
        </div>
      </section>

      <div className="mt-8 flex justify-end">
        <Button variant="pillPrimary">Submit</Button>
      </div>
    </>
  );
};

export default UploadPage;
