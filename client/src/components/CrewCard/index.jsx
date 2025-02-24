import styles from "./style.module.css";

const CrewCard = ({ heist, crewSpot, rating, profile }) => {
  return (
    <div className={styles.card}>
      <p className={styles.cardContent}>
        <strong>Heist: </strong> {heist.location}
      </p>
      <p className={styles.cardContent}>
        <strong>Crew Spot:</strong> {crewSpot}
      </p>
      {/* Bonus: express rating as stars using a cool trick with star emojis using fill and join string operations
          Array(Number(rating)).fill('⭐').join('') */}
      <p className={styles.cardContent}>
        <strong>Rating:</strong> {Array(Number(rating)).fill('⭐').join('')}
      </p>
      <p className={styles.cardContent}>
        <strong>Profile:</strong> {profile}
      </p>
    </div>
  );
};

export default CrewCard;