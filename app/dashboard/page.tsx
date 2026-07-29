import Navbar from "@/components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/40">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                My Tickets
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Your Event Ticket NFT Dashboard
              </h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                See your active passes, upcoming event access, and ticket details in one place.
                Connect your wallet on the home page to begin managing your tickets.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h2 className="text-2xl font-semibold text-white">No tickets yet</h2>
                <p className="mt-3 text-slate-400">Connect your wallet and mint a ticket from the homepage to see it appear here.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h2 className="text-2xl font-semibold text-white">Event access</h2>
                <p className="mt-3 text-slate-400">Each wallet-owned ticket becomes a collectible access pass for the event.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
