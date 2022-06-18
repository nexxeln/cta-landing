import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-[#E8DCFF] text-5xl font-bold text-center">
          Create t3 App
        </h1>

        <div className="pt-12 md:pt-6" />
        <code
          id="command"
          className="px-2 py-1 text-base text-blue-300 rounded-md cursor-pointer bg-neutral-800"
          onClick={() => console.log("lol")}
        >
          npx create-t3-app@latest
        </code>
      </div>
    </>
  );
};

export default Home;
