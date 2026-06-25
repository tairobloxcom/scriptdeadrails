(function () {
  document.documentElement.classList.remove('no-js', 'loading-site');
  document.documentElement.classList.add('js');

  function renderStars() {
    document.querySelectorAll('.rating[data-stars]').forEach(function (el) {
      if (el.dataset.rendered === '1') return;
      var value = parseFloat(el.getAttribute('data-stars') || '0');
      var full = Math.round(value);
      el.innerHTML = '';
      for (var i = 1; i <= 5; i++) {
        var span = document.createElement('span');
        span.className = 'github-star';
        span.textContent = i <= full ? '★' : '☆';
        el.appendChild(span);
      }
      el.dataset.rendered = '1';
    });
  }

  function setupMobileMenu() {
    var trigger = document.querySelector('[data-open="#main-menu"]');
    var menu = document.querySelector('#main-menu');
    if (!trigger || !menu) return;

    var close = document.createElement('button');
    close.className = 'github-menu-close';
    close.type = 'button';
    close.setAttribute('aria-label', 'Đóng menu');
    close.innerHTML = '×';
    var sidebar = menu.querySelector('.sidebar-menu') || menu;
    sidebar.insertBefore(close, sidebar.firstChild);

    function openMenu(e) {
      if (e) e.preventDefault();
      menu.classList.add('github-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
    function closeMenu(e) {
      if (e) e.preventDefault();
      menu.classList.remove('github-open');
      trigger.setAttribute('aria-expanded', 'false');
    }

    trigger.addEventListener('click', openMenu);
    close.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeMenu(e);
    });
    menu.addEventListener('click', function(e) {
      if (e.target === menu) closeMenu(e);
    });
  }

  function setupViewMore() {
    document.querySelectorAll('.custom-view-more-btn').forEach(function(btn) {
      btn.addEventListener('click', function () {
        var box = btn.previousElementSibling;
        if (!box || !box.classList.contains('custom-view-more')) return;
        box.classList.toggle('is-expanded');
        btn.textContent = box.classList.contains('is-expanded') ? 'Thu gọn' : 'Xem thêm';
      });
    });
  }

  function fixShareEmail() {
    document.querySelectorAll('a[href^="/cdn-cgi/l/email-protection"], a[href*="/cdn-cgi/l/email-protection"]').forEach(function(a) {
      a.href = 'mailto:contact@tairoblox.com';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderStars();
    setupMobileMenu();
    setupViewMore();
    fixShareEmail();
  });
})();