import Image from "next/image";
import styles from "../css_modules/processImage.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>How do we do it: </h2>
        <h3>1. Process Image</h3>
        <p className={styles.description}>
          First and foremost, we need to read the images that are given to us.
          So we can print it out to see what can we do with it. In my
          application, I use matplotlib to read and show the image. And after
          reading the image, we can print out the image that we are given.
        </p>
        <Image
          src="/images/cathedral_output.jpg"
          width={500}
          height={500}
          alt="original given picture of Cathedral.jpg"
        />
        <p className={styles.description}>
          Note that the filter from top to bottom are b, g, r. So now we need to
          slice the images into 3 different part so that we can stack them
          altogether. What we do here is simply divided the hieght of the
          original image by 3 and them use index slicing to get the coresspoind
          part.
        </p>
        <div className={styles.imageWrapper}>
          <div className={styles.filterList}>
            <p className={styles.description}>blue filter: </p>
            <Image
              src="/images/cathedral_output_b.jpg"
              width={500}
              height={500}
              alt="original given picture of Cathedral with blue flter.jpg"
              className={styles.filterImage}
            />
          </div>
          <div className={styles.filterList}>
            <p className={styles.description}>green filter: </p>
            <Image
              src="/images/cathedral_output_g.jpg"
              width={500}
              height={500}
              alt="original given picture of Cathedral.jpg with green filter"
              className={styles.filterImage}
            />
          </div>
          <div className={styles.filterList}>
            <p className={styles.description}>red filter: </p>
            <Image
              src="/images/cathedral_output_r.jpg"
              width={500}
              height={500}
              alt="original given picture of Cathedral.jpg with red filter"
              className={styles.filterImage}
            />
          </div>
        </div>

        <p className={styles.description}>
          And as you can see, there are some border around the images, which we
          need to get rid of them or they will influence out later calculation.
          Here I didn't implement anything special, but just crop all 4 sides of
          the image by a fixed percentage (10 % in my case) of the image.
        </p>
        <p className={styles.description}>cropped image with blue filter: </p>

        <Image
          src="/images/cathedral_output_b_cropped.jpg"
          width={500}
          height={500}
          alt="original given picture of Cathedral.jpg with blue filter and cropped"
        />

        <p className={styles.description}>
          After we finished processing all the 3 channels images, we can now
          start with the next step
        </p>
      </div>
    </>
  );
}
