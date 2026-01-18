"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/Components/AuthProvider/AuthProvider";
import Toast from "../Toast/Toast";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const links = [
    { name: "Home", href: "/" },
    { name: "Items", href: "/items" },
    ...(isAuthenticated ? [{ name: "Add Item", href: "/add-item" }] : []),
  ];

  const handleLogout = () => {
    logout();
    Toast("Log out Successfull");
    router.push("/login");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full bg-white dark:bg-black/95 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
        >
          TechHub
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-900"
            >
              {link.name}
            </Link>
          ))}

          {!isAuthenticated ? (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          ) : (
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </div>

        {/* Mobile menu */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden px-4 pb-4"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2"
              >
                {link.name}
              </Link>
            ))}

            {!isAuthenticated ? (
              <Link href="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="block text-left text-red-600 py-2"
              >
                Logout
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
