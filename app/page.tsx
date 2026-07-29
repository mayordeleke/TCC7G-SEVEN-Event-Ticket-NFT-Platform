import Navbar from "@/components/Navbar";
import WalletConnect from "@/components/WalletConnect";

const events = [
  {
    name: "Summer Soundstage",
    date: "Aug 18, 2026",
    location: "Riverview Park",
    price: "0.05 ETH",
    description: "A live music experience with NFT-only access, collectible tickets, and backstage perks.",
  },
  {
    name: "Crypto Gala Night",
    date: "Sep 4, 2026",
    location: "City Opera House",
    price: "0.08 ETH",
    description: "A premium networking event with digital ticket minting, VIP lounges, and NFT keepsakes.",
  },
  {
    name: "Future Art Showcase",
    date: "Oct 10, 2026",
    location: "Gallery District",
    price: "0.03 ETH",
    description: "Discover immersive art and claim a limited edition ticket NFT for the show.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/40">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                Event Ticket NFT
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Simple NFTs for concert tickets, gala passes, and digital event access.
              </h1>
              <p className="mt-6 max-w-xl text-slate-300">
                Connect your wallet, explore event tickets, and mint a collectible pass in one clean interface.
                Designed for a fast and friendly Web3 ticketing experience.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <WalletConnect />
                <a
                  href="/dashboard"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-slate-500 hover:bg-white/10"
                >
                  View dashboard
                </a>
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-slate-900/95 p-8 shadow-xl shadow-slate-950/40">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Featured tickets</p>
              <div className="mt-6 space-y-4">
                {events.map((event) => (
                  <div key={event.name} className="rounded-3xl border border-slate-800 bg-slate-950 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-semibold text-white">{event.name}</h2>
                        <p className="mt-1 text-sm text-slate-400">{event.location}</p>
                      </div>
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                        {event.price}
                      </span>
                    </div>
                    <p className="mt-4 text-slate-400">{event.description}</p>
                    <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                      <span>{event.date}</span>
                      <span className="rounded-full border border-slate-700 px-3 py-1">Mint now</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <h3 className="text-xl font-semibold text-white">Easy wallet connect</h3>
            <p className="mt-3 text-slate-400">Quickly connect MetaMask and start minting event tickets in one place.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <h3 className="text-xl font-semibold text-white">On-chain access</h3>
            <p className="mt-3 text-slate-400">Issue NFT tickets that prove attendance and unlock exclusive event benefits.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <h3 className="text-xl font-semibold text-white">Dashboard ready</h3>
            <p className="mt-3 text-slate-400">Manage your owned tickets, view details, and access event passes from the dashboard.</p>
          </div>
        </section>
      </main>
    </>
  );
}
