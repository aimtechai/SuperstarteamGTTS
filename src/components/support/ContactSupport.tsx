import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select";
import { toast } from "sonner";
import { CircleCheck, CircleDashed } from "lucide-react";

export const ContactSupport = () => {
  const [progress] = useState(50);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Simulate submit
    toast.success("Support request submitted");
    console.log("[ContactSupport] submit", Object.fromEntries(formData.entries()));
  };

  const [upgrades, setUpgrades] = useState([
    {
      id: 1,
      title: "I read and agree that all information are correct before clicking the SUBMIT.",
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
    <section className="mt-6" aria-labelledby="contact-support-heading">
      {/* <h1
        id="contact-support-heading"
        className="mb-4 rounded-xl border border-primary/30 px-4 py-2 text-2xl font-semibold text-foreground"
      >
        Contact Support
      </h1> */}

      {/* <h1 className="mb-4 rounded-xl border border-primary/30 px-4 py-2 text-3xl font-semibold text-foreground">
        Course Syllabus
      </h1> */}

      <header>
        {/* <h1 className="text-2xl font-semibold text-foreground">Course Syllabus</h1>
         */}
        <h1 className="mb-4 rounded-xl px-4 py-2 text-3xl font-semibold" style={{ borderRadius: "16px", borderWidth: "1px", borderColor: "#154393", color: "#154393" }}>
          Contact Support
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

      <div className="mt-4 mb-4 space-y-2">
        {/* <div className="relative">
          <Progress value={progress} className="h-3" />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-muted-foreground">
            {progress}%
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><CircleCheck className="h-3 w-3 text-primary"/> Complete</span>
          <span className="inline-flex items-center gap-1"><CircleDashed className="h-3 w-3"/> Incomplete</span>
        </div> */}
        <p className="text-base leading-relaxed text-muted-foreground">
          Please make sure all of the information on this form is filled out completely and correctly. You may change any of the below information before submitting this form.
        </p>
      </div>

      <Card className="border bg-background p-5 shadow-sm">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" className="mt-1" />
              <p className="mt-1 text-xs text-muted-foreground">Note: This input is locked by administrator. To avoid misuse of someone’s identity.</p>
            </div>
            <div>
              <Label htmlFor="phone">Telephone No.</Label>
              <Input id="phone" name="phone" placeholder="(555) 000-0000" className="mt-1" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" className="mt-1" />
          </div>

          <div>
            <Label>Type of Complaint:</Label>
            <div className="mt-1">
              <Select name="complaintType">
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Options</SelectLabel>
                    <SelectItem value="billing">Billing</SelectItem>
                    <SelectItem value="technical">Technical Issue</SelectItem>
                    <SelectItem value="course">Course Content</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Preferred Contact:</Label>
            <div className="mt-1">
              <Select name="preferredContact">
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Methods</SelectLabel>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="message">Complaint:</Label>
            <Textarea id="message" name="message" placeholder="Describe your issue..." className="mt-1" rows={6} />
            <p className="mt-1 text-base text-muted-foreground">Note: This input can contain 10,000 characters.</p>
          </div>

          <div className="space-y-3">
            {/* <label className="flex items-start gap-3 text-sm">
              <Checkbox name="agreeAccuracy" className="mt-0.5" />
              <span>I read and agree that all information are correct before clicking the SUBMIT.</span>
            </label>
            <label className="flex items-start gap-3 text-sm">
              <Checkbox name="agreeLegal" className="mt-0.5" />
              <span>
                I affirm that all information provided is true and accurate. I understand that providing false or fraudulent information may violate laws in the United States and Canada. If a court of law finds me in violation, I agree to accept full legal consequences, including possible criminal charges, fines, or imprisonment.
              </span>
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
                        ? { background: "linear-gradient(90deg, #36DFF1 0%, #2764E7 100%)" }
                        : undefined
                    }
                  />
                  <span className="text-base font-medium">{u.title}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            {/* <Button type="submit" variant="pillPrimary">Submit</Button> */}
            <Button variant="pill" size="lg" className="bg-primary text-white px-8">Submit</Button>
          </div>
        </form>
      </Card>
    </section>
  );
};
