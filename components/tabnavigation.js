function openTab(event, tabId) {
    var i, tabcontent, tablinks;

    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content and add active class to the clicked tab link
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");

    // Store the selected tab ID in localStorage
    localStorage.setItem("selectedTab", tabId);
}

function loadDefaultTab() {
    // Get the default tab ID from localStorage or default to "tab1"
    var defaultTabId = localStorage.getItem("selectedTab") || "tab1";

    // Show the default tab content
    document.getElementById(defaultTabId).style.display = "block";

    // Add active class to the corresponding tab link
    var activeTabLink = document.querySelector(".tablinks[data-tab-id='" + defaultTabId + "']");
    if (activeTabLink) {
        activeTabLink.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Load the default tab when the page loads
    loadDefaultTab();
});