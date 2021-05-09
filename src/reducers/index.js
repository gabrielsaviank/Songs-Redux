
const songsReducer = () => {
  return [
    {title: 'Back In Black', duration: ' 3:00'},
    {title: 'Behind the Wall of Sleep', duration: '3:23'},
    {title: 'Besser du Renst', duration: ' 4:00'},
    {title: 'Molly Chambers', duratio: '2:30'}
  ];
};

const selectedSong = (selectedSong = null, action) => {
  if (selectedSong === 'SONG_SELECTED') {
    return action.payload;
  };

  return selectedSong;
};