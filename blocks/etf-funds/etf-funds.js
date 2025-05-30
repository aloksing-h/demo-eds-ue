import { div, select, option, a, span, img, label } from "../../scripts/dom-helper.js";

export default function decorate(block) {
    const section = document.querySelector('.section.etf-funds-container');
    if (section) {
        const fundHead = section.querySelector('.default-content-wrapper');
        if (fundHead) {
            fundHead.classList.add('our-funds-heading');
        }
    }
    block.innerHTML = ""
    for (let index = 0; index < 10; index++) {
        let containerData = div({
            class: "submain-container"
        },
            div({
                class: "fundCard"
            },
                div({
                    class: "submain-Header"
                },
                    div({
                        class: "name-content-container"
                    },
                        div({
                            class: "logoName"
                        }, "Logo"),
                        div({
                            class: "planName"
                        }, a("PLANnaME"))
                    ),
                    div({
                        class: "dropdown-container"
                    },
                        span({
                            class: "fundOption"
                        },
                            select(
                                option('zxc')
                            )
                        )
                    ),
                    div({
                        class: "category-container"
                    },
                        span({ class: "category-item" }, "invest"),
                        span({ class: "category-item" }, "|"),
                        span({ class: "category-item highlighted" }, "save"),
                        span({ class: "category-item" }, "|"),
                        span({ class: "category-item disabled" }, "spend")
                    )
                ),
                div({
                    class: "submain-Footer"
                },
                    div({
                        class: "row valueFactor-container"
                    },
                        div({
                            class: "factor-container"
                        },
                            div({
                                class: "amu-container"
                            },
                                label("AMU"),
                                span({
                                    class: "amuvalue"
                                }, ('')
                                ),
                                div({
                                    class: "risk-container"
                                },
                                    label("Risk"),
                                    div({
                                        class: "riskvalue"
                                    },
                                        div({
                                            class: "risklabelvalue"
                                        }, 'Very High'),
                                        div({
                                            class: "riskinfoiconvalue"
                                        },
                                            img("/content.fake/path.img")
                                        )
                                    )
                                ),
                                div({
                                    class: "nav-container"
                                },
                                    label("NAV"),
                                    div({
                                        class: "navContainervalue"
                                    },
                                        div({
                                            class: "navRatevalue"
                                        },
                                            div({
                                                class: "fundValue"
                                            }, "345"),
                                            div("(" + "2345" + "%)")
                                        ),
                                        div({
                                            class: "navFundDate"
                                        }, 'sdfg')
                                    )
                                ),
                                div({
                                    class: "cagr-container"
                                },
                                    label({
                                        class: "CAGRContainer"
                                    }, "CAGR",
                                        select(
                                            option('sdcfv')
                                        )
                                    ),
                                    div("dfv%"),
                                    div("SDFGH")
                                )
                            )
                        ),
                        div({
                            class: "buttonFactor-container"
                        },
                            div({
                                class: "button-container"
                            },
                                div({
                                    class: "know-more-btn"
                                }, a({
                                    class: "know-more"
                                }, "Know More")),
                            ),
                            div({
                                class: "invest-now-btn"
                            }, a({
                                class: "Invest-now"
                            }), "Invest Now")
                        )
                    )
                )
            )
        )
        block.append(containerData)
    }
}