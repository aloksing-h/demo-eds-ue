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