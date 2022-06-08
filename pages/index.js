import React, { useContext } from "react"

import Head from "next/head"
import styles from "../styles/Home.module.css"

import Context from "../components/Context"

import MyMap from "../components/MyMap"
import MySearchBar from "../components/MySearchBar"

export default function Home() {
  const { ip } = useContext(Context)
  console.log(ip)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MySearchBar />
        <MyMap />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
