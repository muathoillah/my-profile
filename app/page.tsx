import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <main className="w-full max-w-3xl px-8 py-20 bg-white dark:bg-slate-950 shadow-sm rounded-3xl border border-zinc-200 dark:border-zinc-800">
        <header className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={96}
            height={32}
            className="dark:invert"
            priority
          />
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-black dark:text-white">
              Muhammad Atho&apos;illah Mu&apos;thisyah
            </h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              Student ID: <span className="font-semibold">2341720210</span>
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300 max-w-2xl">
              Technical interests: Internet of Things, security systems, and legal informatics. I build polished web applications with Next.js and prepare production deployments with Docker.
            </p>
          </div>
        </header>

        <section className="mt-12 grid gap-8">
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Portfolio</h2>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              This profile site is a Next.js application deployed using a multi-stage Docker build. It showcases responsive design, structured frontend content, and a clean developer workflow.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Projects</h2>
            <ul className="mt-4 list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
              <li>Smart home IoT dashboard for sensor monitoring and automation.</li>
              <li>Secure access control system for campus and facility protection.</li>
              <li>Legal informatics research portal for regulation and case tracking.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Connect</h2>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              Visit my GitHub profile at <span className="font-medium">@muathoillah</span> to explore other public assets and contributions.
            </p>
          </div>
        </section>

        <footer className="mt-12 text-sm text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Muhammad Atho&apos;illah Mu&apos;thisyah</p>
        </footer>
      </main>
    </div>
  );
}
