function filterMembers() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const memberItems = document.querySelectorAll('.flipcard');

    memberItems.forEach(item => {
      const name = item.textContent.toLowerCase();
      item.style.display = name.includes(searchInput) ? '' : 'none';
    });
}



document.addEventListener("DOMContentLoaded", function () {
  const flipcards = document.querySelectorAll(".flipcard");

  flipcards.forEach(card => {
      card.addEventListener("click", function () {
          card.classList.toggle("is-flipped");
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".flipcard").forEach((flipCard) => {
      const usernameInput = flipCard.querySelector("input[name='username']");
      
      // Voorkom dat de flipcard draait als er op de input wordt geklikt
      usernameInput.addEventListener("click", (event) => {
          event.stopPropagation();  // Zorgt ervoor dat de klik op de input de flip niet triggert
      });
  });
});




