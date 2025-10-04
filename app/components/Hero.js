import styles from './Hero.module.css'

export default function Hero() {
  const skills = ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Color Grading', 'Sound Design'];

  return (
    <section className={styles.hero}>
      <img 
        src="/photo.jpg" // Замените на путь к вашему фото
        alt="Фотография"
        className={styles.photo}
      />
      <div className={styles.content}>
        <h1>Имя Фамилия</h1>
        <p>Видеомонтажер с опытом работы более 5 лет. Специализируюсь на создании динамичных видео для коммерческих проектов и арт-хаус контента.</p>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}