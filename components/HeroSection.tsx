import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-7xl text-white">
        Generate Alt Text for your Images using
        <span className="relative bg-gradient-to-r from-red-700 via-orange-600 to-amber-400 bg-clip-text text-transparent">
          <span> AI with RevelioAI</span>
        </span>
      </h1>
      <p className="mx-auto mt-4 md:mt-12 max-w-xl text-lg text-stone-400 leading-7">
        Revelio generates detailed alt text for all your images using AI.
        Enhance SEO and site accessibility by using our tool.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-4 hover:bg-[#ffbe3c]"
          href="/caption"
        >
          Generate Alt Text
        </Link>
      </div>
      <div className="items-center w-full sm:mt-10">
          <Image
            alt="Cathedral with candles on the ceiling"
            src="/hero.svg"
            width={1200}
            height={1200}
          />
      </div>
    </main>
  );
}
