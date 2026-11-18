import { useState } from "react";

const popularRoutes = [
  { from: "London", to: "Edinburgh", time: "4h 32m", price: "from £32", icon: "✦" },
  { from: "London", to: "Manchester", time: "2h 08m", price: "from £24", icon: "↗" },
  { from: "London", to: "Bath", time: "1h 22m", price: "from £18", icon: "☼" },
];

function TrainIcon() {
  return (
    <svg viewBox="0 0 96 48" className="h-12 w-24 drop-shadow-lg" fill="none" aria-hidden="true">
      <path d="M12 9c0-4 4-7 9-7h54c7 0 11 4 11 11v22H12V9Z" fill="#F4F7E8" />
      <path d="M19 8h18v13H19zM42 8h18v13H42zM65 8h15v13H65z" fill="#9FC5B0" />
      <path d="M12 27h74v8H12z" fill="#D9A95F" />
      <path d="M7 35h84v5H7z" fill="#E8ECDD" />
      <circle cx="27" cy="41" r="5" fill="#172F28" />
      <circle cx="70" cy="41" r="5" fill="#172F28" />
      <path d="M86 27h5v8h-5z" fill="#F2C674" />
    </svg>
  );
}

export default function App() {
  const [tripType, setTripType] = useState("Return");
  const [message, setMessage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
    setMessage("Your journey options are ready to explore.");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f3] text-[#20372e]">
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#" className="flex items-center gap-2.5 font-bold tracking-tight">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1f5944] text-xl text-white">↗</span>
          <span className="text-xl">trackline<span className="text-[#85a58b]">.</span></span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#66776d] md:flex">
          <a className="transition hover:text-[#1f5944]" href="#book">Book a trip</a>
          <a className="transition hover:text-[#1f5944]" href="#routes">Popular routes</a>
          <a className="transition hover:text-[#1f5944]" href="#about">Why Trackline</a>
        </nav>

        <a href="#book" className="hidden rounded-full bg-[#1f5944] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#174632] sm:inline-flex">
          Sign in <span className="ml-2">↗</span>
        </a>
        <button
          className="rounded-lg border border-[#dfe6dc] px-3 py-2 text-sm md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {menuOpen && (
        <nav className="relative z-20 grid gap-1 border-t border-[#e8ece5] bg-white px-5 py-3 text-sm md:hidden">
          <a className="rounded-lg px-3 py-2 hover:bg-[#f3f6f0]" href="#book" onClick={() => setMenuOpen(false)}>Book a trip</a>
          <a className="rounded-lg px-3 py-2 hover:bg-[#f3f6f0]" href="#routes" onClick={() => setMenuOpen(false)}>Popular routes</a>
          <a className="rounded-lg px-3 py-2 hover:bg-[#f3f6f0]" href="#about" onClick={() => setMenuOpen(false)}>Why Trackline</a>
        </nav>
      )}

      <section className="relative mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 sm:pt-14 lg:pb-20">
        <div className="absolute -right-36 -top-20 h-96 w-96 rounded-full bg-[#e6edda] blur-3xl" />
        <div className="absolute left-1/3 top-32 h-64 w-64 rounded-full bg-[#f5e9d2] opacity-60 blur-3xl" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dce7d9] bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#52735c] shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#78a77e]" />
              A better way to get there
            </div>
            <h1 className="font-[Manrope,sans-serif] text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-[#20372e] sm:text-6xl lg:text-7xl">
              The journey is
              <span className="block text-[#729778]">part of the</span>
              <span className="italic">destination.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#76847b] sm:text-lg">
              Find your next train, book in a few taps, and enjoy the ride. Big adventures start at the platform.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href="#book" className="rounded-full bg-[#1f5944] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1f5944]/15 transition hover:-translate-y-0.5 hover:bg-[#174632]">
                Plan your journey <span className="ml-3">→</span>
              </a>
              <span className="text-xs text-[#87948b]"><strong className="text-[#334b3d]">4.9/5</strong> from happy travellers</span>
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] bg-[#1c4939] p-6 text-white shadow-2xl shadow-[#274936]/15 sm:min-h-[380px] sm:p-9">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_5%,rgba(187,207,151,0.28),transparent_38%),linear-gradient(145deg,#245740,#173c31_72%)]" />
            <div className="absolute right-10 top-12 h-24 w-24 rounded-full bg-[#e8d29b] opacity-90 blur-[1px] sm:right-16 sm:top-14 sm:h-32 sm:w-32" />
            <div className="absolute right-0 top-0 h-full w-full opacity-20 [background-image:linear-gradient(30deg,transparent_49%,#d1e0c8_50%,transparent_51%),linear-gradient(120deg,transparent_49%,#d1e0c8_50%,transparent_51%)] [background-size:55px_48px]" />

            <div className="relative z-10 flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#b8d0b4]">YOUR NEXT ESCAPE</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Somewhere<br />wonderful.</p>
              </div>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] text-[#e2eadb] backdrop-blur">✦ Go further</span>
            </div>

            <div className="absolute inset-x-0 bottom-8 h-32 sm:bottom-10 sm:h-40">
              <div className="absolute inset-x-0 bottom-7 h-12 rounded-[50%] border-t-2 border-dashed border-[#c2d6ad]/70" />
              <div className="absolute inset-x-0 bottom-3 h-12 rounded-[50%] border-t border-[#afc7a6]/30" />
              <div className="train-motion absolute bottom-12 left-0">
                <TrainIcon />
              </div>
              <span className="absolute bottom-0 left-7 text-[9px] font-semibold tracking-[0.18em] text-[#c7d7c3]">LONDON</span>
              <span className="absolute bottom-0 right-7 text-[9px] font-semibold tracking-[0.18em] text-[#c7d7c3]">THE OPEN ROAD</span>
            </div>

            <div className="absolute bottom-5 right-5 z-10 rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md sm:bottom-7 sm:right-7">
              <p className="text-[9px] tracking-wide text-[#d0dfcf]">THE VIEW’S BETTER FROM HERE</p>
              <p className="mt-1 text-xs font-semibold">Take the scenic route <span className="ml-1 text-[#d9b66f]">✦</span></p>
            </div>
          </div>
        </div>

        <section id="book" className="relative z-10 mt-10 rounded-2xl border border-[#e9ede6] bg-white p-5 shadow-[0_20px_60px_-35px_rgba(30,65,43,0.25)] sm:mt-14 sm:p-7">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] text-[#8b9b8e]">LET’S GET YOU MOVING</p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight">Where to next?</h2>
            </div>
            <div className="flex rounded-full bg-[#f3f5f0] p-1 text-xs">
              {["Return", "One way"].map((type) => (
                <button
                  key={type}
                  onClick={() => setTripType(type)}
                  className={`rounded-full px-4 py-2 transition ${tripType === type ? "bg-white font-semibold text-[#315d43] shadow-sm" : "text-[#849188]"}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSearch} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_1fr_1fr_auto]">
            <label className="rounded-xl border border-[#e6ebe4] px-4 py-3">
              <span className="block text-[9px] font-bold tracking-widest text-[#9aa69c]">FROM</span>
              <input aria-label="Departure station" defaultValue="London Kings Cross" className="mt-1 w-full bg-transparent text-sm font-semibold text-[#34483b] outline-none" />
            </label>
            <label className="rounded-xl border border-[#e6ebe4] px-4 py-3">
              <span className="block text-[9px] font-bold tracking-widest text-[#9aa69c]">TO</span>
              <input aria-label="Arrival station" defaultValue="Edinburgh Waverley" className="mt-1 w-full bg-transparent text-sm font-semibold text-[#34483b] outline-none" />
            </label>
            <label className="rounded-xl border border-[#e6ebe4] px-4 py-3">
              <span className="block text-[9px] font-bold tracking-widest text-[#9aa69c]">DEPART</span>
              <input aria-label="Departure date" type="date" defaultValue="2026-11-18" className="mt-1 w-full bg-transparent text-sm font-semibold text-[#34483b] outline-none" />
            </label>
            {tripType === "Return" && (
              <label className="rounded-xl border border-[#e6ebe4] px-4 py-3">
                <span className="block text-[9px] font-bold tracking-widest text-[#9aa69c]">RETURN</span>
                <input aria-label="Return date" type="date" defaultValue="2026-11-21" className="mt-1 w-full bg-transparent text-sm font-semibold text-[#34483b] outline-none" />
              </label>
            )}
            <button type="submit" className="rounded-xl bg-[#1f5944] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#174632] active:scale-[0.98]">
              Find trains <span className="ml-2">→</span>
            </button>
          </form>
          {message && <p role="status" className="mt-3 text-sm text-[#39734e]">{message}</p>}
        </section>

        <section id="routes" className="relative z-10 mt-14 sm:mt-16">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] text-[#8b9b8e]">A GOOD PLACE TO START</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">Popular journeys</h2>
            </div>
            <a href="#book" className="text-xs font-semibold text-[#4c7957] hover:text-[#1f5944]">Explore all <span className="ml-1">→</span></a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {popularRoutes.map((route) => (
              <button
                key={route.to}
                onClick={() => {
                  document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
                  setMessage(`Ready to explore trains from ${route.from} to ${route.to}.`);
                }}
                className="group rounded-2xl border border-[#e8ece5] bg-white p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-[#cbdacb] hover:shadow-xl hover:shadow-[#294b35]/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f0f5ed] text-lg text-[#5b8966]">{route.icon}</span>
                  <span className="text-xs text-[#91a096]">{route.time}</span>
                </div>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold">
                  <span>{route.from}</span><span className="text-[#95a59a]">→</span><span>{route.to}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-[#87948b]">
                  <span>Direct trains available</span><span className="font-semibold text-[#4b7957]">{route.price}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <footer id="about" className="mt-14 flex flex-col gap-2 border-t border-[#e6ebe3] py-6 text-xs text-[#8d9a91] sm:flex-row sm:items-center sm:justify-between">
          <span>Made for the joy of getting there. <span className="text-[#c7954c]">✦</span></span>
          <span>Thoughtful travel, one journey at a time.</span>
        </footer>
      </section>
    </main>
  );
}