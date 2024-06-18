document.addEventListener("DOMContentLoaded", async function () {
  // Get the current tab
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Get cookies for the current tab
  chrome.cookies.getAll({ url: tab.url }, function (cookies) {
    const cookieList = document.getElementById("cookie-list");
    const domain = new URL(tab.url).hostname;

    cookies.forEach((cookie) => {
      const cookieElement = document.createElement("div");
      cookieElement.classList.add("cookie");
      cookieElement.textContent = `Domain: ${domain}, Cookie Name: ${cookie.name}, Cookie Value: ${cookie.value}`;
      cookieList.appendChild(cookieElement);
    });
  });
});
