import Image from "next/image";
import Link from "next/link";
import { WordRotate } from "@/components/ui/word-rotate";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Gradient background layers */}
      <div className="min-h-screen max-w-[1200px] mx-auto">
        <div className="absolute -top-[15rem] left-1/2 md:top-[5rem] md:left-[18rem] inset-0 flex items-center justify-center">
          {/* First layer - Blur, Rotate */}
          <div
            className="absolute w-[50vw] h-[50vw] max-w-[300px] max-h-[300px] animate-spin-slow"
            style={{
              willChange: "transform",
              opacity: 1,
              transform:
                "translate(-50%, -50%) perspective(1200px) rotate(101.7deg)",
              animationDuration: "8s",
            }}
          >
            <div
              className="w-full h-full rounded-full bg-gradient-to-r from-pink-700 via-red-500 to-red-800 blur-2xl"
              style={{
                willChange: "transform",
                opacity: 0.8,
                transform: "scale(0.901667)",
              }}
            ></div>
          </div>

          {/* Second layer - Blur, Rotate */}
          <div
            className="absolute w-[50vw] h-[50vw] max-w-[300px] max-h-[300px] animate-spin-slow"
            style={{
              willChange: "transform",
              opacity: 1,
              transform:
                "translate(-50%, -50%) perspective(1200px) rotate(101.64deg)",
              animationDuration: "6s",
              animationDirection: "reverse",
            }}
          >
            <div
              className="w-full h-full rounded-full bg-gradient-to-r from-red-400 via-purple-400 to-pink-500 blur-xl"
              style={{
                willChange: "transform",
                opacity: 0.9,
                transform: "scale(0.903867)",
              }}
            ></div>
          </div>

          {/* Third layer - Blur, Rotate, Blend */}
          <div
            className="absolute w-[50vw] h-[50vw] max-w-[300px] max-h-[300px] animate-spin-slow"
            style={{
              willChange: "transform",
              opacity: 1,
              transform:
                "translate(-50%, -50%) perspective(1200px) rotate(101.58deg)",
              animationDuration: "10s",
            }}
          >
            <div
              className="w-full h-full rounded-full bg-gradient-to-r from-yellow-400 via-white-400 to-pink-300 blur-xl mix-blend-screen"
              style={{
                willChange: "transform",
                opacity: 1,
                transform: "scale(0.903933)",
              }}
            ></div>
          </div>
        </div>

        <section className="w-[80%] relative -top-28 -left-23">
          <Image
            className=""
            src="/ovaa-removebg-preview.png"
            alt="novaa"
            width={350}
            height={350}
          />
        </section>

        <section className="w-[90%] mx-auto flex flex-col items-center gap-4 relative -top-15 z-10">
          <h2 className="font-extrabold text-[1.8rem] md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 tracking-tight leading-tight">
            Your everyday assistant
          </h2>
          <p className="text-center">
            An assistant that helps you manage your life and control your
            computer
          </p>
          <Link
            href="/#waitlist"
            className="mt-4 bg-black text-white px-6 py-2 rounded-md flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Join the waitlist
          </Link>
        </section>
      </div>

      <div className="bg-[#eaeff5]">
        <section className="max-w-[1200px] mx-auto mt-auto p-12">
          <p className="text-xl">
            We&apos;re building a virtual assistant that knows everything about
            your computer, has access to your data, and can take control to
            automate your workflows.
          </p>
          <div className="mt-12 text-xl ">
            Think of it as an
            <WordRotate
              className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 tracking-tight leading-tight inline font-bold dark:text-white"
              words={[
                "Siri",
                "Raycast",
                "Jarvis",
                "Alfred",
                "Google Assistant",
              ]}
            />{" "}
            in one and better.
          </div>
        </section>
      </div>

      <section className="px-12 py-20 text-center">
        <h3 className="text-xl font-medium mb-4">
          Be part of the first beta testers — Join our waitlist
        </h3>
        <div
          id="waitlist"
          className="max-w-md mx-auto flex border border-gray-300 rounded-md overflow-hidden"
        >
          <input
            type="email"
            placeholder="name@email.com"
            className="flex-grow px-4 py-2 outline-none"
          />
          <button className="bg-black text-white px-6 py-2">Join</button>
        </div>
      </section>

      <footer className="bg-[#eaeff5] p-12 text-center text-gray-500">
        {/* <div className="relative top-[3rem] inset-0 flex items-center justify-center">
          
          <div
            className="absolute w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] animate-spin-slow"
            style={{
              willChange: "transform",
              opacity: 1,
              transform:
                "translate(-50%, -50%) perspective(1200px) rotate(101.7deg)",
              animationDuration: "8s",
            }}
          >
            <div
              className="w-full h-full rounded-full bg-gradient-to-r from-pink-700 via-red-500 to-red-800 blur-2xl"
              style={{
                willChange: "transform",
                opacity: 0.8,
                transform: "scale(0.901667)",
              }}
            ></div>
          </div>

          <div
            className="absolute w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] animate-spin-slow"
            style={{
              willChange: "transform",
              opacity: 1,
              transform:
                "translate(-50%, -50%) perspective(1200px) rotate(101.64deg)",
              animationDuration: "6s",
              animationDirection: "reverse",
            }}
          >
            <div
              className="w-full h-full rounded-full bg-gradient-to-r from-red-400 via-purple-400 to-pink-500 blur-xl"
              style={{
                willChange: "transform",
                opacity: 0.9,
                transform: "scale(0.903867)",
              }}
            ></div>
          </div>

          <div
            className="absolute w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] animate-spin-slow"
            style={{
              willChange: "transform",
              opacity: 1,
              transform:
                "translate(-50%, -50%) perspective(1200px) rotate(101.58deg)",
              animationDuration: "10s",
            }}
          >
            <div
              className="w-full h-full rounded-full bg-gradient-to-r from-yellow-400 via-white-400 to-pink-300 blur-xl mix-blend-screen"
              style={{
                willChange: "transform",
                opacity: 1,
                transform: "scale(0.903933)",
              }}
            ></div>
          </div>
        </div> */}
        <p className="z-10">&copy;2025, novaa, inc.</p>
      </footer>
    </main>
  );
}
