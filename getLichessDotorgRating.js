function getRating(username, mode) {
  // https://lichess.org/api#tag/Users/operation/apiUserPerf

  const apiURL = "https://lichess.org/api/user/" + username + "/perf/" + mode;
  if (
    mode != "bullet" &&
    mode != "blitz" &&
    mode != "rapid" &&
    mode != "classical"
  ) {
    throw new Error("Invalid mode");
  }

  return fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.perf.glicko.rating);
      return data.perf.glicko.rating;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

getRating("anonymousblitz", "bullet");
getRating("anonymousblitz", "blitz");
getRating("anonymousblitz", "rapid");
getRating("anonymousblitz", "classical");
