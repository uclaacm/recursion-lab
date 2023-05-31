interface Word {
  word: string;
  selected: boolean;
  inRange: boolean;
}

export default function SearchableWord({ word, selected, inRange }: Word) {
  return (
    <div style={{ margin: '10px' }}>
      {selected ? (
        <div style={{ backgroundColor: 'lightskyblue', padding: '10px' }}>
          {word}
        </div>
      ) : (
        <div
          style={
            inRange
              ? { backgroundColor: 'lightgray', padding: '10px' }
              : {
                  backgroundColor: 'lightgray',
                  color: 'lightgray',
                  padding: '10px',
                }
          }
        >
          {word}
        </div>
      )}
    </div>
  );
}
