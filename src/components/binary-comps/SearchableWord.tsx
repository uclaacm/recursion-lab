interface Word {
  word: string;
  selected: boolean;
  inRange: boolean;
}

export default function SearchableWord({ word, selected, inRange }: Word) {
  return (
    <div style={{padding: '10px'}}>
      {selected ? (
        <div style={{backgroundColor: 'lightskyblue'}}>{word}</div>
      ) : (
        <div style={inRange ? {backgroundColor: 'lightgray'} : {backgroundColor: 'lightgray', color: 'lightgray'}}>{word}</div>
      )}
    </div>
  );
}
