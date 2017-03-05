export function seriesInfoLoadComplete(data) {
  return { type: 'SERIES_INFO@LOAD_COMPLETE', data
  };
}

export function findAllCharacters(data) {
  return { type: 'CHARACTERS@FIND_ALL_COMPLETE', data
  };
}

export function findAllComics(data) {
  return { type: 'COMICS@FIND_ALL_COMPLETE', data
  };
}

export function setModal(data) {
  return { type: 'MODAL@SET', data
  };
}

export function clearModal(data) {
  return { type: 'MODAL@CLEAR', data
  };
}

// Thunk

export function seriesInfoSearch(name) {
  return (next) => {
    fetch('http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}&apikey=APIKEY')
      .then(r => r.json())
      .then((data) => {
        next(seriesInfoLoadComplete(data));
      });
  };
}

export function charactersFindForId(id) {
  return (next) => {
    fetch('http://gateway.marvel.com/v1/public/series/${id}/characters?apikey=APIKEY')
      .then(r => r.json())
      .then((data) => {
        next(charactersLoadComplete(data));
      });
  };
}

export function comicsFindForId(id) {
  return (next) => {
    fetch('http://gateway.marvel.com/v1/public/series/${id}/comics?apikey=APIKEY')
      .then(r => r.json())
      .then((data) => {
        next(comicsLoadComplete(data));
      });
  };
}
