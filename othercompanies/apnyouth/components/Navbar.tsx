"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, REGISTRATION_LINKS } from "@/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-brand-forest/95 backdrop-blur-xl shadow-card-dark border-b border-brand-gold/10"
          : isHome
          ? "bg-transparent"
          : "bg-brand-forest/95 backdrop-blur-xl border-b border-brand-gold/10"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-gold to-brand-amber opacity-90" />
              <div className="absolute inset-[2px] rounded-full bg-brand-forest flex items-center justify-center">
                <span className="text-brand-gold font-display font-bold text-sm">AG</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-semibold text-base leading-none tracking-wide">
                AGIF
              </span>
              <span className="text-brand-gold/70 font-body text-[10px] tracking-widest uppercase leading-none mt-0.5">
                Investment Forum
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-body font-medium transition-all duration-200 hover-underline",
                  pathname === link.href
                    ? "text-brand-gold"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Registration dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setRegOpen(true)}
              onMouseLeave={() => setRegOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-body font-medium text-white/80 hover:text-white transition-colors">
                Register
                <ChevronDown
                  size={14}
                  className={cn("transition-transform", regOpen && "rotate-180")}
                />
              </button>

              <AnimatePresence>
                {regOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full mt-1 w-56 glass-dark rounded-xl overflow-hidden shadow-card-dark"
                  >
                    {REGISTRATION_LINKS.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="block px-5 py-3.5 text-sm font-body text-white/90 hover:text-brand-gold hover:bg-brand-gold/8 transition-all"
                      >
                        {r.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA */}
          <Link
            href="/registration/delegate"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body font-semibold text-brand-forest bg-gradient-to-r from-brand-gold to-brand-amber hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Register Now
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-brand-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-brand-forest/98 backdrop-blur-xl border-t border-brand-gold/10"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-body font-medium transition-colors",
                      pathname === link.href
                        ? "bg-brand-gold/10 text-brand-gold"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="my-2 border-t border-brand-gold/10" />
              {REGISTRATION_LINKS.map((r, i) => (
                <motion.div
                  key={r.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (NAV_LINKS.length + i) * 0.05 }}
                >
                  <Link
                    href={r.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-body font-medium text-brand-gold hover:bg-brand-gold/8 transition-colors"
                  >
                    {r.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-2"
              >
                <Link
                  href="/registration/delegate"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-3 rounded-full text-sm font-body font-semibold text-brand-forest bg-gradient-to-r from-brand-gold to-brand-amber"
                >
                  Register Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
