import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        {/* Additional sections can be added here */}
      </main>
    </div>
  )
}
