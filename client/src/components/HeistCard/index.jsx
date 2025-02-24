import Image from "next/image";
import styles from "./style.module.css";

const HeistCard = ({ location, startDate, endDate, planEntry }) => {
  // Bonus: Format date function
  const formatDate = (date) => {
    if (!date) return '';

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className={styles.card}>
      <Image src="/heist_placeholder.png" width={550} height={300}/>
      <p className={styles.cardContent}>
        <strong>Location: </strong> {location}
      </p>
      <p className={styles.cardContent}>
        <strong>Start Date:</strong> {formatDate(startDate)}
      </p>
      <p className={styles.cardContent}>
        <strong>End Date:</strong> {formatDate(endDate)}
      </p>
      <p className={styles.cardContent}>
        <strong>Plan:</strong> {planEntry}
      </p>
    </div>
  );
};

export default HeistCard;