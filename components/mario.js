
import Image from 'next/image'
import styles from '../styles/Mario.module.css'

const Mario = () => {
  return (
    <main className={styles.main}>
      <Image 
        src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png" 
        alt="Mario" 
        width={240}
        height={413}
      />
      <h1 className={styles.title}>
        Microfrontend-APP1.1
      </h1>
      <span>Hosted at <a target="_blank" href="https://mfeapp1.vercel.app">https://mfeapp1.vercel.app</a></span>
    </main>
  )
}

export default Mario
