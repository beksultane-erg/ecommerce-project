// Поиск: обработка отправки формы

export function initSearch() {
  const form = document.getElementById('searchForm');
  if (!form) return;

  const input = form.querySelector('.search__input');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = input.value.trim();
    if (!query) {
      input.focus();
      return;
    }

    // Здесь будет запрос к серверу или переход на страницу результатов,
    // например: window.location.href = `/search?q=${encodeURIComponent(query)}`;
    console.log('Поиск:', query);
  });
}
