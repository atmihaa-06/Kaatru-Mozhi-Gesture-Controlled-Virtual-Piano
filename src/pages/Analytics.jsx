function Analytics() {

  const noteStats = [
    { note: "C", count: 10 },
    { note: "D", count: 25 },
    { note: "E", count: 80 },
    { note: "F", count: 15 },
    { note: "G", count: 60 },
    { note: "A", count: 35 },
    { note: "B", count: 20 }
  ];

  return (

    <div className="analytics-page">

      <h1 className="page-title">
        Analytics
      </h1>

      <div className="analytics-cards">

        <div className="analytics-card">
          <h3>Total Notes Played</h3>
          <h1>1245</h1>
        </div>

        <div className="analytics-card">
          <h3>Most Played Note</h3>
          <h1>E</h1>
        </div>

      </div>

      <h2 className="section-title">
        Piano Heatmap
      </h2>

      <div className="heatmap-piano">

        {noteStats.map((item) => (

          <div
            key={item.note}
            className="heat-key"
            style={{
              opacity: item.count / 80
            }}
          >
            <span>{item.note}</span>
            <small>{item.count}</small>
          </div>

        ))}

      </div>

    </div>

  );

}

export default Analytics;