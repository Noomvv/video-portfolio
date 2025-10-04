import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import VideoGrid from "./components/VideoGrid";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <VideoGrid />
      {/* Добавьте другие компоненты по мере необходимости */}
      {/* {children} */}
    </div>
  );
}
