import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen flex-col w-full">
      <main className="flex-1 flex mt-16">
        <div className="flex-1 flex flex-col">
          <section className="w-full bg-primary-50 bg-dotted-pattern bg-contain aspect-video overflow-hidden max-h-96">
            <div className="relative m-auto max-h-96" role="region" aria-roledescription="carousel">
              <div className="wrapper absolute keft-0 right-0 h-full">
                <button>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


