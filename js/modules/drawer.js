// Боковое меню: открытие и закрытие по бургеру, крестику, фону и Esc

export function initDrawer() {
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('drawerClose');

  if (!burger || !drawer || !overlay || !closeBtn) return;

  const isOpen = () => drawer.classList.contains('is-open');

  function setState(open) {
    drawer.classList.toggle('is-open', open);
    overlay.classList.toggle('is-open', open);
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    drawer.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('no-scroll', open);
  }

  function open() {
    setState(true);
    closeBtn.focus();
  }

  function close() {
    setState(false);
    burger.focus();
  }

  burger.addEventListener('click', () => (isOpen() ? close() : open()));
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) close();
  });
}
