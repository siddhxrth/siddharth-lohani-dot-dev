import Head from "next/head";
import styles from "../styles/Home.module.css";
import Typical from "react-typical";

export default function Home() {

  const githubLink = "https://github.com/siddhxrth";
  const linkedinLink = "https://linkedin.com/in/siddharthlohani";
  const email = "mailto:me@siddharthlohani.dev";

  return (
    <div className={styles.container}>
      <Head>
        <title>Siddharth Lohani</title>
        <meta name="description" content="Siddharth Lohani" />
        <link rel="icon" href="/rocket.ico" />
      </Head>

      <div className={styles.main}>
        <h1>
          Hi, I&apos;m
          <Typical
            steps={[
              " Siddharth Lohani.",
              2000,
              " a student",
              2000,
              " a developer",
              2000,
              " a problem solver",
              2000,
              " an engineer",
              2000,
              " a leader",
              2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h1>
        <p
          style={{
            maxWidth: "600px",
            textAlign: "center",
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          I&apos;m an incoming freshman at Georgia Tech, pursuing a major in Computer Engineering.
          You can check out all of my work on my <u><a href={githubLink} target="_blank" rel="noreferrer" style={{ "color": "#E0B1CB" }}>Github</a></u>!

          <br></br>
        </p>
        {/* <a className="explore" href="/experience">
          Learn More ➡️
        </a> */}
        <div className="buttons">
          <a
            className="imageContainer"
            href={githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <img alt="github link" src="/github.svg"></img>
          </a>
          <a
            className="imageContainer"
            href={linkedinLink}
            target="_blank"
            rel="noreferrer"
          >
            <img alt="linkedin link" src="/linkedin.svg"></img>
          </a>
          <a
            className="imageContainer"
            href={email}
            target="_blank"
            rel="noreferrer"
          >
            <img alt="email" src="/email.svg"></img>
          </a>
        </div>
        <button className="pro"> Featured Projects</button>
      </div>
    </div>
  );
}
