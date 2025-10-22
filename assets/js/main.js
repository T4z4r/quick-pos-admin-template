// Load sidebar state on page load
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById("wrapper");
  const savedState = localStorage.getItem("sidebarState");
  if (savedState === "collapsed") {
    wrapper.classList.add("collapsed");
  }

  // Load dark mode state
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  const wrapper = document.getElementById("wrapper");
  if (wrapper.classList.contains("collapsed")) {
    wrapper.classList.remove("collapsed");
    localStorage.setItem("sidebarState", "expanded");
  } else {
    wrapper.classList.add("collapsed");
    localStorage.setItem("sidebarState", "collapsed");
  }
});

// Dark mode toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const icon = toggleBtn.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    icon.className = "bi bi-moon";
  } else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    icon.className = "bi bi-sun";
  }
});