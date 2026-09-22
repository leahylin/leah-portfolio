import { useState } from "react";

const API = import.meta.env.PUBLIC_API_URL ?? "";

export default function StoryGenerator() {
  const [prompt, setPrompt] = useState("");
  const [temperature, setTemperature] = useState(0.6);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    const text = prompt.trim();
    if (!text || loading) return;

    setLoading(true);
    setOutput("");
    setError("");

    if (!API) {
      setError("No model API configured. Set PUBLIC_API_URL once FastAPI is deployed.");
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60_000);

    try {
      const res = await fetch(`${API.replace(/\/$/, "")}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: text, max_tokens: 100, temperature }),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = await res.json();
      setOutput(data.text ?? "");
    } catch {
      setError("Could not reach the model API. Please try again.");
    } finally {
      clearTimeout(timeout);
      setLoading(false);
    }
  }

  return (
    <div className="demo">
      <p className="intro">
        Give the model a story beginning and see what it generates. Runs on the
        deployed checkpoint.
      </p>

      <label className="mono" htmlFor="prompt">Prompt</label>
      <textarea
        id="prompt"
        value={prompt}
        maxLength={500}
        placeholder="A robot found a mysterious door..."
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="temp">
        <span className="mono">Temperature</span>
        <input
          type="range"
          min={0.2}
          max={1.2}
          step={0.05}
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
        />
        <span className="value">{temperature.toFixed(2)}</span>
      </div>

      <button className="btn btn--solid" onClick={generate} disabled={loading || !prompt.trim()}>
        {loading ? "Generating…" : "Generate story"}
      </button>

      {error && <div className="error">{error}</div>}

      {output && (
        <div className="out">
          <div className="mono">Generated story</div>
          <div className="story">{output}</div>
        </div>
      )}
    </div>
  );
}
