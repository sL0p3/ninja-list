import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates ipsum in autem aspernatur repellat laboriosam voluptatem eum explicabo facilis voluptate, at aliquam facere ducimus ratione, quas eaque id expedita, tempora saepe. Architecto.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non assumenda mollitia veniam veritatis, optio, nisi provident unde, modi sint sequi corporis porro magnam cumque saepe corrupti ducimus tenetur eos enim! Autem, aperiam at!</p>
      <Link href = "/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
  )
}
