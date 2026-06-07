import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";

function Dashboard() {

  const [backendStatus, setBackendStatus] =
    useState("LOADING...");

  const [totalNotes, setTotalNotes] =
    useState(0);

  const [mostPlayed, setMostPlayed] =
    useState("-");

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/status")

      .then((res) => res.json())

      .then((data) => {
        setBackendStatus(data.status);
      })

      .catch(() => {
        setBackendStatus("OFFLINE");
      });

    fetch("http://127.0.0.1:8000/api/stats")

      .then((res) => res.json())

      .then((data) => {

        setTotalNotes(
          data.total_notes
        );

        setMostPlayed(
          data.most_played || "-"
        );

      })

      .catch(() => {

        setTotalNotes(0);
        setMostPlayed("-");

      });

  }, []);

  return (

    <div className="dashboard-page">

      <h1 className="page-title">
        Dashboard
      </h1>

      <div className="dashboard-grid">

        <StatCard
          title="Total Notes Played"
          value={totalNotes}
        />

        <StatCard
          title="Most Played Note"
          value={mostPlayed}
        />

        <StatCard
          title="Recording Sessions"
          value="12"
        />

        <StatCard
          title="Backend Status"
          value={backendStatus}
        />

      </div>

    </div>

  );
}

export default Dashboard;