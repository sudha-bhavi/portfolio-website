import { Arrow, Box, DiagramFrame, Label } from "./parts";

// A simplified, high-level view of SYNC. It only restates what the case study already says,
// because employer details stay at a high level.
export default function BridgeSyncDiagram() {
  return (
    <DiagramFrame
      viewBox="0 0 960 345"
      title="Bridge SYNC overview"
      desc="Home medical devices send readings to SYNC microservices running on Azure App Service. The services store data in SQL Server and feed a React care team app with transmission tracking, reading history, customizable alerts and device inventory. The whole platform is multi-tenant and built for HIPAA."
      caption="Simplified overview. Employer details are kept at a high level."
    >
      <Box x={20} y={120} w={150} h={76} title="Patient devices" sub={["home-based care,", "real-time readings"]} tone="amber" />

      {/* SYNC services */}
      <rect x={210} y={36} width={400} height={248} rx={18} strokeWidth={1.5} strokeDasharray="6 6"
        className="fill-blue-500/[0.04] stroke-blue-400/50" />
      <text x={230} y={60} className="fill-blue-200 font-semibold" style={{ fontSize: 13 }}>SYNC microservices</text>
      <Label x={230} y={76} anchor="start">.NET Core on Azure App Service</Label>
      <Box x={240} y={90} w={340} h={54} title="Device readings" sub={["transmission tracking and reading history"]} tone="blue" />
      <Box x={240} y={154} w={340} h={54} title="Patient messaging" tone="blue" />
      <Box x={240} y={218} w={340} h={54} title="Care team alerts" sub={["thresholds the clinic can tune"]} tone="blue" />

      {/* Data and care team */}
      <Box x={650} y={48} w={290} h={76} title="SQL Server" sub={["readings and messaging data"]} />
      <Box x={650} y={160} w={290} h={112} title="Care team app (React JS)"
        sub={["is each device transmitting?", "historical reading plots", "custom alerts · device inventory"]} tone="green" />

      <Arrow tone="amber" d="M170 158 H190 V117 H240" />
      <Arrow tone="blue" d="M610 100 H630 V86 H650" />
      <Arrow tone="green" d="M610 220 H630 V216 H650" />

      {/* Platform-wide concerns */}
      <rect x={20} y={302} width={920} height={34} rx={10} strokeWidth={1.2}
        className="fill-slate-900 stroke-slate-700" />
      <Label x={480} y={324} className="fill-slate-300">
        Multi-tenant platform · HIPAA: tenant separation and access control shaped the design
      </Label>
    </DiagramFrame>
  );
}
