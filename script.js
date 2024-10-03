document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
  
    fetch('https://dogapi.dog/api/v2/breeds')
      .then(response => response.json())
      .then(data => {
        const breeds = data.data || [];
  
        breeds.forEach(breed => {
          const card = `
            <div class="bg-yellow-100 shadow-md rounded-lg p-5 transition duration-300 hover:shadow-lg">
              <h3 class="text-xl font-bold text-black mb-2">${breed.attributes.name}</h3>
              <p class="text-black"><strong>ID:</strong> ${breed.id}</p>
              <p class="text-black"><strong>Type:</strong> ${breed.attributes.type}</p>
              <p class="mt-2 text-black">${breed.attributes.description || 'No description available'}</p>
            </div>
          `;
          cardContainer.innerHTML += card;
        });
      })
      .catch(() => {
        cardContainer.innerHTML = '<p>Error fetching breeds. Please try again later.</p>';
      });
  });
  