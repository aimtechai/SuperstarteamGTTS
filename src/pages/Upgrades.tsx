import React, { useState } from "react";

import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ProgressSection } from "@/components/dashboard/ProgressSection";
import { Welcome } from "@/components/dashboard/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Styles.css";

interface Upgrade {
  id: string;
  title: string;
  description: string;
  price: string;
  checked?: boolean;
} 

const initialUpgrades: Upgrade[] = [  
  { 
    id: "printed",
    title: "Printed Certificate",
    description: "Receive a physical copy of your completion certificate via mail.",
    price: "$9.99",
    checked: true,
  },
  {
    id: "extension",
    title: "30-Day Extension",
    description: "Get 30 extra days to complete your course if needed.",
    price: "$14.99",
    checked: true,
  },
  {
    id: "video",
    title: "Video Course Add-On",
    description: "Access full video lessons instead of text-only format",
    price: "$19.99",
    checked: true,
  },
  {
    id: "court",
    title: "Court Submission Service",
    description: "We'll submit your certificate directly to the court for you.",
    price: "$12.49",
    checked: false,
  },
];

const PricePill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-foreground bg-primary/10" style={{ backgroundColor: "#cdf3fc" }}>
    {children}
  </span>
);

const UpgradesPage: React.FC = () => {
  const [upgrades, setUpgrades] = useState(initialUpgrades);

  const toggle = (id: string) =>
    setUpgrades((prev) => prev.map((u) => (u.id === id ? { ...u, checked: !u.checked } : u)));

  return (
    <>
      <SEO title="Course Syllabus – Upgrades" description="Choose optional course upgrades and proceed to payment." />
      <Welcome />
      <ProgressSection />
      {/* Header + progress */}
      {/* <header className="rounded-xl border bg-card p-4 shadow-sm mt-6">
        <h1 className="text-2xl font-semibold text-foreground">Course Syllabus</h1>
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
          Course Syllabus
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

      {/* Upgrade grid */}
      {/* <section className="mt-6 grid gap-4 sm:grid-cols-2">
        {upgrades.map((u) => (
          <div key={u.id} className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <Checkbox checked={u.checked} onCheckedChange={() => toggle(u.id)} className="mt-0.5" aria-label={`Toggle ${u.title}`} style={{marginTop: "12px", marginLeft: "12px", height: "30px", width: "30px", background: "linear-gradient(90deg, #36DFF1 0%, #2764E7 100%)"}} />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">{u.title}</h3>
                <p className="mt-1 text-sm text-foreground">{u.description}</p>
                <div className="mt-3">
                  <PricePill>{u.price}</PricePill>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section> */}
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        {upgrades.map((u) => (
          <div key={u.id} className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <Checkbox
                checked={u.checked}
                onCheckedChange={() => toggle(u.id)}
                aria-label={`Toggle ${u.title}`}
                className={`ml-3 mt-3 h-[30px] w-[30px] transition-all
                  ${u.checked ? 'border-0' : 'bg-white border-3 border-[#2764E7]'}`}
                style={
                  u.checked
                    ? { background: 'linear-gradient(90deg, #36DFF1 0%, #2764E7 100%)' }
                    : undefined
                }
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">{u.title}</h3>
                <p className="mt-1 text-sm text-foreground">{u.description}</p>
                <div className="mt-3">
                  <PricePill>{u.price}</PricePill>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="mt-8 flex justify-end">
        <Button variant="pillPrimary" size="lg">Proceed to Payment</Button>
      </div>
    </>
  );
};

export default UpgradesPage;

