import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Companies",
    links: [
      { label: "Osu Digital Hub", href: "/osu-tech" },
      { label: "Volta Energy", href: "/volta-energy" },
      { label: "Kumasi Smart", href: "/kumasi-smart" },
      { label: "Adabraka Media", href: "/adabraka-media" },
    ],
  },
  {
    title: "Group",
    links: [
      { label: "About Us", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact HQ", href: "#" },
      { label: "Partner Portal", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div
              className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                UN
              </div>
              UnifiedNexus
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              A unified group of four world-class Ghanaian companies shaping the
              future of technology, energy, real estate, and media.
            </p>
            <div className="flex gap-4 pt-1">
              {["Twitter", "LinkedIn", "Instagram"].map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="text-xs text-slate-400 hover:text-slate-700 transition-colors font-medium"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} UnifiedNexus Group. All rights reserved.
          </p>
          <p className="text-xs text-slate-300 tracking-widest uppercase">
            Designed for excellence · Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
