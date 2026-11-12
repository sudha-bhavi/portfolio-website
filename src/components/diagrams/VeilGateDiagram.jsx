import { Arrow, Box, DiagramFrame, Label } from "./parts";

// How a request moves through VeilGate. Every box comes from the case-study text above it.
export default function VeilGateDiagram() {
  return (
    <DiagramFrame
      viewBox="0 0 960 450"
      title="VeilGate architecture"
      desc="A clinical note containing PHI enters the VeilGate gateway. Inside the trust boundary, PHI is detected, a policy is applied and values are encrypted and swapped for tokens. Only masked text goes to the language model. The answer returns with tokens swapped back. The gateway also keeps a hash-chained audit log, uses PostgreSQL row-level security for tenant isolation, and publishes events through an outbox to Kafka."
      caption="Simplified request flow. The language model only ever sees masked text; the audit log and dashboard hold counts and ids, never text."
    >
      {/* Trust boundary */}
      <rect x={190} y={30} width={530} height={398} rx={18} strokeWidth={1.5} strokeDasharray="6 6"
        className="fill-blue-500/[0.04] stroke-blue-400/50" />
      <text x={208} y={56} className="fill-blue-200 font-semibold" style={{ fontSize: 13 }}>VeilGate gateway</text>
      <Label x={208} y={72} anchor="start">Trust boundary: only masked text goes out to the model</Label>

      {/* Outside the boundary */}
      <Box x={20} y={170} w={140} h={76} title="Clinic app" sub={["clinical note", "with PHI"]} tone="amber" />
      <Box x={752} y={170} w={188} h={76} title="Language model" sub={["sees masked text only"]} tone="green" />

      {/* Request pipeline */}
      <Box x={208} y={96} w={148} h={72} title="Detect" sub={["names, dates,", "IDs, phone numbers"]} tone="blue" />
      <Box x={376} y={96} w={148} h={72} title="Apply policy" sub={["redact · mask", "shift · tokenize"]} tone="blue" />
      <Box x={544} y={96} w={148} h={72} title="Tokenize" sub={["AES-256-GCM,", "per-tenant key"]} tone="blue" />

      {/* Supporting parts */}
      <Box x={208} y={196} w={316} h={74} title="Policy lifecycle"
        sub={["draft → validate → submit →", "approve (second person) → publish"]} />
      <Box x={544} y={196} w={148} h={74} title="Row-level security" sub={["tenant isolation", "inside PostgreSQL"]} />
      <Box x={208} y={292} w={232} h={74} title="Audit log" sub={["append-only, hash-chained", "ids and counts, never text"]} />
      <Box x={460} y={292} w={232} h={74} title="Outbox → Kafka"
        sub={["retries and dead-letter topic,", "idempotent consumer → dashboard"]} />

      {/* Request path */}
      <Arrow tone="amber" d="M160 208 H176 V132 H208" />
      <Arrow tone="blue" d="M356 132 H376" />
      <Arrow tone="blue" d="M524 132 H544" />
      <Arrow tone="green" d="M692 132 H736 V208 H752" />

      {/* Response path */}
      <Arrow tone="green" d="M846 246 V398 H90 V246" />
      <Label x={468} y={388}>answer returns, tokens swapped back to the real values</Label>

      {/* Links to supporting parts */}
      <Arrow dashed d="M450 168 V196" />
      <Arrow dashed d="M618 168 V196" />
      <Arrow dashed d="M366 270 V292" />
      <Arrow dashed d="M618 270 V292" />
    </DiagramFrame>
  );
}
