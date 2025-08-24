// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { Badge } from "@/components/ui/badge";
// import { 
//   Play, 
//   Pause, 
//   SkipBack, 
//   SkipForward, 
//   Volume2,
//   ZoomIn,
//   ZoomOut,
//   Clock,
//   RotateCcw
// } from "lucide-react";
// import { useState } from "react";

// interface LessonHeaderProps {
//   userName?: string;
//   userAvatar?: string;
//   currentChapter: number;
//   currentPage: number;
//   totalPages: number;
//   progress: number;
//   timeRequired: string;
//   timeRemaining: string;
//   audioTitle?: string;
//   audioCurrentTime?: string;
//   audioDuration?: string;
// }

// export function LessonHeader({
//   userName = "Yasmine",
//   userAvatar,
//   currentChapter = 3,
//   currentPage = 1,
//   totalPages = 1,
//   progress = 18,
//   timeRequired = "6 Hours",
//   timeRemaining = "05:52:42",
//   audioTitle = "Get Started Today!",
//   audioCurrentTime = "01:50",
//   audioDuration = "02:15"
// }: LessonHeaderProps) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [fontSize, setFontSize] = useState(16);

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const handleFontSizeChange = (increase: boolean) => {
//     setFontSize(prev => increase ? Math.min(prev + 2, 24) : Math.max(prev - 2, 12));
//   };

//   const audioProgress = audioCurrentTime && audioDuration ? 
//     (parseFloat(audioCurrentTime.replace(':', '.')) / parseFloat(audioDuration.replace(':', '.'))) * 100 : 0;

//   return (
//     <Card className="p-6 mb-6">
//       <div className="flex items-start justify-between mb-6">
//         {/* User Profile Section */}
//         <div className="flex items-center gap-4">
//           <Avatar className="h-16 w-16">
//             <AvatarImage src={userAvatar} alt={userName} />
//             <AvatarFallback className="text-lg font-semibold">
//               {userName?.charAt(0) || "U"}
//             </AvatarFallback>
//           </Avatar>
//           <div>
//             <h1 className="text-2xl font-bold text-primary">{userName}</h1>
//             <div className="flex items-center gap-2 mt-1">
//               <span className="text-sm text-muted-foreground">Currently On:</span>
//               <span className="text-sm font-medium">Chapter {currentChapter} Page: {currentPage} of {totalPages}</span>
//             </div>
//             <div className="flex items-center gap-2 mt-1">
//               <span className="text-sm text-muted-foreground">Progress:</span>
//               <div className="flex items-center gap-2">
//                 <Progress value={progress} className="w-16 h-2" />
//                 <span className="text-sm font-medium">{progress}%</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Text Size Controls */}
//         <div className="flex gap-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => handleFontSizeChange(true)}
//             className="flex items-center gap-2"
//           >
//             <ZoomIn className="h-4 w-4" />
//             Enlarge text
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => handleFontSizeChange(false)}
//             className="flex items-center gap-2"
//           >
//             <ZoomOut className="h-4 w-4" />
//             Shrink text
//           </Button>
//         </div>
//       </div>

//       {/* Time Information */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="flex items-center gap-6">
//           <div className="flex items-center gap-2">
//             <Clock className="h-4 w-4 text-blue-600" />
//             <span className="text-sm font-medium">Time Required for this School:</span>
//             <span className="text-sm font-bold">{timeRequired}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <RotateCcw className="h-4 w-4 text-blue-600" />
//             <span className="text-sm font-medium">Required time remaining:</span>
//             <span className="text-sm font-bold">{timeRemaining}</span>
//           </div>
//         </div>
//         <Badge variant="destructive" className="bg-red-500 hover:bg-red-600">
//           FREE TRIAL
//         </Badge>
//       </div>

//       {/* Audio Section */}
//       <div className="bg-muted/30 rounded-lg p-4">
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
//                 <Volume2 className="h-6 w-6 text-white" />
//               </div>
//               <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1">
//                 NEW!
//               </Badge>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg">{audioTitle}</h3>
//               <div className="flex items-center gap-2 text-sm">
//                 <span className="bg-gray-800 text-white px-2 py-1 rounded text-xs">🔒</span>
//                 <span className="font-medium">Audio Read Along!</span>
//                 <Button variant="link" className="p-0 h-auto text-blue-600 underline text-sm">
//                   Upgrade Now!
//                 </Button>
//               </div>
//             </div>
//           </div>
          
