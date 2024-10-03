document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
  
    fetch('https://dogapi.dog/api/v2/breeds')
      .then(response => response.json())
      .then(data => {
        const breeds = data.data || [];
  
        breeds.forEach(breed => {
          const card = `
            <div class="bg-yellow-100 shadow-md rounded-lg p-5 transition duration-300 hover:shadow-lg">
              <h3 class="text-xl font-bold text-black mb-2">${breed.attributes.name || 'Unknown Name'}</h3>
              <p class="text-black"><strong>ID:</strong> ${breed.id || 'N/A'}</p>
              <p class="text-black"><strong>Type:</strong> ${breed.type || 'N/A'}</p>
              <p class="mt-2 text-black">${breed.attributes.description || 'No description available'}</p>
  
              <p class="text-black"><strong>Life:</strong></p>
              <p class="text-black"><strong>Max:</strong> ${breed.attributes.life?.max || 'N/A'}</p>
              <p class="text-black"><strong>Min:</strong> ${breed.attributes.life?.min || 'N/A'}</p>
  
              <p class="text-black"><strong>Male Weight:</strong></p>
              <p class="text-black"><strong>Max:</strong> ${breed.attributes.male_weight?.max || 'N/A'}</p>
              <p class="text-black"><strong>Min:</strong> ${breed.attributes.male_weight?.min || 'N/A'}</p>
  
              <p class="text-black"><strong>Female Weight:</strong></p>
              <p class="text-black"><strong>Max:</strong> ${breed.attributes.female_weight?.max || 'N/A'}</p>
              <p class="text-black"><strong>Min:</strong> ${breed.attributes.female_weight?.min || 'N/A'}</p>
  
              <p class="text-black"><strong>Hypoallergenic:</strong> ${breed.attributes.hypoallergenic ? 'Yes' : 'No'}</p>
  
              <p class="text-black"><strong>Relationships:</strong></p>
              <p class="text-black"><strong>ID:</strong> ${breed.attributes.relationships?.group?.data?.id || 'N/A'}</p>
              <p class="text-black"><strong>Type:</strong> ${breed.attributes.relationships?.group?.data?.type || 'N/A'}</p>
            </div>
          `;
          cardContainer.innerHTML += card;
        });
      })
      .catch(() => {
        cardContainer.innerHTML = '<p>Error fetching breeds. Please try again later.</p>';
      });
  });
  