document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('bike-quiz').addEventListener('submit', function(e) {
      e.preventDefault();
  
      fetch('bike_data.json')
        .then(response => response.json())
        .then(data => {
          const form = e.target;
          const height = form.elements['height'].value;
          const type = form.elements['type'].value;
          const terrain = form.elements['terrain'].value;
  
          const budgetCheckboxes = form.querySelectorAll('input[name="budget"]:checked');
          const selectedBudgets = Array.from(budgetCheckboxes).map(cb => cb.value);
  
          if (selectedBudgets.length === 0) {
            alert("Please select at least one budget option.");
            return;
          }
  
          const matches = data.filter(bike =>
            bike.height.includes(height) &&
            bike.type.includes(type) &&
            bike.terrain.includes(terrain) &&
            selectedBudgets.includes(bike.budget)
          );
  
          const recommendation = document.getElementById('recommendation');
  
          if (matches.length > 0) {
            recommendation.innerHTML = matches.map(bike => `
              <div class="bike-card">
                <h2>${bike.name}</h2>
                <p>${bike.description}</p>
                <a href="${bike.affiliateLink}" target="_blank">View on Amazon</a>
              </div>
            `).join('');
          } else {
            recommendation.textContent = "No bikes found for your preferences — try adjusting your choices!";
          }
        })
        .catch(error => {
          console.error('Error fetching bike data:', error);
        });
    });
  });
  