//           <div className="text-right">
//             <div className="text-sm text-muted-foreground mb-1">
//               👋 Click the play button!
//             </div>
//           </div>
//         </div>

//         {/* Audio Controls */}
//         <div className="flex items-center gap-4">
//           <Button
//             variant="outline"
//             size="sm"
//             className="rounded-full w-10 h-10 p-0"
//           >
//             <SkipBack className="h-4 w-4" />
//           </Button>
          
//           <Button
//             variant="outline"
//             size="sm"
//             className="rounded-full w-10 h-10 p-0"
//           >
//             <SkipBack className="h-4 w-4" />
//           </Button>

//           <Button
//             variant="default"
//             size="sm"
//             className="rounded-full w-12 h-12 p-0 bg-blue-600 hover:bg-blue-700"
//             onClick={handlePlayPause}
//           >
//             {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
//           </Button>

//           <Button
//             variant="outline"
//             size="sm"
//             className="rounded-full w-10 h-10 p-0"
//           >
//             <SkipForward className="h-4 w-4" />
//           </Button>

//           {/* Audio Progress */}
//           <div className="flex-1 flex items-center gap-3">
//             <span className="text-sm font-mono">{audioCurrentTime}</span>
//             <div className="flex-1 relative">
//               <Progress value={audioProgress} className="h-2" />
//               <div 
//                 className="absolute top-0 left-0 h-2 bg-red-500 rounded-full"
//                 style={{ width: `${Math.min(audioProgress + 5, 100)}%` }}
//               />
//             </div>
//             <span className="text-sm font-mono text-muted-foreground">{audioDuration}</span>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }








// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Play,
//   Pause,
//   SkipBack,
//   SkipForward,
//   Volume2,
//   ZoomIn,
//   ZoomOut,
//   Clock,
//   RotateCcw,
//   Lock
// } from "lucide-react";
// import { useMemo, useState } from "react";

// interface LessonHeaderProps {
//   userName?: string;
//   userAvatar?: string;
//   currentChapter?: number;
//   currentPage?: number;
//   totalPages?: number;
//   progress?: number; // 0–100
//   timeRequired?: string;
//   timeRemaining?: string;
//   audioTitle?: string;
//   audioCurrentTime?: string; // "mm:ss"
//   audioDuration?: string; // "mm:ss"
// }

// export function LessonHeader({
//   userName = "Yasmine",
//   userAvatar,
//   currentChapter = 3,
//   currentPage = 1,
//   totalPages = 1,
//   progress = 16,
//   timeRequired = "6 Hours",
//   timeRemaining = "05:52:42",
//   audioTitle = "Get Started Today!",
//   audioCurrentTime = "01:50",
//   audioDuration = "02:15",
// }: LessonHeaderProps) {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const pctAudio = useMemo(() => {
//     const toSec = (s: string) => {
//       const [m, sec] = s.split(":").map(Number);
//       return m * 60 + sec;
//     };  
//     try {
//       const a = toSec(audioCurrentTime);
//       const b = toSec(audioDuration);
//       if (!b) return 0;
//       return Math.min(100, Math.max(0, (a / b) * 100));
//     } catch {
//       return 0;
//     }
//   }, [audioCurrentTime, audioDuration]);

//   return (
//     <Card className="p-6 mb-6 border rounded-xl">
//       {/* Top row: avatar/name + status + text size buttons */}
//       <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
//         <div className="flex items-center gap-4">
//           <Avatar className="h-16 w-16 ring-2 ring-white shadow-sm">
//             <AvatarImage src={userAvatar} alt={userName} />
//             <AvatarFallback className="text-lg font-semibold">
//               {userName?.charAt(0) || "U"}
//             </AvatarFallback>
//           </Avatar>

//           <div className="space-y-2">
//             <h1 className="text-3xl font-bold tracking-tight">{userName}</h1>

//             {/* <div className="flex justify-center gap-4  w-full">
//             </div> */}
            
//           </div>
//         </div>

//         {/* Text size buttons */}
//         <div className="flex gap-3">
//           <Button variant="outline" className="rounded-2xl px-4 h-10">
//             <ZoomIn className="h-4 w-4 mr-2" />
//             Enlarge text
//           </Button>
//           <Button variant="outline" className="rounded-2xl px-4 h-10">
//             <ZoomOut className="h-4 w-4 mr-2" />
//             Shrink text
//           </Button>
//         </div>
        
