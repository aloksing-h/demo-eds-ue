// import Swiper from "../swiper-sec/swiper-bundle.min.js";
// import swiperBundleMin from "../swiper-sec/swiper-bundle.min.js";

export default function decorate(block) {
    Array.from(block.children).forEach((row, rowIndex) => {
        row.classList.add("flexicap-fund");
        row.classList.add(`sec-${rowIndex + 1}`);
        Array.from(row.children).forEach((column, colIndex) => {
            column.classList.add("flexicap-fund-column");
            column.classList.add(`subtxt-${colIndex + 1}`);
        });
    });

    const listBlocks = block.querySelectorAll(".flexicap-fund-column ul");
    listBlocks.forEach((ul, index) => {
        ul.classList.add(`flexicap-fund-ul-${index + 1}`);
    });

    const listItems = block.querySelectorAll("li");
    listItems.forEach((li, index) => {
        li.classList.add(`flexicap-list-${index + 1}`);
    });

    const callbackP = Array.from(block.querySelectorAll("p")).find(p =>
        p.textContent.trim().toLowerCase() === "request call back"
    );
    if (callbackP) {
        const ul5 = callbackP.nextElementSibling;
        if (ul5 && ul5.classList.contains("flexicap-fund-ul-5")) {
            const wrapper = document.createElement("div");
            wrapper.classList.add("contact-links");
            callbackP.parentNode.insertBefore(wrapper, callbackP);
            wrapper.appendChild(callbackP);
            wrapper.appendChild(ul5);
        }
    }

    const sectional = block.querySelector(".flexicap-fund.sec-2 .button-container>div>div");
    if (sectional) {
        sectional.classList.add('new-ad');
    }

    // 🔽 Dropdown functionality with default selection and highlight
    const list1 = block.querySelector(".flexicap-list-1");
    if (list1) {
        const p = list1.querySelector("p");
        const dropdown = list1.querySelector("ul");

        if (p && dropdown) {
            dropdown.style.display = "none";
            p.style.cursor = "pointer";

            const options = dropdown.querySelectorAll("li");

            // Set first option as selected by default
            if (options.length > 0) {
                p.textContent = options[0].textContent;
                options[0].style.backgroundColor = "#d0e8ff"; // selected background
            }

            // Toggle dropdown on paragraph click
            p.addEventListener("click", (e) => {
                e.stopPropagation();
                dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
            });

            // Handle option selection
            options.forEach(item => {
                item.style.padding = "8px";
                item.style.cursor = "pointer";

                item.addEventListener("click", () => {
                    p.textContent = item.textContent;
                    dropdown.style.display = "none";

                    // Clear highlight on all items
                    options.forEach(opt => opt.style.backgroundColor = "");

                    // Highlight selected
                    item.style.backgroundColor = "#d0e8ff";
                });
            });

            // Close dropdown on outside click
            document.addEventListener("click", (e) => {
                if (!list1.contains(e.target)) {
                    dropdown.style.display = "none";
                }
            });
        }
    }

    // const ul5 = document.querySelector('.flexicap-fund-ul-5');
    // const ul6 = ul5?.querySelector('.flexicap-fund-ul-6');

    // if (ul5 && ul6) {
    //     ul5.setAttribute('tabindex', '0'); // make ul focusable if needed
    //     ul6.style.display = 'block';

    //     ul5.addEventListener('focusin', () => {
    //         ul6.style.display = 'none';
    //     });

    //     ul5.addEventListener('focusout', (e) => {
    //         // Delay to allow focus transfer to ul6 if needed
    //         setTimeout(() => {
    //             if (!ul5.contains(document.activeElement)) {
    //                 ul6.style.display = 'block';
    //             }
    //         }, 10);
    //     });
    // }

}


