import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <main className="w-screen min-h-svh sm:min-h-screen grid place-items-center  bg-fadedYellow">
      {/* card container */}
      <div className="w-80 sm:w-72 min-h-80 bg-white border border-black rounded-xl p-6 sm:p-5 cshadow">
        <div className="w-full h-40 relative rounded-lg overflow-hidden">
          <Image
            src="/iarticle.svg"
            alt="article banner"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        {/* label */}
        <span className=" bg-fadedYellow text-zinc-950 inline-block my-4 text-xs px-1.5 py-0.5 font-bold">
          Learning
        </span>
        {/* published date */}
        <p className="text-[12px] font-semibold text-zinc-800">Publishe 21 Dec 2023</p>
        {/* card title */}
        <h3 className="mt-4 text-fadedYellow font-bold text-xl">
          HTML & CSS Foudation
        </h3>
        {/* card descritiption */}
        <p className="text-base text-slate-600 mt-2">
          These language are the backbone of every websites, defining structure,
          connect and presentation.
        </p>
        <div className=" mt-3 flex justify-start items-center gap-x-2">
          <div className=" relative w-8 h-8 rounded-[50%] border border-yellow-400 bg-fadedYellow/50">
            <Image src="/avtar.png" alt="user profile" layout="fill" objectFit="cover" />
          </div>
          <p className="text-xs text-zinc-800 font-bold">Sudhir Gadpayle</p>
        </div>
      </div>
    </main>
  );
}
