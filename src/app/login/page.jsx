"use client";

import { Button } from "@/Components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { validateCredentials, setAuthCookie } from "@/lib/auth";
import { useAuth } from "@/Components/AuthProvider/AuthProvider";
import { showSuccess } from "@/Utils/Notificationi";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    await new Promise((r) => setTimeout(r, 500));

    if (validateCredentials(email, password)) {
      setAuthCookie(email); 
      login();  
        
    showSuccess("successfully logged in ");  
      router.push("/items");
    } else {
      setError(
        "Invalid email or password. Try: user@example.com / password123"
      );
    }

    setIsLoading(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 dark:from-gray-950 via-white dark:via-black to-green-50 dark:to-gray-950 flex items-center justify-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <motion.div variants={itemVariants} className="card p-8">
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-2"
          >
            Welcome Back
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-center text-gray-600 dark:text-gray-400 mb-8"
          >
            Sign in to your account
          </motion.p>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-6"
              >
                <p className="text-sm">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                required
                className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-blue-600"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                required
                className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-blue-600"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
}
