// import Swiper from "../swiper-sec/swiper-bundle.min.js";
// import swiperBundleMin from "../swiper-sec/swiper-bundle.min.js";
// import { div } from "../../scripts/dom-helper.js"
import {
  div,
  select,
  option,
  a,
  span,
  img,
  label,
  h3,
  ul,
  li,
  form,
  input,
  button,
} from "../../scripts/dom-helper.js";

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

  const callbackP = Array.from(block.querySelectorAll("p")).find(
    (p) => p.textContent.trim().toLowerCase() === "request call back"
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

  const sectional = block.querySelector(
    ".flexicap-fund.sec-2 .button-container>div>div"
  );
  if (sectional) {
    sectional.classList.add("new-ad");
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
        dropdown.style.display =
          dropdown.style.display === "none" ? "block" : "none";
      });

      // Handle option selection
      options.forEach((item) => {
        item.style.padding = "8px";
        item.style.cursor = "pointer";

        item.addEventListener("click", () => {
          p.textContent = item.textContent;
          dropdown.style.display = "none";

          // Clear highlight on all items
          options.forEach((opt) => (opt.style.backgroundColor = ""));

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

  const formBlock = document.querySelector(".flexicap-form.block");

  if (formBlock) {
    const children = Array.from(formBlock.children);

    if (children.length >= 4) {
      // 1. Add individual item classes
      children.forEach((child, index) => {
        child.classList.add(`form-item-${index + 1}`);
      });

      // 2. Create top and bottom sections
      const topWrapper = document.createElement("div");
      topWrapper.classList.add("form-section-top");
      topWrapper.append(children[0], children[1]);

      const bottomWrapper = document.createElement("div");
      bottomWrapper.classList.add("form-section-bottom");
      bottomWrapper.append(children[2]);

      // ✅ Insert new div between item-3 and item-4
      const formData = document.createElement("div");
      formData.classList.add("form-sec");
      formData.innerHTML = `<div>here.</div>`; // Modify as needed
      bottomWrapper.append(formData);

      bottomWrapper.append(children[3]);

      // 3. Wrap both sections in a container
      const container = document.createElement("div");
      container.classList.add("form-container");
      container.append(topWrapper, bottomWrapper);

      // 4. Replace formBlock contents with container
      formBlock.innerHTML = "";
      formBlock.appendChild(container);

      // 5. Add close button to formBlock (after container)
      const closeBtn = document.createElement("div");
      closeBtn.classList.add("close");
      closeBtn.textContent = "X";
      formBlock.appendChild(closeBtn);
    }
  }

  const createForm = (item) => {
    return div(
      {
        class: "submain-container",
      },
      div(
        {
          class: "form-pl",
        },
        form(
          {
            class: "user-form",
          },
          // Name field
          div(
            {
              class: "customInput",
            },
            input({
              type: "text",
              class: "customInput",
              id: "outlined-name",
              placeholder: "Name",
              name: "name",
              "data-error": "",
              value: "",
            })
            // label({ for: "outlined-name", class: "customInput" }, "Name")
          ),
          // Email field
          div(
            {
              class: "customInput",
            },
            input({
              type: "email",
              class: "customInput",
              id: "outlined-email",
              placeholder: "Email ID",
              name: "email",
              "data-error": "",
              value: "",
            })
            // label({ for: "outlined-email", class: "customInput" }, "Email ID")
          ),
          // Mobile field
          div(
            {
              class: "customInput",
            },
            input({
              type: "tel",
              class: "customInput",
              id: "outlined-mobile",
              placeholder: "Mobile No",
              name: "mobile",
              "data-error": "",
              value: "",
            })
            // label({ for: "outlined-mobile", class: "customInput" }, "Mobile No")
          ),
          // Submit button
          button(
            {
              type: "submit",
              class: "form-submit",
            },
            "SUBMIT"
          )
        )
      )
    );
  };

  const formElement = createForm();

  const formSectionBottom = document.querySelector(
    ".form-section-bottom .form-sec"
  );
  formSectionBottom.innerHTML = "";
  formSectionBottom.append(formElement);

  const formValidate = document.querySelector(".user-form");

  formValidate.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default form submission

    let isValid = true;

    const nameInput = document.getElementById("outlined-name");
    const emailInput = document.getElementById("outlined-email");
    const mobileInput = document.getElementById("outlined-mobile");

    clearErrors();

    if (nameInput.value.trim() === "") {
      showError(nameInput, "Name is required");
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
      showError(emailInput, "Enter a valid email");
      isValid = false;
    }

    if (!/^\d{10}$/.test(mobileInput.value)) {
      showError(mobileInput, "Enter a valid 10-digit mobile number");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      formValidate.submit(); // Uncomment if you want to proceed with submission
    }
  });

  function showError(input, message) {
    input.setAttribute("data-error", message);
    input.classList.add("error");
  }

  function clearErrors() {
    document.querySelectorAll(".customInput input").forEach((input) => {
      input.removeAttribute("data-error");
      input.classList.remove("error");
    });
  }

  // 6. Modal open/close logic
  const modal = document.querySelector(".flexicap-form-wrapper");
  const btn = document.querySelector(".contact-links p");
  const span = document.querySelector(".flexicap-form .close");

  if (modal && btn && span) {
    btn.onclick = () => {
      modal.style.display = "block";
    };

    span.onclick = () => {
      modal.style.display = "none";
    };

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
}
