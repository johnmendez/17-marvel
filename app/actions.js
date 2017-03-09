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
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}`)
      .then(r => r.json())
      .then((data) => {
        const series = data.data.results[0];
        next(seriesInfoLoadComplete(series));
        next(charactersFindForId(series.id));
        next(comicsFindForId(series.id));
      });
  };
}

export function charactersFindForId(id) {
  return (next) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/characters`)
      .then(r => r.json())
      .then((data) => {
        next(findAllCharacters(data.data.results));
      });
  };
}

export function comicsFindForId(id) {
  return (next) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/comics`)
      .then(r => r.json())
      .then((data) => {
        next(findAllComics(data.data.results));
      });
  };
}
