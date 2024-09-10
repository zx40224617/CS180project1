import Image from "next/image";
import styles from "../css_modules/pyramid_alignment.module.css";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>3. Image Pyramid Alignment</h3>
      <p className={styles.description}>
        In order to deal with bigger image files, we can implement an algorithm
        called image pyramid. We first down sample the big image to a really
        small one. And then we do the brute force search in a small window like
        we did above. We then return the best displacement to the previous call
        (one step bigger image), and inherit the displacement, and do the the
        brute force search in a small window again. By repeating this process,
        we can save a lot of computation force and time.
      </p>
      <Image
        src="/images/image_pyramid.png"
        width={500}
        height={500}
        alt="Picture of Sergey Prokudin-Gorsky"
      />

      <h4>Some Notes: </h4>
      <ul className={styles.questions}>
        <li>
          Depends on how much we down sample the image each time, we need to
          adjust the inherited distance the same scale. Like in my application,
          I down sample the image by 1/2 each time, so the inherited distacnes
          need to times 2 when return to the previous call.
        </li>
        <li>
          It is better to implement this algorithm using recursion since you
          need to inherit the distance.
        </li>
        <li>
          Everything wroks fine except for "emir.tif". This is because I chose
          blue filter as my base filter in every case. But the blue shirt of
          Emir has has pixel value ≈ 1 in the blue filter, which will mess up
          the calcuation in Euclidean and NCC. What we can do is that we can
          simply just choose another filter as the base image, or implement SSIM
          or edge detector. Unfortunately I have no extra time for that bell and
          whistle.
        </li>
      </ul>
    </div>
  );
}