//       </div>

//       <div className="flex justify-center gap-4 ">
//         <div className="inline-flex items-center gap-2 rounded-xl border px-4 py-2">
//           <div className="grid h-6 w-6 place-items-center rounded-full border">
//             {/* tiny “book” glyph substitute */}
//             <span className="text-[10px] font-bold leading-none">📘</span>
//           </div>
//           <div className="text-sm">
//             <span className="text-muted-foreground">Currently On:&nbsp;</span>
//             <span className="font-medium">
//               Chapter {currentChapter} Page: {currentPage} of {totalPages}
//             </span>
//             {/* progress pill */}
//             <div className="mt-1 h-2 w-28 rounded-full bg-muted">
//               <div
//                 className="h-2 rounded-full bg-blue-600"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="inline-flex items-center gap-2 rounded-xl border px-4 py-2">

//           {/* <div className="flex flex-wrap items-center gap-x-8 gap-y-3"> */}
//             <div className="flex items-center gap-2">
//               {/* <span className="h-2 w-2 rounded-full bg-blue-600" /> */}
//               <div className="text-sm text-muted-foreground">
//                 Time Required for this School:
//                 <div className="text-sm font-semibold text-foreground">{timeRequired}</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               {/* <span className="h-2 w-2 rounded-full bg-blue-600" /> */}
//               <div className="text-sm text-muted-foreground">
//                 Required time remaining:
//                 <div className="text-sm font-semibold text-foreground">{timeRemaining}</div>
//               </div>
//             </div>
//           {/* </div> */}
          
//         </div>
        
//       </div>

//       {/* Time info bar */}
//       <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//         <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
//           <div className="flex items-center gap-2">
//             <span className="h-2 w-2 rounded-full bg-blue-600" />
//             <span className="text-sm text-muted-foreground">
//               Time Required for this School:
//             </span>
//             <span className="text-sm font-semibold">{timeRequired}</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <span className="h-2 w-2 rounded-full bg-blue-600" />
//             <span className="text-sm text-muted-foreground">
//               Required time remaining:
//             </span>
//             <span className="text-sm font-semibold">{timeRemaining}</span>
//           </div>
//         </div>

//         <Badge className="rounded-full bg-red-500 hover:bg-red-500 text-white px-3 py-1">
//           FREE TRIAL
//         </Badge>
//       </div>

//       {/* Audio row */}
//       <div className="mt-6 rounded-2xl border bg-white">
//         <div className="grid gap-4 p-4 md:grid-cols-[1fr_auto] md:items-center">
//           {/* Left: promo block */}
//           <div className="flex items-center gap-4">
//             <div className="relative grid h-14 w-14 place-items-center rounded-full bg-slate-900 text-white">
//               <Volume2 className="h-6 w-6" />
//               <span className="absolute -top-2 -right-2 rounded-md bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white shadow">
//                 NEW!
//               </span>
//             </div>
//             <div>
//               <div className="text-lg font-bold">{audioTitle}</div>
//               <div className="mt-1 flex items-center gap-2 text-sm">
//                 <Lock className="h-3.5 w-3.5" />
//                 <span className="font-medium">Audio Read Along!</span>
//                 <button className="underline text-blue-600">Upgrade Now!</button>
//               </div>
//             </div>
//           </div>

//           {/* Right: helper text */}
//           <div className="text-sm text-muted-foreground md:text-right">
//             <span role="img" aria-label="point"></span> Click the play button!
//           </div>
//         </div>

//         {/* Player controls */}
//         <div className="border-t px-4 py-4">
//           <div className="flex items-center gap-4">
//             {/* Controls cluster – exact small circular buttons */}
//             <div className="flex items-center gap-2">
//               <Button variant="outline" className="size-9 rounded-full p-0">
//                 <SkipBack className="h-4 w-4" />
//               </Button>
//               <Button variant="outline" className="size-9 rounded-full p-0">
//                 <SkipBack className="h-4 w-4 -scale-x-100" />
//               </Button>
//               <Button
//                 onClick={() => setIsPlaying(v => !v)}
//                 className="size-10 rounded-full p-0 bg-blue-600 hover:bg-blue-700"
//               >
//                 {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-[1px]" />}
//               </Button>
//               <Button variant="outline" className="size-9 rounded-full p-0">
//                 <SkipForward className="h-4 w-4" />
//               </Button>
//             </div>

