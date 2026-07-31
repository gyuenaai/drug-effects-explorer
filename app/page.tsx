"use client";
import { useMemo, useState } from "react";
import { drugs, Drug, categories, assessMix, getGenericInteraction } from "./data";

function dangerColor(danger: number): string {
  if (danger >= 5) return "var(--danger-extreme)";
  if (danger === 4) return "var(--danger-high)";
  if (danger === 3) return "var(--danger-mod)";
  return "var(--danger-low)";
}

function dangerLabel(danger: number): string {
  if (danger === 5) return "Very High Risk";
  if (danger === 4) return "High Risk";
  if (danger === 3) return "Moderate-High";
  if (danger === 2) return "Lower-Moderate";
  return "Lower (still risky)";
}

export default function Page() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return drugs.filter(d => {
      const matchCat = category === "All" || d.pharmacologyClass.some(c => c.toLowerCase() === category.toLowerCase()) || d.category.toLowerCase().includes(category.toLowerCase());
      if (!matchCat) return false;
      if (!q) return true;
      return (
        d.name.toLowerCase().includes(q) ||
        d.aliases.some(a => a.toLowerCase().includes(q)) ||
        d.category.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  const selectedDrugs = useMemo(() => selectedIds.map(id => drugs.find(d => d.id === id)!).filter(Boolean) as Drug[], [selectedIds]);

  const mix = useMemo(() => assessMix(selectedDrugs), [selectedDrugs]);

  function toggle(id: string) {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-mark">S</div>
            <div className="brand-title">Substance Effects Archive <span>18 substances · educational · harm-reduction focused</span></div>
          </div>
          <div className="header-meta">
            <span><strong>{drugs.length}</strong> profiles</span>
            <span>•</span>
            <span>Immediate + long-term effects</span>
            <span>•</span>
            <span style={{ color: "var(--accent)", fontWeight: 600 }}>Mix checker on side</span>
          </div>
        </div>
      </header>

      <div className="page-wrap">
        <main className="left-column">
          <div className="controls">
            <div className="controls-left">
              <input className="search-input" placeholder="Search weed, coke, benzo..." value={query} onChange={e => setQuery(e.target.value)} />
              <div className="filter-chips">
                {categories.map(cat => (
                  <button key={cat} className={`chip ${category === cat ? "active" : ""}`} onClick={() => setCategory(cat)}>{cat}</button>
                ))}
              </div>
            </div>
            <div className="selection-bar">
              {selectedIds.length > 0 && (
                <>
                  <div className="selection-count">{selectedIds.length} selected</div>
                  <button className="btn" onClick={() => setSelectedIds([])}>Clear</button>
                </>
              )}
              <div style={{ fontSize: 11.5, color: "var(--faint)" }}>{filtered.length} results</div>
            </div>
          </div>

          <div className="drug-grid">
            {filtered.map(drug => {
              const isSelected = selectedIds.includes(drug.id);
              return (
                <div key={drug.id} className={`drug-card ${isSelected ? "selected" : ""}`} onClick={() => toggle(drug.id)}>
                  <div className="card-top">
                    <div className="card-category">{drug.category}</div>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      <span className="danger-dot" style={{ background: dangerColor(drug.danger) }} title={dangerLabel(drug.danger)} />
                      <div className="card-check">{isSelected ? "✓" : ""}</div>
                    </div>
                  </div>
                  <h3 className="card-name" style={{ color: drug.color === "#000000" ? "#111" : undefined }}>{drug.name}</h3>
                  <div className="card-aliases">{drug.aliases.slice(0, 3).join(" · ")}</div>
                  <div className="card-desc">{drug.description}</div>
                  <div className="card-foot">
                    <div className="foot-left">
                      <div className="risk-meter" title={dangerLabel(drug.danger)}>
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className={`risk-block ${i <= drug.danger ? `filled danger-${drug.danger}` : ""}`} />
                        ))}
                      </div>
                      <span className="addiction-badge" title="Addiction potential">{drug.addictionPotential.split(" ")[0]} addiction</span>
                    </div>
                    <div style={{ fontSize: 11, color: "var(--faint)" }}>{drug.onset}</div>
                  </div>
                </div>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <div style={{ marginTop: 24, padding: 18, border: "1px dashed var(--line)", borderRadius: 12, background: "#fff" }}>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 13.5 }}>No substances match. Try clearing search or selecting All categories.</p>
            </div>
          )}
        </main>

        <aside className="side-column">
          <div className="side-sticky">
            {selectedDrugs.length === 0 ? (
              <div className="side-empty">
                <div className="kicker">How to use</div>
                <h3>Select a drug to see how it affects a human</h3>
                <p>Click any card on the left. You can select multiple substances — the panel will switch to a mixing analysis that highlights dangerous combinations.</p>
                <p style={{ marginTop: 8 }}><strong>Each profile includes:</strong> benefits (medical, where evidence exists), immediate effects, short-term risks, long-term effects & risks, brain/heart/body/mind breakdown, overdose signs, withdrawal.</p>
                <div className="hr-box" style={{ marginTop: 14 }}>
                  <strong>Educational purpose only</strong>
                  <p>This is a harm-reduction archive, not medical advice. Data is simplified; individual response varies. If someone experiences overdose signs, call emergency services. In US, 988 for crisis.</p>
                </div>
                <div className="disclaimer">
                  <strong>Data disclaimer:</strong> Profiles are distilled from public health resources (NIDA, CDC, FDA, EMA). Not comprehensive. Do not use to calculate dose. No safe dose for illicit fentanyl exists. Excludes common OTC analgesics per scope (no Aspirin/Tylenol).
                </div>
              </div>
            ) : selectedDrugs.length === 1 ? (
              <SingleView drug={selectedDrugs[0]} onRemove={() => setSelectedIds([])} />
            ) : (
              <MixView selected={selectedDrugs} mix={mix} onClear={() => setSelectedIds([])} onRemove={(id: string) => setSelectedIds(p => p.filter(x => x !== id))} />
            )}
          </div>
        </aside>
      </div>
    </>
  );
}

