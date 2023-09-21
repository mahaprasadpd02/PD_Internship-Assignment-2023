// // Client 
// const token = 'BQDdUVaoOC1HzB1oahTxbh98LWi4aSroa6-2HsFBTRSZ-3UZ1-oOfyM0qbnHkhZIjXBuQDDXFmARTX-6KY8xvf1Gf5LLrpaR6VwTQt3E4obk-8DtDBBLXDo9geqpVE0AiiNGHLRORZLg4b0Co33RG-kcK1AGoUfltl7jVpVeny96o9yzQ3DTa0358zts3hbEkGdGShePPWT8UA19m7xPazsj6fyOlntLlMM7VUDw3zz6TWjgPxAT6LAWVGxRiY5_wRqGg92qCpVsoNkcm8tis-1BP5Z_';
// const url = "https://api.spotify.com/v1/artists?ids=2GoeZ0qOTt6kjsWW4eA6LS%2C0oOet2f43PA68X5RxKobEy%2C7uIbLdzzSEqnX0Pkrb56cR%2C4YRxDV8wJFPHPTeXepOstw%2C1Xyo4u8uXC1ZmMpatF05PJ%2C1dVygo6tRFXC8CSWURQJq2%2C4fEkbug6kZzzJ8eYX6Kbbp%2C2oSONSC9zQ4UonDKnLqksx%2C4IKVDbCSBTxBeAsMKjAuTs"

// const request = new Request(
//     url,{
//         headers:{
//             'Authorization': `Bearer ${token}`
//         },
// })

 
// async function getData() {
//     try {
//         const response = await fetch(request);
//         const data = await response.json();
//         console.log(data);
        
//         // Get the data-container element
//         const dataContainer = document.getElementById("data-container");

//         // Create an HTML structure to display the data (modify as needed)
//         const artistList = document.createElement("ul");

//         // Loop through the data and create list items for each artist
//         data.artists.forEach(artist => {
//             const listItem = document.createElement("li");
//             listItem.textContent = `Artist Name: ${artist.name}, Popularity: ${artist.popularity}`;
//             artistList.appendChild(listItem);
//         });

//         // Append the artistList to the data-container
//         dataContainer.appendChild(artistList);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }
// getData()

// const token = 'BQCmEouHc_qwMxaqMWZDkN-26jrAhAvnnIh2-yea2um67YDKFIsqxzOaCYsrU4hDVPVgVkamuYPOsrU_2T4dc9x6TV7DAgpalhDaLrv2SwI3qWSnG3t0aiPFXPHSmrluC-AzFy4sumvmphDYP_cmdMhbBXZxuh-wPgkaMoHfGFSCBLyU05lw5uPBQl3SXtqzTevv2VXnjRth18UybuMKFKEnPsMpT2JN1SlVMsjQoUPHSz8m0R0gbEsD-jGAAQyTeQFLboaxk5Z8EfXiK0JFQjoAHjEH';
// const artistIds = [
//   '7uIbLdzzSEqnX0Pkrb56cR',
//   '2GoeZ0qOTt6kjsWW4eA6LS',
//   '1dVygo6tRFXC8CSWURQJq2',
//   '4YRxDV8wJFPHPTeXepOstw',
//   '2oSONSC9zQ4UonDKnLqksx',
//   '4IKVDbCSBTxBeAsMKjAuTs',
//   '4fEkbug6kZzzJ8eYX6Kbbp',
//   '0oOet2f43PA68X5RxKobEy',
//   '1mYsTxnqsietFxj1OgoGbG',
//   '0GF4shudTAFv8ak9eWdd4Y',
//   '2JSYASbWU5Y0fVpts3Eq7g',
//   '5GnnSrwNCGyfAU4zuIytiS'
// ];

// const dataContainer = document.getElementById("data-container");

// async function fetchArtistData(artistId) {
//   const artistUrl = `https://api.spotify.com/v1/artists/${artistId}`;
//   const headers = {
//     'Authorization': `Bearer ${token}`
//   };

//   try {
//     const response = await fetch(artistUrl, { headers });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching artist data:", error);
//     return null;
//   }
// }

// async function getData() {
//   try {
//     const artistDataPromises = artistIds.map(fetchArtistData);
//     const artistDataArray = await Promise.all(artistDataPromises);

//     const artistList = document.createElement("ul");

//     artistDataArray.forEach(artist => {
//       if (artist) {
//         const listItem = document.createElement("li");
//         listItem.innerHTML = `
//           <h3>Artist Name: ${artist.name}</h3>
//           <p>Follower: ${artist.followers.total}</p>
//           <p>Music Kind: ${artist.genres.join(', ')}</p>
//           <p>Popularity: ${artist.popularity}</p>
//           <img src="${artist.images[0].url}" alt="${artist.name}'s Image">
//         `;
//         artistList.appendChild(listItem);
//       }
//     });

//     dataContainer.appendChild(artistList);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// getData();


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
    console.log('Main function called.');
};

main();