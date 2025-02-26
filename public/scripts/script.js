function filterMembers() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const memberItems = document.querySelectorAll('.flipcard');

    memberItems.forEach(item => {
      const name = item.textContent.toLowerCase();
      item.style.display = name.includes(searchInput) ? '' : 'none';
    });
}


