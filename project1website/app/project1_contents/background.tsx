import styles from "../css_modules/background.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Background of the project:</h2>
      <p className={styles.introduction}>
        Sergey Mikhaylovich Prokudin-Gorsky, a Russian chemist and photographer,
        travelled around the whole Russian Empire under the permission of Tzar
        to take color photographs of everything. But the point is, there was no
        such a technique at the time for printing color photographs. He came up
        with a relatively easy idea that he could take picture of very scene on
        a plate using red, green, blue filters to acheieve a colorful image. And
        the main idea of this project is that we are given a data of an image
        with rgb filters, and we need to implement the idea to get a colorful
        photograph.
      </p>
      <Image
        src="/images/SPG.jpg"
        width={500}
        height={500}
        alt="Picture of Sergey Prokudin-Gorsky"
        className={styles.SPG}
      />
    </div>
  );
}
