import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-slate-100 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <Link href="/" className="text-xl font-semibold tracking-tight text-white hover:text-slate-100">
            Event Ticket NFT
          </Link>
          <p className="text-sm text-slate-400">Simple ticketing for on-chain events</p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-slate-300 hover:text-white">
            Home
          </Link>
          <Link href="/dashboard" className="text-slate-300 hover:text-white">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
