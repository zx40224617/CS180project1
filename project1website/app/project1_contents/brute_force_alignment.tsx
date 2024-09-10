import Image from "next/image";
import styles from "../css_modules/brute_force_alignment.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>2. Brute Force Alignment:</h3>
        <p className={styles.description}>
          After we have pre-processed all of our images, we can noe tarting to
          implement the technique to produce color photograph. The problem is,
          we still need to align all the different channels before we can stack
          them.
        </p>
        <p className={styles.description}>
          This is something you will get without any alignment:
        </p>
        <Image
          src="/images/cathedral_output_no_alignment.jpg"
          width={500}
          height={500}
          alt="Picture of Sergey Prokudin-Gorsky"
        />

        <p className={styles.description}>
          So what we need to do is that choose a base channel out of 3 as a
          reference, and see how we can find the correct displacement of the
          other 2 channels baseon the base channel so they can be well aligned.
          The esiest implementation is that we can go over a small window of
          search, like [-15, 15] in my case. And try find the best displacement
          exhuastively.
        </p>
        <p className={styles.description}>
          How we check which one is the best displacement? The 2 naive ways are
          calculating the euclidean distacne or NCC (Normalized
          Cross-Correlation) between 2 images.
        </p>
        <div>
          <p className={styles.description}>Euclidean Distance: </p>
          <Image
            src="/images/cathedral_output_euclidean_alignment.jpg"
            width={500}
            height={500}
            alt="Picture of Sergey Prokudin-Gorsky"
          />
          <p className={styles.description}>NCC: </p>
          <Image
            src="/images/cathedral_output_NCC_alignment.jpg"
            width={500}
            height={500}
            alt="Picture of Sergey Prokudin-Gorsky"
          />
        </div>

        <h4>Summary: </h4>
        <p className={styles.description}>
          As we can see, NCC perform better than euclidean distance, this is
          because Euclidean ditance directly calculate the pixel intesity
          between 2 images, which will be influenced a lot by brightness value.
          And NCC is less senstive to this issue, so NCC is more robust in this
          case.
        </p>

        <h4>Potential Problem: </h4>
        <p className={styles.description}>
          The naive algorithm we implemented works fine as we just see, but the
          problem is, what if we have a really large file with better solution
          of the image like .tif files? Then the search window of this kind of
          image may need to be [-100, 100] or even bigger. Which is not really
          applicable and is really slow, so we need to improve our algorithm.
        </p>
      </div>
    </>
  );
}
