import {combineReducers} from 'redux';

export const songsReducer = () => {
  return [
    {title: 'Back In Black', duration: ' 3:00'},
    {title: 'Behind the Wall of Sleep', duration: '3:23'},
    {title: 'Besser du Renst', duration: ' 4:00'},
    {title: 'Molly Chambers', duration: '2:30'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});