import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <main className="w-full max-w-3xl px-8 py-20 bg-white dark:bg-black shadow-sm rounded-2xl">
        
        {/* Header / Profile */}
        <header className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4">
          <Image
            src="/next.svg"
            alt="Profile logo"
            width={80}
            height={20}
            className="dark:invert"
            priority
          />
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Muhammad Atho'illah Mu'thisyah
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Student ID: <span className="font-medium">2341720210</span>
          </p>
        </header>

        {/* About Section */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            Interests
          </h2>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
            <li>Internet of Things (IoT)</li>
            <li>Security Systems</li>
            <li>Legal Informatics</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-sm text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Muhammad Atho'illah Mu'thisyah</p>
        </footer>

      </main>
    </div>
  );
}