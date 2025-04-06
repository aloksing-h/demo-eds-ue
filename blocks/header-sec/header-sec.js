export default function decorate(block) {
    Array.from(block.children).forEach((row) => {
      row.classList.add("header-sec-container");
  
      Array.from(row.children).forEach((column, index) => {
        column.classList.add("header-sec-container-column");
        column.classList.add(`column-${index + 1}`);
      });
    });
  
    const blockdrop = block.querySelectorAll(".header-sec-container-column ul");
    Array.from(blockdrop).forEach((column, index) => {
      column.classList.add("header-sec-container-ul-" + (index + 1));
    });
  
    const selectDiv = document.createElement("select");
    selectDiv.classList.add("selectDrowpDown");
  
    const ul = block.querySelectorAll(".header-sec-container-ul-1 li");
    ul.forEach(li => {
      const option = document.createElement('option');
      option.value = li.textContent;
      option.textContent = li.textContent;
      selectDiv.appendChild(option);
    });
  
    const targetUl = block.querySelector(".header-sec-container-ul-1");
    if (targetUl) {
      targetUl.innerHTML = "";
      targetUl.appendChild(selectDiv);
    }
  
    // ✅ Column-3 section split
    const column3 = block.querySelector(".column-3");
    if (column3) {
      const paragraphs = column3.querySelectorAll("p");
      if (paragraphs.length >= 5) {
        const section1 = document.createElement("div");
        section1.classList.add("column-3-section-1");
  
        const section2 = document.createElement("div");
        section2.classList.add("column-3-section-2");
  
        for (let i = 0; i < 3; i++) {
          section1.appendChild(paragraphs[i]);
        }
  
        for (let i = 3; i < paragraphs.length; i++) {
          section2.appendChild(paragraphs[i]);
        }
  
        column3.innerHTML = "";
        column3.append(section1, section2);
      }
    }
  
    // ✅ Add dropdown to login link in column-3-section-2
    const loginSection = block.querySelector(".column-3-section-2");
    const loginTrigger = loginSection?.querySelector("p");
  
    if (loginTrigger) {
      const dropdown = document.createElement("div");
      dropdown.classList.add("login-dropdown");
  
      dropdown.innerHTML = `
        <a href="https://www.motilaloswalmf.com/login/investor">👤 Investor Login</a>
        <a href="https://www.motilaloswalmf.com/login/partner">📅 Partner Login</a>
      `;
  
      loginTrigger.style.position = "relative";
      loginTrigger.style.cursor = "pointer";
      loginTrigger.appendChild(dropdown);
  
      // Style dropdown with JS
      Object.assign(dropdown.style, {
        display: "none",
        position: "absolute",
        top: "100%",
        right: "0",
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        padding: "10px",
        minWidth: "160px",
        zIndex: "999",
      });
  
      Array.from(dropdown.children).forEach((link) => {
        Object.assign(link.style, {
          display: "block",
          padding: "8px 12px",
          textDecoration: "none",
          color: "#000",
          fontWeight: "500",
        });
  
        link.addEventListener("mouseover", () => link.style.background = "#f0f0f0");
        link.addEventListener("mouseout", () => link.style.background = "transparent");
      });
  
      // Show/hide dropdown on click
      loginTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
      });
  
      // Close dropdown on outside click
      document.addEventListener("click", (e) => {
        if (!loginTrigger.contains(e.target)) {
          dropdown.style.display = "none";
        }
      });
    }
  }
  