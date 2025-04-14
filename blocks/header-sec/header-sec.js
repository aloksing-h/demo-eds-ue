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

    // Group paragraphs in .column-3 into two sections
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

            // ✅ Convert span to div
            const spanSearch = section2.querySelector("span.icon-search");
            console.log("hello");
            
            if (spanSearch) {
                const divSearch = document.createElement("div");
                divSearch.className = spanSearch.className;

                while (spanSearch.firstChild) {
                    divSearch.appendChild(spanSearch.firstChild);
                }

                spanSearch.replaceWith(divSearch);
            }

            // ✅ Add border to <p> on input focus
            const input = section2.querySelector("input[type='text']");
            const parentParagraph = input?.closest("p");

            if (input && parentParagraph) {
                input.addEventListener("focus", () => {
                    parentParagraph.classList.add("input-focus-border");
                });

                input.addEventListener("blur", () => {
                    parentParagraph.classList.remove("input-focus-border");
                });
            }
        }
    }



    // Login dropdown
    const loginSection = block.querySelector(".column-3-section-1");
    const loginTrigger = loginSection?.querySelector("p:nth-child(3)");

    if (loginTrigger) {
        loginTrigger.classList.add("login-trigger");

        const dropdown = document.createElement("div");
        dropdown.classList.add("login-dropdown");

        dropdown.innerHTML = `
        <a href="https://www.motilaloswalmf.com/login/investor">Investor Login</a>
        <a href="https://www.motilaloswalmf.com/login/partner">Partner Login</a>
      `;

        loginTrigger.appendChild(dropdown);

        loginTrigger.addEventListener("click", (e) => {
            e.stopPropagation();
            loginTrigger.classList.toggle("active");
        });

        document.addEventListener("click", () => {
            loginTrigger.classList.remove("active");
        });
    }

    // ✅ Add search input inside .icon-search
    const searchSection = block.querySelector(".column-3-section-2");
    const searchWrapper = searchSection?.querySelector(".icon-search");

    if (searchWrapper) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Search for fund";
        input.classList.add("search-input");

        // Optionally remove the text node next to icon
        const textNode = searchWrapper.nextSibling;
        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            textNode.remove();
        }

        searchWrapper.appendChild(input);
    }
}
