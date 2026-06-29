(function () {
  function setLoading(btn, loading) {
    if (loading) {
      btn.disabled = true;
      btn.dataset.label = btn.textContent.trim();
      btn.innerHTML =
        '<span style="display:inline-flex;align-items:center;justify-content:center;gap:8px;">' +
        '<svg style="animation:bb-spin .7s linear infinite;flex-shrink:0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">' +
        '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>' +
        '</svg>' + btn.dataset.label + '</span>';
    } else {
      btn.disabled = false;
      btn.innerHTML = btn.dataset.label || btn.innerHTML;
    }
  }

  function handleCheckout(e) {
    e.preventDefault();
    var btn = e.currentTarget;
    setLoading(btn, true);
    window.location.href = '/checkout';
  }

  function init() {
    var btn = document.querySelector('.bb-checkout-btn');
    if (!btn) return;

    if (!document.getElementById('bb-spin-style')) {
      var s = document.createElement('style');
      s.id = 'bb-spin-style';
      s.textContent = '@keyframes bb-spin{to{transform:rotate(360deg)}}';
      document.head.appendChild(s);
    }

    btn.addEventListener('click', handleCheckout);
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
