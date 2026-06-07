import { useEffect, useState } from "react";

function Analytics() {

  const [noteStats, setNoteStats] =
    useState([]);

  const [totalNotes, setTotalNotes] =
    useState(0);

  const [mostPlayed, setMostPlayed] =
    useState("-");

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/stats")

      .then((res) => res.json())

      .then((data) => {

        setTotalNotes(
          data.total_notes
        );

        setMostPlayed(
          data.most_played || "-"
        );

        const notesArray = Object.entries(
          data.note_stats
        ).map(([note, count]) => ({
          note,
          count
        }));

        setNoteStats(notesArray);

      })

      .catch((err) => {
        console.error(err);
      });

  }, []);

  const maxCount =
    noteStats.length > 0
      ? Math.max(
          ...noteStats.map(
            (item) => item.count
          )
        )
      : 1;

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
          <h1>{mostPlayed}</h1>
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
                item.count / maxCount,
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