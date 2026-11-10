// Точка входа: запускает все модули страницы
import { initDrawer } from './modules/drawer.js';
import { initSearch } from './modules/search.js';

document.addEventListener('DOMContentLoaded', () => {
  initDrawer();
  initSearch();
});
