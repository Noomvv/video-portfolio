import styles from './Hero.module.css'

export default function Hero() {
  const skills = ['DaVinci Resolve', 'Color Grading', 'Sound Design'];

  return (
    <section className={styles.hero}>
      <img 
        src="/img/IMG_5592.webp" // Замените на путь к вашему фото
        alt="Фотография"
        className={styles.photo}
      />
      <div className={styles.content}>
        <h1>Mun Vladimir</h1>
        <p>Видеомонтажёр с опытом работы более двух лет. Специализируюсь на создании коммерческих видео. Работал над проектами для таких брендов, как Hofmann, Smeg, PostPoint, Ahead Group, а также для частных школ.</p>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}