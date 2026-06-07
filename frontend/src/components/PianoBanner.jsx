function PianoBanner() {

  const notes = [
    "C","D","E","F",
    "G","A","B"
  ];

  return (

    <div
      style={{
        display:"flex",
        gap:"4px",
        marginTop:"40px"
      }}
    >

      {notes.map(note => (

        <div
          key={note}
          style={{
            width:"70px",
            height:"220px",
            background:"#fff",
            color:"#000",
            borderRadius:"0 0 10px 10px",
            display:"flex",
            alignItems:"flex-end",
            justifyContent:"center",
            paddingBottom:"15px",
            fontWeight:"bold"
          }}
        >
          {note}
        </div>

      ))}

    </div>

  );

}

export default PianoBanner;