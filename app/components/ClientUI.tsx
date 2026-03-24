"use client";
import { useState, useEffect } from "react";

export function StickyCTA() {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <button
      className={`scta${expanded ? " exp" : ""}`}
      onClick={() => {
        if (!expanded) { setExpanded(true); return; }
        document.getElementById("plan-my-night")?.scrollIntoView({ behavior: "smooth" });
      }}
      aria-label="Plan My Night"
    >
      {expanded ? "🍹 Plan My Night!" : "🍹"}
    </button>
  );
}

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("fs_cookie")) {
      const t = setTimeout(() => setShow(true), 2500);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => { localStorage.setItem("fs_cookie", "accepted"); setShow(false); };
  const reject = () => { localStorage.setItem("fs_cookie", "rejected"); setShow(false); };

  return (
    <div className={`ck${show ? " show" : ""}`} role="dialog" aria-label="Cookie consent">
      <div className="cki">🍪</div>
      <div className="ckt">
        <strong>We use cookies to improve your experience</strong>
        <p>
          We use cookies for analytics, personalised content and ads. See our{" "}
          <a href="/cookies">Cookie Policy</a> for details. You can manage preferences anytime.
        </p>
      </div>
      <div className="ckaw">
        <button className="ckacc" onClick={accept}>Accept All</button>
        <button className="ckmgr" onClick={reject}>Manage</button>
        <button className="ckrej" onClick={reject}>Reject non-essential</button>
      </div>
    </div>
  );
}
