// Open ABA payment link in new tab (so user stays on the page)
function openABALink(type) {
  const urls = {
    khr: 'https://pay.ababank.com/JFPJMo6DK7iGneS78',
    usd: 'https://pay.ababank.com/kmnY6HysgbQQe3pn7'
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
