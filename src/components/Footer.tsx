import React from "react"

export default function Footer() {
  return (
    <footer className="relative py-6 text-center text-gray-400 bg-transparent">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} · Built with 💜 + 🔵
      </p>
    </footer>
  )
}
