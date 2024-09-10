import Image from "next/image";
import styles from "../css_modules/results.module.css";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Some results: </h3>
      <div className={styles.imageWrapper}>
        <div className={styles.imageList}>
          <p className={styles.description}>
            G shift: [8, 50] R shift: [-8, 116]
          </p>
          <Image
            src="/images/churchNCC_pyramid_alignment.jpg"
            width={500}
            height={500}
            alt="original given picture of Cathedral with blue flter.jpg"
            className={styles.filterImage}
          />
        </div>
        <div className={styles.imageList}>
          <p className={styles.description}>
            B shift: [-48, -98] R shift: [34, 114]
          </p>
          <Image
            src="/images/emir_NCC_pyramid_alignment_gbase.jpg"
            width={500}
            height={500}
            alt="original given picture of Cathedral.jpg with green filter"
            className={styles.filterImage}
          />
        </div>
        <div className={styles.imageList}>
          <p className={styles.description}>
            {" "}
            G shift: [32, 118] R shift: [26, 248]
          </p>
          <Image
            src="/images/harvestersNCC_pyramid_alignment.jpg"
            width={500}
            height={500}
            alt="original given picture of Cathedral.jpg with red filter"
            className={styles.filterImage}
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.imageList}>
          <p className={styles.description}>
            {" "}
            G shift: [34, 82] R shift: [46, 178]
          </p>
          <Image
            src="/images/iconNCC_pyramid_alignment.jpg"
            width={500}
            height={500}
            alt="original given picture of Cathedral with blue flter.jpg"
            className={styles.filterImage}
          />
        </div>
        <div className={styles.imageList}>
          <p className={styles.description}>
            {" "}
            G shift: [18, 102] R shift: [24, 222]{" "}
          </p>
          <Image
            src="/images/ladyNCC_pyramid_alignment.jpg"
            width={500}
            height={500}
            alt="original given picture of Cathedral.jpg with green filter"
            className={styles.filterImage}
          />
        </div>
        <div className={styles.imageList}>
          <p className={styles.description}>
            {" "}
            G shift: [20, 162] R shift: [26, 356]
          </p>
          <Image
            src="/images/melonsNCC_pyramid_alignment.jpg"
            width={500}
            height={500}
            alt="original given picture of Cathedral.jpg with red filter"
            className={styles.filterImage}
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.imageList}>
          <p className={styles.description}>
            {" "}
            G shift: [52, 102] R shift: [72, 216]
          </p>
          <Image
            src="/images/onion_churchNCC_pyramid_alignment.jpg"
            width={500}
            height={500}
            alt="original given picture of Cathedral with blue flter.jpg"
            className={styles.filterImage}
          />
        </div>
        <div className={styles.imageList}>
          <p className={styles.description}>
            {" "}
            G shift: [58, 156] R shift: [74, 352]
          </p>
          <Image
            src="/images/self_portraitNCC_pyramid_alignment.jpg"
            width={500}
            height={500}
            alt="original given picture of Cathedral.jpg with green filter"
            className={styles.filterImage}
          />
        </div>
        <div className={styles.imageList}>
          <p className={styles.description}>
            {" "}
            G shift: [28, 106] R shift: [22, 224]
          </p>
          <Image
            src="/images/three_generationsNCC_pyramid_alignment.jpg"
            width={500}
            height={500}
            alt="original given picture of Cathedral.jpg with red filter"
            className={styles.filterImage}
          />
        </div>
      </div>
    </div>
  );
}
