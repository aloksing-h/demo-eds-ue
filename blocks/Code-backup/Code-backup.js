export default function decorate(block) {
    const container = document.querySelector('.section.etf-funds-container');
    if (!container) return;

    const contentBlocks = container.querySelectorAll(':scope > .default-content-wrapper');
    if (contentBlocks[0]) {
        contentBlocks[0].classList.add('our-funds-heading');
    }
    if (contentBlocks[1]) {
        contentBlocks[1].classList.add('our-funds-description');
    }

    block.innerHTML = "";

    // gettig all schemes from collection node
    const etfTYpe = collectionNode.data.fundType.filter((type) => {
        if (type.typeName == "ETFs") {
            return type;
        }
    });

    const schemes = etfTYpe[0].schemes;
    // console.log(schemes);

    // checking if any schemes is matching with schCode from fundboost
    const filteredCode = fundBoost.data.data.filter((fundcode) => {
        for (let i = 0; i < schemes.length; i++) {
            if (fundcode.schCode == schemes[i]) {
                return fundcode;
            }
        }
    });
    console.log(filteredCode);

    const cardsContent = function cardsContainer(item) {
        return div(
            { class: "submain-container" },
            div(
                { class: "fundCard" },

                // Header Section
                div(
                    { class: "submain-Header" },
                    div(
                        { class: "title-logo" },
                        img({
                            src: "https://motilaloswalmf.com/downloads/images/CE.png",
                            alt: "logo",
                        }),
                        h3(
                            a(
                                {
                                    href: `${window.location.href}/${item.schDetail?.schNameURL || ''}`,
                                },
                                item.schDetail?.schName || ""
                            )
                        )
                    ),
                    ul(
                        { class: "fund-tags" },
                        ...(item.tags?.map(tag => li(tag)) || [])
                    )
                ),

                // Footer Section
                div(
                    { class: "submain-Footer" },
                    div(
                        { class: "fund-data" },
                        div(
                            { class: "fund-data-content" },
                            h3("Current iNAV"),
                            span({ class: "nav-value" }, "31.12")
                        ),
                        div(
                            { class: "fund-data-content" },
                            h3("Previous iNAV"),
                            span({ class: "nav-value" }, "31.12")
                        ),
                        div(
                            { class: "fund-data-content" },
                            h3("Benchmark"),
                            span(item.risk?.benchmark || "")
                        ),
                        div(
                            { class: "fund-data-content" },
                            h3("Risk"),
                            div(
                                span(item.risk?.risk || ""),
                                img({
                                    src: "https://www.motilaloswalmf.com/assets/images/Fundscardsnew/info-icon-blue.svg",
                                    alt: "icon",
                                })
                            )
                        )
                    ),
                    div(
                        { class: "fund-data-button" },
                        a(
                            {
                                href: item.schDetail?.knowMoreURL || "#",
                                class: "know-more-btn",
                            },
                            "Know More"
                        )
                    )
                )
            )
        );
    };

    filteredCode.forEach((data) => {
        const card = cardsContent(data);
        block.appendChild(card);
    });
}


// export default function decorate(block) {
//     Array.from(block.children).forEach((row, rowIndex) => {
//         row.classList.add("flexicap-fund");
//         row.classList.add(`sec-${rowIndex + 1}`);
//         Array.from(row.children).forEach((column, colIndex) => {
//             column.classList.add("flexicap-fund-column");
//             column.classList.add(`subtxt-${colIndex + 1}`);
//         });
//     });

//     const listBlocks = block.querySelectorAll(".flexicap-fund-column ul");
//     listBlocks.forEach((ul, index) => {
//         ul.classList.add(`flexicap-fund-ul-${index + 1}`);
//     });

//     // Add class to all <li> elements
//     const listItems = block.querySelectorAll("li");
//     listItems.forEach((li, index) => {
//         li.classList.add(`flexicap-list-${index + 1}`);
//     });

//     const callbackP = Array.from(block.querySelectorAll("p")).find(p =>
//         p.textContent.trim().toLowerCase() === "request call back"
//     );
//     if (callbackP) {
//         const ul5 = callbackP.nextElementSibling;
//         if (ul5 && ul5.classList.contains("flexicap-fund-ul-5")) {
//             const wrapper = document.createElement("div");
//             wrapper.classList.add("contact-links");

//             // Insert wrapper before the <p>
//             callbackP.parentNode.insertBefore(wrapper, callbackP);

//             // Move <p> and <ul> inside wrapper
//             wrapper.appendChild(callbackP);
//             wrapper.appendChild(ul5);
//         }
//     }

//     const sectional = block.querySelector(".flexicap-fund.sec-2 .button-container>div>div");
//     if (sectional) {
//         sectional.classList.add('new-ad');
//     }
// }


// export default function decorate(block) {
//     Array.from(block.children).forEach((row, rowIndex) => {
//         row.classList.add("flexicap-fund");
//         row.classList.add(`sec-${rowIndex + 1}`);
//         Array.from(row.children).forEach((column, colIndex) => {
//             column.classList.add("flexicap-fund-column");
//             column.classList.add(`subtxt-${colIndex + 1}`);
//         });
//     });

