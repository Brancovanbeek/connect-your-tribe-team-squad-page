function filterMembers() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const memberItems = document.querySelectorAll('.member-item');

    memberItems.forEach(item => {
      const name = item.textContent.toLowerCase();
      item.style.display = name.includes(searchInput) ? '' : 'none';
    });
}