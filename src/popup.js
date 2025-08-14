document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('liveToggle');

  // Load saved state
  chrome.storage.sync.get(['liveSending'], (result) => {
    toggle.checked = !!result.liveSending;
  });

  toggle.addEventListener('change', () => {
    chrome.storage.sync.set({ liveSending: toggle.checked });
    // Optionally show status
    document.getElementById('status').textContent = toggle.checked
      ? 'Live sending ON'
      : 'Live sending OFF';
  });
});