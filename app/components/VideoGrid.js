import styles from './VideoGrid.module.css'

export default function VideoGrid() {
  const videos = [
    {
      id: 1,
      project: "Коммерческий ролик для бренда одежды",
      software: "Premiere Pro + After Effects",
      videoUrl: "/videos/1.mp4" // Замените на реальные пути
    },
    {
      id: 2,
      project: "Короткометражный фильм 'Рассвет'",
      software: "DaVinci Resolve",
      videoUrl: "/videos/2.mp4"
    },
    {
      id: 3,
      project: "Музыкальный клип 'Neon Dreams'",
      software: "Premiere Pro",
      videoUrl: "/videos/3.mp4"
    },
    // Добавьте больше видео
  ];

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoCard}>
            <video 
              controls 
              className={styles.video}
              poster="/thumbnails/1.jpg" // Добавьте превью
            >
              <source src={video.videoUrl} type="video/mp4" />
              Ваш браузер не поддерживает видео тег.
            </video>
            <div className={styles.info}>
              <div className={styles.project}>{video.project}</div>
              <div className={styles.software}>{video.software}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}