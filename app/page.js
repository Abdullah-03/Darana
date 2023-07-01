"use client"
import TypingEffect from './components/typingEffect'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-24">
      <div className="w-full max-w-5xl font-mono text-sm flex flex-col">
        <h1 className="text-7xl tracking-wide mb-10">
          Full Stack Developer
        </h1>
        <div className="text-4xl flex flex-col md:flex-row">
          Bleeding Edge - <p><TypingEffect/></p>
        </div>
      </div>
    </main>
  );
}