//             {/* Timeline */}
//             <div className="flex-1 flex items-center gap-3">
//               <span className="w-12 text-xs tabular-nums">{audioCurrentTime}</span>

//               {/* custom bar that matches screenshot: tiny red lead-in + grey rail + small thumb */}
//               <div className="relative h-2 w-full rounded-full bg-slate-200">
//                 {/* red “played” */}
//                 <div
//                   className="absolute left-0 top-0 h-2 rounded-full bg-red-500"
//                   style={{ width: `${Math.max(6, pctAudio)}%` }}
//                 />
//                 {/* thumb */}
//                 <div
//                   className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border border-slate-300 bg-white shadow"
//                   style={{ left: `calc(${pctAudio}% - 6px)` }}
//                 />
//               </div>

//               <span className="w-12 text-xs tabular-nums text-muted-foreground">{audioDuration}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }



















import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  ZoomIn,
  ZoomOut,
  Lock,
  Clock,
  RotateCcw,
} from "lucide-react";
import { useMemo, useState } from "react";

interface LessonHeaderProps {
  userName?: string;
  userAvatar?: string;
  currentChapter?: number;
  currentPage?: number;
  totalPages?: number;
  progress?: number; // 0–100
  timeRequired?: string;
  timeRemaining?: string;
  audioTitle?: string;
  audioCurrentTime?: string; // "mm:ss"
  audioDuration?: string; // "mm:ss"
}

