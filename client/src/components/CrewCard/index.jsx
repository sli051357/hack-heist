import styles from "./style.module.css";

const CrewCard = ({ heist, crewMember, rating, profile }) => {
  return (
    <div className={styles.card}>
      <p className={styles.cardContent}>
        <strong>Heist: </strong> {heist.location}
      </p>
      <p className={styles.cardContent}>
        <strong>Crew Member:</strong> {crewMember}
      </p>
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