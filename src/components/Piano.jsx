function Piano() {

  const whiteKeys = [
    "C","D","E",
    "F","G","A","B"
  ];

  const blackKeys = [
    {note:"C#",left:70},
    {note:"D#",left:170},
    {note:"F#",left:370},
    {note:"G#",left:470},
    {note:"A#",left:570}
  ];

  return (

    <div className="piano-container">

      {whiteKeys.map((note) => (

        <div
          key={note}
          className="white-key"
        >
          {note}
        </div>

      ))}

      {blackKeys.map((key) => (

        <div
          key={key.note}
          className="black-key"
          style={{
            left:`${key.left}px`
          }}
        >
          {key.note}
        </div>

        

      ))}

    </div>

  );
}

export default Piano;