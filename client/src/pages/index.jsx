import { useState, useEffect } from "react";
import HeistCard from "@/components/HeistCard";
import CrewCard from "@/components/CrewCard";
import HeistApi from "../api";
import styles from "@/styles/Home.module.css";

const Home = () => {
  const [Heists, setHeists] = useState([]);
  const [crew, setCrew] = useState([]);

  const fetchHeists = async () => {
    const response = await HeistApi.getHeist();
    setHeists(response.data);
    
  }

  const fetchCrew = async () => {
    const response = await HeistApi.getCrew();
    setCrew(response.data);
  }

  useEffect(() => {
    fetchHeists();
    fetchCrew();
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.heistContainer}>
        <div className={styles.heistBox}>
          <h3>Heists</h3>
          {Heists.length > 0 ? (
            Heists.map((heist) => (
              <HeistCard
                key={heist._id}
                {...heist}
              />
            ))
          ) : (
            <p>No heists available.</p>
          )}
        </div>
        <div className={styles.heistBox}>
          <h3>Crew</h3>
          {crew.length > 0 ? (
            crew.map((crew) => (
              <CrewCard
                key={crew._id}
                {...crew}
              />
            ))
          ) : (
            <p>No crew available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
