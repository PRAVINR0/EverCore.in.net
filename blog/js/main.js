// =====================
// Blog Posts Data
// =====================
const posts = [
  {
    title: "How AI is Transforming Education",
    date: "2025-06-22",
    category: "ai",
    link: "posts/ai-education.html",
    summary: "Explore how artificial intelligence is reshaping the learning experience for students and teachers."
  },
  {
    title: "Top 5 VS Code Extensions for Developers",
    date: "2025-06-21",
    category: "tech",
    link: "posts/vscode-extensions.html",
    summary: "A curated list of must-have VS Code extensions to boost your dev productivity."
  },
  {
    title: "Mental Fitness for Creators",
    date: "2025-06-20",
    category: "life",
    link: "posts/mental-fitness.html",
    summary: "Simple strategies to stay mentally sharp and creative in a fast world."
  },
  // 🔁 Add more blog posts here...
];

// =====================
// Theme Toggle
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("toggle-theme");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  // =====================
  // Render Posts to UI
  // =====================
  const container = document.getElementById("postsContainer");
  const searchBar = document.getElementById("searchBar");
  const categoryButtons = document.querySelectorAll(".category-btn");

  function displayPosts(list) {
    if (!container) return;
    container.innerHTML = "";
    list.forEach(post => {
      const card = document.createElement("div");
      card.className = "post-card";
      card.innerHTML = `
        <h3><a href="${post.link}">${post.title}</a></h3>
        <p class="post-meta">${post.date} · ${post.category.toUpperCase()}</p>
        <p>${post.summary}</p>
      `;
      container.appendChild(card);
    });
  }

  if (container) {
    displayPosts(posts);
  }

  if (searchBar) {
    searchBar.addEventListener("input", () => {
      const keyword = searchBar.value.toLowerCase();
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(keyword) ||
        post.summary.toLowerCase().includes(keyword)
      );
      displayPosts(filtered);
    });
  }

  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category");
      if (cat === "all") return displayPosts(posts);
      const filtered = posts.filter(p => p.category === cat);
      displayPosts(filtered);
    });
  });
});
