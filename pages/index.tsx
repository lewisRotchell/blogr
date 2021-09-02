import Head from "next/head";
import Image from "next/image";
import { Header } from "../sections/Header";
import { SectionA } from "../sections/SectionA";
import { SectionB } from "../sections/SectionB";
import { SectionC } from "../sections/SectionC";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionA />
        <SectionB />
        <SectionC />
      </main>
    </>
  );
}
