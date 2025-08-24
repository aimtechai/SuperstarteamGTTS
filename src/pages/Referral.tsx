import React from "react";
import { SEO } from "@/components/SEO";
import { Welcome } from "@/components/dashboard/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { ProgressSection } from "@/components/dashboard/ProgressSection";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Styles.css";

const REFERRAL_CODE = "XAB-KMA-D63";

const Referral: React.FC = () => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(REFERRAL_CODE);
      toast.success("Referral code copied");
    } catch {
      toast.error("Unable to copy code");
    }
  };

  const handleShare = async () => {
    const message = `Use my referral code ${REFERRAL_CODE} to get $1.00 off!`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "Referral Program", text: message });
        return;
      } catch {
        /* ignore */
      }
    }
    try {
      await navigator.clipboard.writeText(message);
      toast.success("Share message copied");
    } catch {
      toast.error("Unable to copy share message");
    }
  };

  return (
    <>
      <SEO title="Referral Program – Earn $2 per referral" description="Invite friends: they get $1 off; you earn $2 when they complete. Share your referral code XAB-KMA-D63." />
      <Welcome />
      <ProgressSection />
      {/* Header + progress */}
      {/* <header className="rounded-xl border bg-card p-4 shadow-sm mt-6">
        <h1 className="text-2xl font-semibold text-foreground">Referral Program</h1>
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
      </header> */}

      <header>
        {/* <h1 className="text-2xl font-semibold text-foreground">Course Syllabus</h1>
         */}
        <h1 className="mb-4 mt-4 rounded-xl px-4 py-2 text-3xl font-semibold" style={{ borderRadius: "16px", borderWidth: "1px", borderColor: "#154393", color: "#154393" }}>
          Referral Program
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

      {/* Steps */}
      <nav aria-label="Steps" className="mt-6 grid grid-cols-2 sm:grid-cols-4">
        {[
          { n: 1, label: "How it Works" },
          { n: 2, label: "See your Referrals" },
          { n: 3, label: "Market to Your Friends" },
          { n: 4, label: "Personal Details" },
        ].map((s) => (
          // <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-foreground">
          //   <div className="inline-flex items-center gap-2">
          //     <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-[#B4D5F1] text-lg">1</span>
          //     <span style={{ fontSize: "18px" }}>Personal Details</span>
          //   </div>
          //   <div className="inline-flex items-center gap-2">
          //     <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-[#B4D5F1] text-lg">2</span>
          //     <span style={{ fontSize: "18px" }}>Court Information</span>
          //   </div>
          //   <div className="inline-flex items-center gap-2">
          //     <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-[#B4D5F1] text-lg">3</span>
          //     <span style={{ fontSize: "18px" }}>Complete</span>
          //   </div>
          // </div>

          <div key={s.n} className="flex items-center gap-2 rounded-xl p-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-semibold bg-primary/10" style={{ color: "#154393", backgroundColor: "#E7F4FF" }}>
              {s.n}
            </div>
            <div className="text-md font-medium text-foreground" style={{ fontSize: "18px" }}>{s.label}</div>
          </div>
        ))}
      </nav>

      {/* How it Works + Code */}
      <section className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left: How it Works */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
          <h1
            className="rounded-md px-3 py-1 text-3xl font-semibold"
            style={{
              color: "#154393",
              backgroundColor: "#E7F4FF",
              display: "inline-block",
              width: "fit-content",
            }}
          >
            How it Works
          </h1>
          </CardHeader>
          <CardContent className="text-base leading-relaxed" style={{ color: "#004985" }}>
            <p>
              Share your unique referral code with friends and they’ll get a{" "}
              <strong>$1.00 discount</strong> off our already low price. For every one of your referrals
              who pays for and completes our course, you’ll get a{" "}
              <strong>$2.00 deposit</strong> into your <em>account</em>!
            </p>
          </CardContent>
        </Card>

        {/* Right: Referral Code */}
        <Card className="h-full border-0 shadow-none bg-transparent">
          <CardContent className="h-full p-0 flex items-center">
            {/* Blue pill w/ dashed border & centered code */}
            <div
              className="mx-auto w-full rounded-lg p-2 bg-gradient-to-r"
              style={{
                borderColor: "#AAAAAA",
                borderStyle: "dashed",
                borderWidth: "1px",
                backgroundImage: "linear-gradient(90deg, #FFFFFF 0%, #80C7FF 100%)",
              }}
            >
              <div className="text-center text-md font-medium text-muted-foreground">
                Referral Code
              </div>

              {/* Center code with copy on the right */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center">
                <span
                  className="col-start-2 text-3xl font-extrabold tracking-wide"
                  style={{ color: "#333333" }}
                >
                  {REFERRAL_CODE}
                </span>

                <Button
                  variant="ghost"
                  size="icon"
                  className="justify-self-end"
                  aria-label="Copy referral code"
                  onClick={handleCopy}
                  title="Copy"
                >
                  <Copy className="h-6 w-6" style={{ height: "24px", width: "24px", color: "#0D99FF" }} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>


      {/* Getting Started */}
      <section className="mt-6">
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            {/* <span className="inline-block rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Getting Started</span> */}
            {/* <h1 className="inline-block rounded-md bg-primary/10 px-3 py-1 font-semibold text-primary text-3xl" style={{ color: "#154393", backgroundColor: "#E7F4FF" }}>Getting Started</h1> */}
            <h1
              className="rounded-md px-3 py-1 text-3xl font-semibold"
              style={{
                color: "#154393",
                backgroundColor: "#E7F4FF",
                display: "inline-block",
                width: "fit-content",
              }}
            >
              Getting Started
            </h1>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal space-y-3 pl-6 text-base" style={{color: "#004985"}}>
              <li>
                When you registered, you were assigned a unique referral code: <strong>{REFERRAL_CODE}</strong>
              </li>
              <li>
                When Someone uses your code during online enrollment, he or she will get a <strong>$1.00</strong> off the course price.
              </li>
              <li>
                Once that person completes the course, you will be credited with a <strong>$2.00</strong> commission. There's no limit on how many people you can refer!
              </li>
              <li>
                Once you have at least 5 completed referrals in your account, you can cash out!
              </li>
            </ol>

            <div className="mt-8 text-center text-base font-bold" style={{color: "#004985"}}>
              So, What are you waiting for? Start spreading the news!
            </div>

            <div className="mt-4 flex justify-center">
              <Button size="lg" onClick={handleShare}>Market to My Friends Now!</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default Referral;