//     const listBlocks = block.querySelectorAll(".flexicap-fund-column ul");
//     listBlocks.forEach((ul, index) => {
//         ul.classList.add(`flexicap-fund-ul-${index + 1}`);
//     });

//     const listItems = block.querySelectorAll("li");
//     listItems.forEach((li, index) => {
//         li.classList.add(`flexicap-list-${index + 1}`);
//     });

//     const callbackP = Array.from(block.querySelectorAll("p")).find(p =>
//         p.textContent.trim().toLowerCase() === "request call back"
//     );
//     if (callbackP) {
//         const ul5 = callbackP.nextElementSibling;
//         if (ul5 && ul5.classList.contains("flexicap-fund-ul-5")) {
//             const wrapper = document.createElement("div");
//             wrapper.classList.add("contact-links");
//             callbackP.parentNode.insertBefore(wrapper, callbackP);
//             wrapper.appendChild(callbackP);
//             wrapper.appendChild(ul5);
//         }
//     }

//     const sectional = block.querySelector(".flexicap-fund.sec-2 .button-container>div>div");
//     if (sectional) {
//         sectional.classList.add('new-ad');
//     }

//     // 🔽 Dropdown functionality (JS-only)
//     const list1 = block.querySelector(".flexicap-list-1");
//     if (list1) {
//         const p = list1.querySelector("p");
//         const dropdown = list1.querySelector("ul");

//         if (p && dropdown) {
//             dropdown.style.display = "none";

//             p.style.cursor = "pointer";

//             p.addEventListener("click", (e) => {
//                 e.stopPropagation();
//                 dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
//             });

//             dropdown.querySelectorAll("li").forEach(item => {
//                 item.addEventListener("click", () => {
//                     p.textContent = item.textContent;
//                     dropdown.style.display = "none";
//                 });
//             });

//             document.addEventListener("click", (e) => {
//                 if (!list1.contains(e.target)) {
//                     dropdown.style.display = "none";
//                 }
//             });
//         }
//     }
// }




const formTop = document.querySelector(".flexicap-form .form-section-top");

if (formTop) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("form-secwrp");
    formTop.parentNode.insertBefore(wrapper, formTop);
    wrapper.appendChild(formTop);
}




const formWrp = document.querySelector(".flexicap-form");

if (formWrp) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("form-secwrp");
    formWrp.parentNode.insertBefore(wrapper, formWrp);
    wrapper.appendChild(formWrp);
}

// column add classs row and column 
export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`columns-${cols.length}-cols`);

    // Add class to each direct child (row) of block
    [...block.children].forEach((row, rowIndex) => {
        row.classList.add(`column-row-${rowIndex + 1}`);

        // Add class to each col inside the row
        [...row.children].forEach((col, colIndex) => {
            col.classList.add(`column-col-${rowIndex + 1}-${colIndex + 1}`);

            // Optional: handle image columns like original logic
            const pic = col.querySelector('picture');
            if (pic) {
                const picWrapper = pic.closest('div');
                if (picWrapper && picWrapper.children.length === 1) {
                    picWrapper.classList.add('columns-img-col');
                }
            }
        });
    });
}











export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`columns-${cols.length}-cols`);

    // Add class to each direct child (row) of block
    [...block.children].forEach((row, rowIndex) => {
        row.classList.add(`column-row`);

        // Add class to each col inside the row
        [...row.children].forEach((col, colIndex) => {
            col.classList.add(`column-col-${colIndex + 1}`);

            // Optional: handle image columns like original logic
            const pic = col.querySelector('picture');
            if (pic) {
                const picWrapper = pic.closest('div');
                if (picWrapper && picWrapper.children.length === 1) {
                    picWrapper.classList.add('columns-img-col');
                }
            }
        });
    });
}


// {
//     "title": "Header Sub",
//         "id": "header-sub",
//             "plugins": {
//         "xwalk": {
//             "page": {
//                 "resourceType": "core/franklin/components/block/v1/block",
//                     "template": {
//                     "name": "Header Sub",
//                         "model": "header-sub"
//                 }
//             }
//         }
//     }
// }


// {
//     "title": "Flexicap form",
//         "id": "flexicap-form",
//             "plugins": {
//         "xwalk": {
//             "page": {
//                 "resourceType": "core/franklin/components/block/v1/block",
//                     "template": {
//                     "name": "Flexicap form",
//                         "model": "flexicap-form"
//                 }
//             }
//         }
//     }
// }


// {
//     "id": "flexicap-form",
//         "fields": [
//             {
//                 "component": "text",
//                 "valueType": "string",
//                 "name": "th-heading",
//                 "label": "Title"
//             },
//             {
//                 "component": "reference",
//                 "name": "image",
//                 "label": "Image",
//                 "multi": false
//             },
//             {
//                 "component": "text",
//                 "name": "imageAlt",
//                 "label": "Alt Text"
//             },
//             {
//                 "component": "text",
//                 "valueType": "string",
//                 "name": "from-title",
//                 "label": "Description"
//             },
//             {
//                 "component": "richtext",
//                 "name": "text",
//                 "value": "",
//                 "label": "Flexicap modal",
//                 "valueType": "string"
//             }
//         ]
// }
