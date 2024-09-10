import styles from "./css_modules/page.module.css";
import Background from "./project1_contents/background";
import ProcessImage from "./project1_contents/processImage";
import BruteForceAlign from "./project1_contents/brute_force_alignment";
import PyramidAlignment from "./project1_contents/pyramid_alignment";
import Results from "./project1_contents/results";
export default function Home() {
  return (
    <>
      <body>
        <div className={styles.pageContents}>
          <h1>Welcome to My CS180 Project1 Portfolio!</h1>
          <Background />
          <ProcessImage />
          <BruteForceAlign />
          <PyramidAlignment />
          <Results />
        </div>
      </body>
    </>
  );
}
