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

  const totalNotes = noteStats.reduce(
    (sum, item) => sum + item.count,
    0
  );

  const mostPlayed = noteStats.reduce(
    (max, item) =>
      item.count > max.count ? item : max
  );

  return (

    <div className="analytics-page">

      <h1 className="page-title">
        Analytics
      </h1>

      <div className="analytics-cards">

        <div className="analytics-card">
          <h3>Total Notes Played</h3>
          <h1>{totalNotes}</h1>
        </div>

        <div className="analytics-card">
          <h3>Most Played Note</h3>
          <h1>{mostPlayed.note}</h1>
        </div>

        <div className="analytics-card">
          <h3>Unique Notes</h3>
          <h1>{noteStats.length}</h1>
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
              opacity: Math.max(
                item.count / 80,
                0.25
              )
            }}
          >

            <span>{item.note}</span>

            <small>
              {item.count}
            </small>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Analytics;