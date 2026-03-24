"use client";
import { useState } from "react";
import { NIGHT_PLANS, type PlanMode, type PlanStep } from "../data";

const PLAN_MODES: { key: PlanMode; label: string }[] = [
  { key: "party", label: "🎉 Party Night" },
  { key: "chill", label: "🌴 Chill Night" },
  { key: "romantic", label: "💑 Romantic" },
  { key: "budget", label: "💰 Budget Night" },
];

function PlanAd() {
  return (
    <div className="pln-ad">
      <span className="pln-ad-lbl">Sponsored</span>
      <div className="pln-ad-body">
        <div className="pln-ad-name">Need a hotel tonight? Gran Marquise — Meireles</div>
        <div className="pln-ad-sub">Last 3 rooms · From R$520/night · Free breakfast</div>
      </div>
      <button className="pln-ad-btn">Book →</button>
    </div>
  );
}

function PlanStepRow({ step }: { step: Exclude<PlanStep, "ad"> }) {
  return (
    <div className="pln-step">
      <div className="pln-icon">{step.icon}</div>
      <div className="pln-body">
        <div className="pln-time">{step.time}</div>
        <div className="pln-name">{step.name}</div>
        <div className="pln-meta">{step.meta}</div>
        <div className="pln-taxi">{step.taxi}</div>
      </div>
      {step.fomo && <div className="pln-fomo">{step.fomo}</div>}
    </div>
  );
}

export default function PlanMyNight() {
  const [mode, setMode] = useState<PlanMode>("party");
  const steps = NIGHT_PLANS[mode];

  return (
    <section className="sec pln-sec" id="plan-my-night">
      <div className="pln-inner">
        <div>
          <div className="pln-ey">⚡ One-Click Planner</div>
          <h2 className="pln-title">Plan My Perfect Night in Fortaleza</h2>
          <p className="pln-sub">
            Pick your vibe — we plan the perfect evening. From happy hour drinks to the
            hottest party in town. No thinking required, just follow the plan.
          </p>
          <div className="pln-modes">
            {PLAN_MODES.map((m) => (
              <button
                key={m.key}
                className={`pln-btn${mode === m.key ? " active" : ""}`}
                onClick={() => setMode(m.key)}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pln-card">
          {steps.map((step, i) =>
            step === "ad" ? (
              <PlanAd key={`ad-${i}`} />
            ) : (
              <PlanStepRow key={i} step={step} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
