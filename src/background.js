chrome.tabs.onActivated.addListener(() => {
  chrome.storage.sync.get(['liveSending'], (result) => {
    if (result.liveSending) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const url = tabs[0].url;
        console.log('Live sending is:', result.liveSending);
        console.log('Sending URL:', url);
        sendUrlToServer(url); // Call the function to send URL to server
      });
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.storage.sync.get(['liveSending'], (result) => {
      if (result.liveSending && tab.active) {
        console.log('Sending URL:', tab.url);
        sendUrlToServer(tab.url); // Call the function to send URL to server

      }
    });
  }
});

function sendUrlToServer(url) {
  fetch('http://localhost:5000/receive-url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url })
  })
  .then(response => response.text())
  .then(data => console.log('Server response:', data))
  .catch(error => console.error('Error sending URL:', error));
}
