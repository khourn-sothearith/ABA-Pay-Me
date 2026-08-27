// Open ABA payment link in new tab (so user stays on the page)
function openABALink(type) {
  const urls = {
    khqr: 'https://pay.ababank.com/oRF8/gjryg4u6'
  };
  const url = urls[type];
  if (url) window.open(url, '_blank', 'noopener');
}

// Force-download a QR image with a clean filename
async function forceDownload(src, filename) {
  try {
    const response = await fetch(src);
    if (!response.ok) throw new Error('Network error');
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename || src.split('/').pop();
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(blobUrl);
  } catch {
    alert('Download failed. Please long-press the image and save manually.');
  }
}
// Auto copy account number by click on that number
function copyAccountNumber(element) {
    const accountNumber = element.innerText.trim();

    navigator.clipboard.writeText(accountNumber)
        .then(() => {
            const originalText = element.innerText;

            element.innerText = "Copied! ✓";

            setTimeout(() => {
                element.innerText = originalText;
            }, 1500);
        })
        .catch((error) => {
            console.error("Failed to copy:", error);
        });
}