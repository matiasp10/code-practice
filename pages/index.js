import styles from '../styles/Home.module.css';
import Nav from '../components/navbar/Nav';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <Hero />
      <Projects />
    </div>
  );
}
