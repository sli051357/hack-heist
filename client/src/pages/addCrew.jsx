import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HeistApi from "../api";
import styles from "../styles/HeistForm.module.css";

const AddCrew = () => {
  const [Heists, setHeists] = useState([]);
  const [selectedHeist, setSelectedHeist] = useState('');
  const [crew, setCrew] = useState('');
  const [rating, setRating] = useState('');
  const [profile, setProfile] = useState('');
  const router = useRouter();

  // Bonus: Format date function
  const formatDate = (date) => {
    if (!date) return '';

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const fetchHeists = async () => {
    const response = await HeistApi.getHeist();
    setHeists(response.data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await HeistApi.postCrew({
      heist: selectedHeist,
      crewMember: crew,
      rating,
      profile
    });

    router.push('/');

  }

  useEffect(() => {
    fetchHeists();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Add a Crew Member</h2>
      <p>
        Who do you want on your heist? 
      </p>
      <form className={styles.heistForm} onSubmit={handleSubmit}>
        <label htmlFor="heist">Choose your heist:</label>
        <select name="heistPicker" className="heistPicker" onChange={(e) => setSelectedHeist(e.target.value)}>
            {Heists.map((heist) => (
              <option key={heist._id} value={heist._id}>
                {heist.location} ({formatDate(heist.startDate)} - {formatDate(heist.endDate)})
              </option>
            ))}
        </select>
        <label htmlFor="crew">Name:</label>
        <input type="text" className="crew" name="crew" onChange={(e) => setCrew(e.target.value)} required />
        <label htmlFor="rating">Rating (1-5):</label>
        <select name="rating" defaultValue="1" className="rating" onChange={(e) => setRating(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label htmlFor="profile">Profile:</label>
        <textarea className="profile" name="profile" onChange={(e) => setProfile(e.target.value)} required></textarea>

        <button type="submit">Add Crew Member</button>
      </form>
    </div>
  );
};

export default AddCrew;
