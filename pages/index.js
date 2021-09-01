import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typical from 'react-typical'

export default function Home() {

  var githubLink = "https://github.com/siddhxrth"
  var linkedinLink = "https://linkedin.com/in/siddharthlohani"
  var email = "mailto:me@siddharthlohani.dev"

  return (
    <div className={styles.container}>
      <Head>
        <title>Siddharth Lohani</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
      <h1>
        Hi, I&apos;m 
        <Typical
        steps={[' Siddharth Lohani', 2000, ' a student', 2000, ' a developer', 2000]}
        loop={Infinity}
        wrapper="b"
      />
      </h1>
      <p style={{maxWidth: "500px", textAlign: "center", marginTop: 0}}>A high school junior fascinated with all aspects of technology. Fluent in Typescript and Python, I love creating scripts to automate the little things in life! </p>
      <div className="buttons">
      <a className="imageContainer" href={githubLink}> 
        <img alt="github link" src='/github.svg'></img>
      </a>
      <a className="imageContainer" href={linkedinLink}>
        <img alt="linkedin link" src='/linkedin.svg'></img>
      </a>
      <a className="imageContainer" href={email}>
        <img alt="email" src='/email.svg'></img>
      </a>
      </div>
      </div>
    </div>
  )
}