function SingleView({ drug, onRemove }: { drug: Drug, onRemove: () => void }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <div className="kicker">Single substance profile</div>
        <button className="btn" onClick={onRemove}>Clear</button>
      </div>
      <div className="detail-header">
        <h2 className="detail-title"><span className="danger-dot" style={{ width: 10, height: 10, background: dangerColor(drug.danger) }} /> {drug.name}</h2>
        <div className="detail-subtitle">{drug.aliases.join(" · ")} — {drug.category} · {drug.legal}</div>
        <div className="meta-grid">
          <div className="meta-item"><div className="meta-label">Onset</div><div className="meta-value">{drug.onset}</div></div>
          <div className="meta-item"><div className="meta-label">Duration</div><div className="meta-value">{drug.duration}</div></div>
          <div className="meta-item"><div className="meta-label">Half-life</div><div className="meta-value">{drug.halfLife}</div></div>
          <div className="meta-item"><div className="meta-label">Addiction</div><div className="meta-value">{drug.addictionPotential}</div></div>
        </div>
        <div style={{ marginTop: 10, display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "var(--faint)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Risk level:</span>
          <div className="risk-meter">{[1,2,3,4,5].map(i => <div key={i} className={`risk-block ${i<=drug.danger?`filled danger-${drug.danger}`:""}`} />)}</div>
          <span style={{ fontSize: 12, color: "var(--muted)" }}>{dangerLabel(drug.danger)}</span>
        </div>
      </div>

      <div className="section">
        <div className="section-title"><span className="dot" /> What it does</div>
        <p style={{ fontSize: 13.5, lineHeight: 1.5, color: "#252c33", margin: 0 }}>{drug.description}</p>
      </div>

      <div className="section">
        <div className="section-title"><span className="dot" style={{ background: "var(--danger-low)" }} /> Potential benefits (medical context & perceived)</div>
        <ul className="list">{drug.benefits.map((b,i)=><li key={i}>{b}</li>)}</ul>
      </div>

      <div className="two-col">
        <div className="section">
          <div className="section-title"><span className="dot" /> Immediate effects</div>
          <ul className="list">{drug.immediateEffects.map((e,i)=><li key={i}>{e}</li>)}</ul>
        </div>
        <div className="section">
          <div className="section-title"><span className="dot" style={{ background: "var(--danger-high)" }} /> Short-term risks</div>
          <ul className="list">{drug.shortRisks.map((r,i)=><li key={i}>{r}</li>)}</ul>
        </div>
      </div>

      <div className="two-col">
        <div className="section">
          <div className="section-title"><span className="dot" style={{ background: "var(--muted)" }} /> Long-term effects</div>
          <ul className="list">{drug.longEffects.map((e,i)=><li key={i}>{e}</li>)}</ul>
        </div>
        <div className="section">
          <div className="section-title"><span className="dot" style={{ background: "var(--danger-extreme)" }} /> Long-term risks</div>
          <ul className="list">{drug.longRisks.map((r,i)=><li key={i}>{r}</li>)}</ul>
        </div>
      </div>

      <div className="section">
        <div className="section-title"><span className="dot" /> How it affects a human</div>
        <div style={{ display: "grid", gap: 8 }}>
          <div className="how-box"><div className="how-label">Brain</div><div className="how-text">{drug.brain}</div></div>
          <div className="how-box"><div className="how-label">Heart & Circulation</div><div className="how-text">{drug.heart}</div></div>
          <div className="how-box"><div className="how-label">Body</div><div className="how-text">{drug.body}</div></div>
          <div className="how-box"><div className="how-label">Mind & Mood</div><div className="how-text">{drug.mind}</div></div>
        </div>
      </div>

      <div className="two-col">
        <div className="how-box"><div className="how-label">Overdose Signs</div><div className="how-text"><ul style={{ margin: "6px 0 0 0", paddingLeft: 14 }}>{drug.overdoseSigns.map((s,i)=><li key={i} style={{ fontSize: 12.5, marginBottom: 4 }}>{s}</li>)}</ul></div></div>
        <div className="how-box"><div className="how-label">Withdrawal / After-effects</div><div className="how-text">{drug.withdrawal}</div></div>
      </div>

      <div className="hr-box"><strong>Harm reduction note</strong><p>There is no safe way to use illicit substances. If you use, have a sober person present, avoid mixing depressants, start low, test supply where tools exist (e.g., fentanyl strips but not foolproof), avoid driving, and keep rescue breathing / naloxone knowledge for opioid risk. Seek professional help for dependence.</p></div>

      <div className="disclaimer"><strong>Not medical advice.</strong> Profile aggregates public sources; talk to healthcare professional for personal decisions.</div>
    </div>
  );
}

function MixView({ selected, mix, onClear, onRemove }: { selected: Drug[], mix: ReturnType<typeof assessMix>, onClear: () => void, onRemove: (id:string)=>void }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div className="kicker">Mix analyzer — {selected.length} substances</div>
        <button className="btn" onClick={onClear}>Clear all</button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
        {selected.map(d => (
          <span key={d.id} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 8px", borderRadius: 999, border: "1px solid var(--line-strong)", background: "#fff", fontSize: 12.5 }}>
            <span className="danger-dot" style={{ background: dangerColor(d.danger) }} /> {d.name}
            <button onClick={() => onRemove(d.id)} style={{ border: 0, background: "transparent", cursor: "pointer", color: "var(--faint)", fontSize: 12 }}>✕</button>
          </span>
        ))}
      </div>

      <div className={`mix-banner ${mix.level}`}>
        <div className="mix-level">Overall: {mix.level.toUpperCase()} {mix.level==="extreme"?"— AVOID":"— risky combination"}</div>
        <div className="mix-summary">{mix.summary}</div>
      </div>

      <div className="section">
        <div className="section-title"><span className="dot" style={{ background: dangerColor(5) }} /> Pairwise interactions ({mix.interactions.length}) — worst first</div>
        {mix.interactions.map((inter, idx) => (
          <div key={idx} className="interaction-card">
            <div className="interaction-head">
              <div className="interaction-pair">{inter.pair.map(id => drugs.find(d=>d.id===id)?.name || id).join(" + ")}</div>
              <div className={`level-badge ${inter.level}`}>{inter.level}</div>
            </div>
            <div className="interaction-title">{inter.title}</div>
            <div className="interaction-desc">{inter.description}</div>
            <div className="interaction-mech">Mechanism: {inter.mechanism}</div>
          </div>
        ))}
      </div>

      <div className="section">
        <div className="section-title"><span className="dot" /> Combined human impact (aggregated)</div>
        <div style={{ display: "grid", gap: 8 }}>
          <div className="how-box"><div className="how-label">Brain</div><div className="how-text">{selected.map(d=>d.brain).join(" ")} Combined, the load on neurotransmitters multiplies unpredictability.</div></div>
          <div className="how-box"><div className="how-label">Heart</div><div className="how-text">{selected.map(d=>d.heart).join(" ")} Stacked together heart strain is at least additive, often synergistic.</div></div>
          <div className="how-box"><div className="how-label">Body & Safety</div><div className="how-text">{selected.slice(0,3).map(d=>d.body).join(" ")} With multiple substances, vomiting, falls, choking risk increases sharply, especially if sedated and dissociated.</div></div>
        </div>
      </div>

      <div className="section">
        <div className="section-title"><span className="dot" /> All selected — quick effects list</div>
        {selected.map(d => (
          <div key={d.id} style={{ border: "1px solid var(--line)", borderRadius: 10, background: "#fff", padding: "10px 12px", marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <strong style={{ fontFamily: "Newsreader", fontSize: 14 }}>{d.name}</strong>
              <span style={{ fontSize: 11, color: "var(--muted)" }}>{d.category} · {dangerLabel(d.danger)}</span>
            </div>
            <div style={{ fontSize: 12.5, color: "#2c343e", marginTop: 4, lineHeight: 1.4 }}>{d.description.slice(0, 130)}...</div>
          </div>
        ))}
      </div>

      <div className="hr-box"><strong>Harm reduction for mixes</strong><p>Mixing increases unpredictability more than sum of parts. Avoid depressant + depressant, stimulant + stimulant. If mixed, a sober watcher, no driving, recovery position knowledge, naloxone for any opioid risk, stay cool and hydrated, and call emergency if slow/irregular breathing, chest pain, extreme heat, or unresponsiveness. There is zero safe dose for illicit fentanyl mixes.</p></div>

      <div className="disclaimer"><strong>Emergency:</strong> If someone collapses, cannot be woken, breathing slowly or not, blue lips, hot and agitated — call emergency services immediately. Put on side if breathing, do not leave alone.</div>
    </div>
  );
}
