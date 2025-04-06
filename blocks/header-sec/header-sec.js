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

        // Add different class names to .header-sec-container-ul-1 children (e.g., divs)
        Array.from(targetUl.children).forEach((child, index) => {
            child.classList.add(`ul-child-${index + 1}`);
        });
    }
}
