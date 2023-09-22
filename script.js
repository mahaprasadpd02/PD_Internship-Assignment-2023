const clientId = 'c0c880d497364f41b42cac378f630c95';
const clientSecret = '8c50d203479f4dbebf6365a331a1bc0d';
const artistIds = [
  '7uIbLdzzSEqnX0Pkrb56cR',
  '2GoeZ0qOTt6kjsWW4eA6LS',
  '1dVygo6tRFXC8CSWURQJq2',
  '4YRxDV8wJFPHPTeXepOstw',
  '2oSONSC9zQ4UonDKnLqksx',
  '4IKVDbCSBTxBeAsMKjAuTs',
  '4fEkbug6kZzzJ8eYX6Kbbp',
  '0oOet2f43PA68X5RxKobEy',
  '1mYsTxnqsietFxj1OgoGbG',
  '0GF4shudTAFv8ak9eWdd4Y',
  '2JSYASbWU5Y0fVpts3Eq7g',
  '5GnnSrwNCGyfAU4zuIytiS'
  ];


const getAccessToken = async () => {
    
    const basicAuth = btoa(`${clientId}:${clientSecret}`);

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${basicAuth}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    console.log(data);
    return data.access_token;
};


async function fetchArtistData(artistId, accessToken) {
    const artistUrl = `https://api.spotify.com/v1/artists/${artistId}`;
    const headers = {
        'Authorization': `Bearer ${accessToken}`
    };

    try {
        const response = await fetch(artistUrl, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching artist data:", error);
        return null;
    }
}
// Render artists on the webpage
const renderArtists = (artists) => {
    const artistList = document.getElementById('artist-list');
    artists.forEach((artist) => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        const artistName = document.createElement('h2');
        artistName.textContent = artist.name;

        const artistImage = document.createElement('img');
        artistImage.classList.add('artist-image');
        artistImage.src = artist.images[1] ? artist.images[1].url : 'default-image.jpg';
        artistImage.alt = artist.name;

        const listItem = document.createElement("p");
        listItem.textContent = `Popularity: ${artist.popularity},Followers:${artist.followers.total}`;


        artistCard.appendChild(artistImage);
        artistCard.appendChild(artistName);
        artistCard.appendChild(listItem);
        artistList.appendChild(artistCard);
    });
};

const main = async () => {
    try {
        const accessToken = await getAccessToken();
        const artistDataPromises = artistIds.map((artistId) => fetchArtistData(artistId, accessToken));
        const topArtists = await Promise.all(artistDataPromises);
        renderArtists(topArtists);
        console.log(accessToken);
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

main();