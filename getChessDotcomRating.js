function getRating(username, mode) {
  // https://www.chess.com/news/view/published-data-api
  const apiURL = 'https://api.chess.com/pub/player/' + username + '/stats';
  if (mode != 'chess_rapid' && mode != 'chess_blitz' && mode != 'chess_bullet') {
    throw new Error('Invalid mode');
  }
  
  return fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    return data[mode].last.rating;
  })
  .catch(error => {
    console.error('Error:', error);
  });

}

const rating1 = getRating('hikaru', 'chess_rapid');
const rating2 = getRating('hikaru', 'chess_blitz');
const rating3 = getRating('hikaru', 'chess_bullet');

const printRating = () => {
  rating1.then((a) => {
    console.log(a);
  });
  rating2.then((a) => {
    console.log(a);
  });
  rating3.then((a) => {
    console.log(a);
  });
};

printRating()