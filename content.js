document.addEventListener("DOMContentLoaded", () => {
    // Example: Detect when a document is opened
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          const documentContent = document.querySelector(".document-viewer");
          if (documentContent) {
            const text = documentContent.innerText;
            chrome.runtime.sendMessage({ type: "processDocument", text });
            observer.disconnect();
          }
        }
      }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  });
  