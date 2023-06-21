import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Components/Layout/Header";
import FirstUniqueFeature from "@/Components/UniqueFeature";

export default function Home() {
  return (
    <>
      <Header />
      <FirstUniqueFeature />
    </>
  );
}
