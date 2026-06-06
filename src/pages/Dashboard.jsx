import StatCard from "../components/StatCard";

function Dashboard() {

  return (

    <div className="dashboard-page">

      <h1 className="page-title">
        Dashboard
      </h1>

      <div className="dashboard-grid">

        <StatCard
          title="Total Notes Played"
          value="1245"
        />

        <StatCard
          title="Most Played Note"
          value="E"
        />

        <StatCard
          title="Recording Sessions"
          value="12"
        />

        <StatCard
          title="Backend Status"
          value="ACTIVE"
        />

      </div>

    </div>

  );
}

export default Dashboard;