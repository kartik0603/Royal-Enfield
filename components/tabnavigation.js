function openTab(event, tabId, containerId) {
    var i, tabcontent, tablinks;
    var container = document.getElementById(containerId);

    // Hide all tab contents within the current container
    tabcontent = container.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tab links within the current container
    tablinks = container.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content and add active class to the clicked tab link
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");

    // Store the selected tab ID for the current container in localStorage
    localStorage.setItem("selectedTab_" + containerId, tabId);
  }

  function loadDefaultTab(containerId) {
    // Get the default tab ID for the current container from localStorage or default to the first tab
    var defaultTabId = localStorage.getItem("selectedTab_" + containerId) || (containerId + "-tab1");

    // Show the default tab content for the current container
    document.getElementById(defaultTabId).style.display = "block";

    // Add active class to the corresponding tab link within the current container
    var activeTabLink = document.querySelector("#" + containerId + " .tablinks[data-tab-id='" + defaultTabId + "']");
    if (activeTabLink) {
        activeTabLink.classList.add("active");
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Load the default tab for each container when the page loads
    loadDefaultTab('motorcycles');
    loadDefaultTab('rides');
    loadDefaultTab('apparel');
    loadDefaultTab('Accessories');

  });