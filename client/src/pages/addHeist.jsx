import { useState } from "react";
import { useRouter } from "next/router";
import HeistApi from "../api";
import styles from "../styles/HeistForm.module.css";

const AddHeist = () => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [entry, setEntry] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedStartDate = new Date(startDate);
    const formattedEndDate = new Date(endDate);

    await HeistApi.postHeist({
      location,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      planEntry: entry
    });

    router.push('/');

  }

  return (
    <div className={styles.container}>
      <h2>Add a Heist</h2>
      <form className={styles.heistForm} onSubmit={handleSubmit}>
        <label htmlFor="location">Location:</label>
        <input type="text" className="location" name="location" onChange={(e) => setLocation(e.target.value)} required />

        <label htmlFor="startDate">Start Date:</label>
        <input type="date" className="startDate" name="startDate" onChange={(e) => setStartDate(e.target.value)} required />

        <label htmlFor="endDate">End Date:</label>
        <input type="date" className="endDate" name="endDate" onChange={(e) => setEndDate(e.target.value)} required />

        <label htmlFor="entry">Plan:</label>
        <textarea className="entry" name="entry" onChange={(e) => setEntry(e.target.value)} required></textarea>

        <button type="submit">Add Heist</button>
      </form>
    </div>
  )
};

export default AddHeist;
