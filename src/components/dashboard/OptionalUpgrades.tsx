import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const OptionalUpgrades = () => {
  return (
    <section className="mt-6" aria-labelledby="optional-upgrades-heading">
      <div
        id="optional-upgrades-heading"
        className="mb-3 inline-flex items-center border px-3 py-1 text-sm font-semibold shadow-sm" style={{ borderRadius: "10px", borderWidth: "1px", borderColor: "#154393", color: "#154393", fontSize: "18px", backgroundColor: "#E7F4FF" }}
      >
        Optional Upgrades
      </div>
      <Card className="border bg-background p-5 shadow-sm">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground" style={{ color: "#154393", fontSize: "22px", fontWeight: "bold" }}>FedEx.</h3>
          <p className="max-w-prose text-sm leading-relaxed text-muted-foreground" style={{ color: "#154393", fontSize: "16px", fontWeight: "bold" }}>
            Expedited Shipping? Get your certificate immediately, via FedEx delivery
          </p>
          <Button variant="pillPrimary" className="w-fit" style={{background:'#004985', borderRadius: 10, padding:'0 20px'}}>Upgrade</Button>
        </div>
      </Card>
    </section>
  );
};
