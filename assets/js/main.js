// Load sidebar state on page load
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById("wrapper");
  const savedState = localStorage.getItem("sidebarState");
  if (savedState === "collapsed") {
    wrapper.classList.add("collapsed");
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