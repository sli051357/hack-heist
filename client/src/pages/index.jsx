import { useState, useEffect } from "react";
import HeistCard from "@/components/HeistCard";
import CrewCard from "@/components/CrewCard";
import HeistApi from "../api";
import styles from "@/styles/Home.module.css";

const Home = () => {
  const [Heists, setHeists] = useState([]);
  const [crew, setCrew] = useState([]);

  /************** Activity 3 *************/ 
  
  // const fetchCrew = async () => {
  //   const response = await HeistApi.getCrew();
  //   setCrew(response.data);
  // }

  // useEffect(() => {
  //   fetchCrew();
  // }, []);

  /****************************************/ 

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
            // Sample Heist
            <HeistCard location="La Jolla Shores" planEntry="Steal all the sand from the beach so we can make the sand castle of our dreams" startDate="2025-028-02T00:00:00.000Z" endDate="2025-02-03T00:00:00.000Z" />
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
            // Sample Crew Member
            <CrewCard heist={{ location: "La Jolla Shores" }} crewMember="Uliyaah" rating="4" profile="Pretty good at digging holes"/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
