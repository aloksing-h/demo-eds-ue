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

    // Add class to all <li> elements
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

            // Insert wrapper before the <p>
            callbackP.parentNode.insertBefore(wrapper, callbackP);

            // Move <p> and <ul> inside wrapper
            wrapper.appendChild(callbackP);
            wrapper.appendChild(ul5);
        }
    }

    const sectional = block.querySelector(".flexicap-fund.sec-2 .button-container>div>div");
    if (sectional) {
        sectional.classList.add('new-ad');
    }
}
