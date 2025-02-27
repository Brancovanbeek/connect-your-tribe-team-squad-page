function filterMembers() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const memberItems = document.querySelectorAll('.member-item');

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
