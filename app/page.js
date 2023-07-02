"use client"
import TypingEffect from './components/typingEffect'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-24 text-black dark:text-white">
      <div className="w-full max-w-5xl font-mono text-sm flex flex-col">
        <h1 className="text-6xl md:text-7xl tracking-wide mb-10 text-center">
          Full Stack Developer
        </h1>
        <div className="text-4xl flex flex-col md:flex-row">
          <span className="mb-2 text-center">
            Building web apps with{" "}
            <span className="font-extrabold inline">Bleeding Edge Tech</span> 🤯
          </span>{" "}
          <p className="text-center">
            <TypingEffect />
          </p>
        </div>
      </div>
    </main>
  );
}