export function LessonHeader({
  userName = "Yasmine",
  userAvatar,
  currentChapter = 1,
  currentPage = 2,
  totalPages = 2,
  progress = 5,
  timeRequired = "6 Hours",
  timeRemaining = "05:52:42",
  audioTitle = "Get Started Today!",
  audioCurrentTime = "01:50",
  audioDuration = "02:15",
}: LessonHeaderProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const pctAudio = useMemo(() => {
    const toSec = (s: string) => {
      const [m, sec] = s.split(":").map(Number);
      return m * 60 + sec;
    };
    try {
      const a = toSec(audioCurrentTime);
      const b = toSec(audioDuration);
      if (!b) return 0;
      return Math.min(100, Math.max(0, (a / b) * 100));
    } catch {
      return 0;
    }
  }, [audioCurrentTime, audioDuration]);

  return (
    <Card className="rounded-[14px] border border-[#e8eff9] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
      {/* Row 1: Avatar + Name (left) | Zoom buttons (right) */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback>{userName?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl sm:text-3xl md:text-4xl leading-none tracking-tight text-[#154393]">
            {userName}
          </h1>
        </div>

        <div className="flex flex-wrap gap-3 sm:flex-nowrap sm:justify-end w-full sm:w-auto">
          <Button
            variant="outline"
            className="h-9 sm:h-10 rounded-xl border-[#2c65c8] text-[#154393] px-3 sm:px-4 text-sm sm:text-base"
          >
            <ZoomIn className="mr-2 h-4 w-4" />
            Enlarge text
          </Button>
          <Button
            variant="outline"
            className="h-9 sm:h-10 rounded-xl border-[#2c65c8] text-[#154393] px-3 sm:px-4 text-sm sm:text-base"
          >
            <ZoomOut className="mr-2 h-4 w-4" />
            Shrink text
          </Button>
        </div>
      </div>

      {/* Row 2: Two small status cards under the name */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Currently On + Progress */}
        <div className="rounded-xl border border-[#e6eefb] p-4">
          <div className="flex items-start gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-full border border-[#d5e5ff] bg-[#f4f9ff] text-[#2c65c8]">
              <span className="text-[12px]">🌀</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm">
                <span className="text-muted-foreground">Currently On:&nbsp;</span>
                <span className="font-medium">
                  Chapter {currentChapter} Page: {currentPage} of {totalPages}
                </span>
              </div>

              <div className="mt-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="mt-2 text-sm text-muted-foreground sm:mt-0">
                  Progress:
                </div>
                <div className="relative h-3 w-full max-w-[240px] overflow-hidden rounded-full bg-zinc-200">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-[#154393]/80"
                    style={{ width: `${Math.max(2, progress)}%` }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold">
                    <span
                      className={(progress ?? 0) >= 25 ? "text-white" : "text-[#154393]"}
                    >
                      {progress}%
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Time Required + Remaining */}
        <div className="rounded-xl border border-[#e6eefb] p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#2c65c8]" />
              <div className="text-sm text-muted-foreground">
                Time Required for this School:
                <div className="text-base font-semibold text-foreground">
                  {timeRequired}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#2c65c8]" />
              <div className="text-sm text-muted-foreground">
                Required time remaining:
                <div className="text-base font-semibold text-foreground">
                  {timeRemaining}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Big white container (row 3) */}
      <div className="mt-6 rounded-[12px] border border-[#eef3fb] bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        {/* Header bar inside container: hint (left/center) + FREE TRIAL (right) */}
        <div className="relative mb-3 flex items-center justify-center">
          <div className="text-md text-foreground font-bold">
            Click the play button!
          </div>
          {/* hide right-aligned badge on small screens to avoid overlap */}
          <div className="absolute right-0 top-0 hidden sm:block">
            <Badge className="rounded-full bg-[#f34e4e] px-3 py-1 text-white hover:bg-[#f34e4e]">
              FREE TRIAL
            </Badge>
          </div>
        </div>
        {/* centered badge for small screens */}
        <div className="mb-3 flex justify-center sm:hidden">
          <Badge className="rounded-full bg-[#f34e4e] px-3 py-1 text-white hover:bg-[#f34e4e]">
            FREE TRIAL
          </Badge>
        </div>

        {/* Two cards side-by-side exactly like the screenshot */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left promo card */}
          <div className="rounded-xl border border-[#dbe9ff] p-4">
            <div className="flex items-center gap-4">
              {/* Speaker graphic */}
              <div className="grid h-14 w-14 sm:h-[72px] sm:w-[72px] place-items-center rounded-full bg-white shadow-[inset_0_0_0_2px_#d7d7d7]">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-[inset_0_0_0_8px_#c4c4c4]" />
                <div className="absolute h-2 w-2 rounded-full bg-[#9b9b9b]" />
              </div>

              <div className="flex-1">
                <div className="text-xl sm:text-2xl font-bold text-[#154393]">
                  {audioTitle}
                </div>

                <div className="mt-2 flex flex-wrap items-start gap-3">
                  <span className="rounded-md bg-[#ff4d4f] px-2 py-[2px] text-[10px] font-extrabold text-white">
                    NEW!
                  </span>

                  <div className="mt-1 flex items-start gap-2 text-sm">
                    <Lock className="mt-[2px] h-3.5 w-3.5 text-[#154393]" />
                    <div className="flex flex-col leading-tight">
                      <span className="font-medium text-[#154393]">
                        Audio Read Along!
                      </span>
                      <button className="self-start text-xs text-[#0b63e5] underline">
                        Upgrade Now!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right player card */}
          <div className="rounded-xl border border-[#dbe9ff] p-4">
            <div className="mb-2 flex w-full items-center justify-center gap-3">
              <Button variant="outline" className="h-9 w-9 rounded-full p-0">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-9 w-9 rounded-full p-0">
                <SkipBack className="h-4 w-4 -scale-x-100" />
              </Button>
              <Button
                onClick={() => setIsPlaying((v) => !v)}
                className="h-10 w-10 rounded-full bg-[#154393] p-0 hover:bg-[#113877]"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-[1px]" />}
              </Button>
              <Button variant="outline" className="h-9 w-9 rounded-full p-0">
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>

            <div className="ml-0 sm:ml-3 mr-0 flex-1">
              <div className="relative h-2 w-full rounded-full bg-[#d9d9d9]">
                <div
                  className="absolute left-0 top-0 h-2 rounded-full bg-[#ff5a5a]"
                  style={{ width: `${Math.max(8, pctAudio)}%` }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-[10px] w-[10px] rounded-full border border-[#d0d0d0] bg-white shadow"
                  style={{ left: `calc(${pctAudio}% - 6px)` }}
                />
              </div>
            </div>

            {/* Time row under rail */}
            <div className="mt-2 flex flex-col items-center justify-between gap-2 text-xs text-[#666] sm:flex-row">
              <div className="flex items-center gap-2">
                <span className="tabular-nums">{audioCurrentTime}</span>
                <RotateCcw className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="h-4 w-4" />
                <span className="tabular-nums">{audioDuration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>

  );
}
