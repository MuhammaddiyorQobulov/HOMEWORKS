const genres = [
  {
    _id: "62e0dd25a92da7816ff603cf",
    name: "Horror",
  },
  {
    _id: "62e205aea01bc724f00bf9db",
    name: "Drama",
  },
  {
    _id: "62e205b8a01bc724f00bf9dd",
    name: "Comedy",
  },
  {
    _id: "62e205c2a01bc724f00bf9e1",
    name: "Detective",
  },
];

export function fakeGetGenres() {
  return [...genres];
}

export function fakeGetGenre(genreID) {
  const genre = genres.find(({ _id }) => _id === genreID);
  return { ...genre };
}
