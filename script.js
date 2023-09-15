// Client 
const token = 'BQDs0osH2w2tRnKNoy-qxmdJ7OborA7CLshqZwxgkqulsIAKsvlQyYalTszv-MXE2zUzQMLQya2X9rwPmTU3cTRatpZtwbQzuBNyBOpXbvCVO-BrHK-6fjPb_EBzA-63trD9RDuIvS2DO6ckpmjf_7-xl7DvIge_ph_j5iH6ZQ8yv1tRlMWHm_1Vj4wVyyWtuqkMHKza4ae9ZqdcuEPv-Zw39t_ROOw_6EsGsk6_wZyOHCJFmq4eCIkmH9r487NbHI44kqCGUVzecj2J2RnCIcsdQqsB';
const url = "https://api.spotify.com/v1/artists?ids=2GoeZ0qOTt6kjsWW4eA6LS%2C0oOet2f43PA68X5RxKobEy%2C7uIbLdzzSEqnX0Pkrb56cR%2C06HL4z0CvFAxyc27GXpf02%2C6VuMaDnrHyPL1p4EHjYLi7%2C4YRxDV8wJFPHPTeXepOstw%2C4IKVDbCSBTxBeAsMKjAuTs%2C1dVygo6tRFXC8CSWURQJq2%2C4zCH9qm4R2DADamUHMCa6O%2C1tqysapcCh1lWEAc9dIFpa"

const request = new Request(
    url,{
        headers:{
            'Authorization': `Bearer ${token}`
        },
})

 
async function getData() {
    try {
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
        
        // Get the data-container element
        const dataContainer = document.getElementById("data-container");

        // Create an HTML structure to display the data (modify as needed)
        const artistList = document.createElement("ul");

        // Loop through the data and create list items for each artist
        data.artists.forEach(artist => {
            const listItem = document.createElement("li");
            listItem.textContent = `Artist Name: ${artist.name}, Popularity: ${artist.popularity}`;
            artistList.appendChild(listItem);
        });

        // Append the artistList to the data-container
        dataContainer.appendChild(artistList);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getData()