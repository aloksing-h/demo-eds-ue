import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function closeOnFocusLost(e) {
  const nav = e.currentTarget;
  if (!nav.contains(e.relatedTarget)) {
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections, false);
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections, false);
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
}

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', expanded);
  });
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  // enable nav dropdown keyboard accessibility
  const navDrops = navSections.querySelectorAll('.nav-drop');
  if (isDesktop.matches) {
    navDrops.forEach((drop) => {
      if (!drop.hasAttribute('tabindex')) {
        drop.setAttribute('tabindex', 0);
        drop.addEventListener('focus', focusNavSection);
      }
    });
  } else {
    navDrops.forEach((drop) => {
      drop.removeAttribute('tabindex');
      drop.removeEventListener('focus', focusNavSection);
    });
  }

  // enable menu collapse on escape keypress
  if (!expanded || isDesktop.matches) {
    // collapse menu on escape press
    window.addEventListener('keydown', closeOnEscape);
    // collapse menu on focus lost
    nav.addEventListener('focusout', closeOnFocusLost);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
    nav.removeEventListener('focusout', closeOnFocusLost);
  }
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // Load nav as fragment
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  // Clear the block and set up nav
  block.textContent = '';
  const nav = document.createElement('nav');
  nav.id = 'nav';
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  // Add section classes
  const classes = ['brand', 'sections', 'tools'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });

  // Clean up nav-brand buttons
  const navBrand = nav.querySelector('.nav-brand');
  const brandLink = navBrand?.querySelector('.button');
  if (brandLink) {
    brandLink.className = '';
    brandLink.closest('.button-container').className = '';
  }

  // Wrap nav-sections and nav-tools
  const navSections = nav.querySelector('.nav-sections');
  const navTools = nav.querySelector('.nav-tools');
  if (navSections && navTools) {
    const navContent = document.createElement('div');
    navContent.classList.add('nav-Content');
    navSections.parentNode.insertBefore(navContent, navSections);
    navContent.append(navSections, navTools);

    // Add dropdown functionality
    navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
      if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
      navSection.addEventListener('click', () => {
        if (isDesktop.matches) {
          const expanded = navSection.getAttribute('aria-expanded') === 'true';
          toggleAllNavSections(navSections);
          navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        }
      });
    });
  }

  // Add classes to nav-sections elements
  if (navSections) {
    const contentWrapper = navSections.querySelector('div');
    if (contentWrapper) contentWrapper.classList.add('content-wrapper');

    const navList = navSections.querySelector('div > ul');
    if (navList) navList.classList.add('nav-list');

    const navLang = navSections.querySelector('.nav-drop > ul');
    if (navLang) navLang.classList.add('nav-lang');
  }

  // Add classes to nav-tools elements
  if (navTools) {
    const menuWrapper = navTools.querySelector('div');
    if (menuWrapper) menuWrapper.classList.add('menu-wrapper');

    const wrapper = navTools.querySelector('.menu-wrapper');
    const children = Array.from(wrapper.children);
    const lastThree = children.slice(-3);
    const newDiv = document.createElement('div');
    newDiv.className = 'src-log-wrp';
    lastThree.forEach(el => newDiv.appendChild(el));
    wrapper.appendChild(newDiv);


    // const dropdwnBtn = navTools.querySelector(".nav-drop");
    // const dropdwnContent = navTools.querySelector(".nav-lang");

    const dropdwnBtn = nav.querySelector(".nav-drop");
    const dropdwnCont = nav.querySelector(".nav-lang");

    if (dropdwnBtn && dropdwnCont) {
      dropdwnBtn.addEventListener("click", () => {
        dropdwnCont.style.display = dropdwnCont.style.display === "block" ? "none" : "block";
      });

      // Close the dropdown when clicking outside
      document.addEventListener("click", (event) => {
        if (!dropdwnBtn.contains(event.target) && !dropdwnCont.contains(event.target)) {
          dropdwnCont.style.display = "none";
        }
      });
    }

    const menuList = navTools.querySelector('div > ul');
    if (menuList) menuList.classList.add('menu-list');

    const dropDW = navTools.querySelector('.menu-list > li');
    if (dropDW) dropDW.classList.add('dropdown');

    const dropBtn = navTools.querySelector('.menu-list > li > p');
    if (dropBtn) {
      dropBtn.classList.add('dropdown-btn');

      dropBtn.addEventListener('click', () => {
        dropBtn.classList.toggle('active');
      });
    }

    const dropCnt = navTools.querySelector('.menu-list > li > ul');
    if (dropCnt) dropCnt.classList.add('dropdown-content');

    const loginEl = navTools.querySelector('[title="login"]');
    if (loginEl) loginEl.classList.add('login-btn');

    const loginBtn = navTools.querySelector('.login-btn');
    if (loginBtn) {
      const buttonContainer = loginBtn.closest('.button-container');
      if (buttonContainer) {
        buttonContainer.classList.add('btn-cont');
      }
    }

    // search-box
    const searchImg = navTools.querySelector('img[data-icon-name="search"]');

    searchImg.addEventListener('click', () => {
      const paragraph = searchImg.closest('p');

      // Add class to paragraph
      paragraph.classList.add('search-active');

      searchImg.style.display = 'none';

      // Check if input already exists
      if (!paragraph.querySelector('input')) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Search...';

        paragraph.appendChild(input);
        input.focus();
      }
    });

    // const plans = navTools.querySelector('[title="PLANS"]');
    const planBlock = nav.querySelector('.header-sub-container');
    navTools.querySelectorAll(".nav-tools .button-container").forEach((element, index) => {
      if (index < 4) {
        element.querySelector("a").setAttribute("data-btn", element.querySelector("a").getAttribute("title"));

        element.addEventListener("click", (events) => {
          planBlock.style.display = "block";
          if (planBlock.querySelector("." + events.target.getAttribute("title").toLowerCase().replaceAll(" ", "-")) != null) {
            if (planBlock.querySelector("." + events.target.getAttribute("title").toLowerCase().replaceAll(" ", "-")).style.display == "block") {
              planBlock.querySelector("." + events.target.getAttribute("title").toLowerCase().replaceAll(" ", "-")).style.display = "none"
              planBlock.style.display = "none"
            } else {
              navTools.querySelectorAll(".nav-tools .button-container").forEach((elem, childIndex) => {
                if (childIndex < 4) {
                  const link = elem.querySelector("a");
                  const querySearch = link.getAttribute("title").toLowerCase().replaceAll(" ", "-");
                  const section = planBlock.querySelector("." + querySearch);
                  section != null ? section.style.display = "none" : ""
                }
              });
              planBlock.querySelector("." + events.target.getAttribute("title").toLowerCase().replaceAll(" ", "-")).style.display = "block"
            }
          } else {
            planBlock.style.display = "none"
          }

        });

      }
    })
  }
  // Select the main wrapper
  const headerSubBlocks = nav.querySelectorAll('.header-sub-container .header-sub-wrapper .header-sub');
  if (headerSubBlocks.length) {
    headerSubBlocks.forEach((headerSubBlock) => {
      const firstDiv = headerSubBlock.children[0];
      const secondDiv = headerSubBlock.children[1];
      if (firstDiv) firstDiv.classList.add('hd-ntd');
      if (secondDiv) secondDiv.classList.add('sec-ntd');
    })
  }

  // Wrap <h3> and <ul> Together in Divs
  const container = nav.querySelector('.sec-ntd > div');
  let i = 0;

  while (i < container.children.length - 1) {
    const current = container.children[i];
    const next = container.children[i + 1];

    if (current.tagName === "H3" && next && next.tagName === "UL") {
      const wrapper = document.createElement("div");
      const sectionClass = current.id ? `sec-${current.id}` : `sec-${i}`;
      wrapper.classList.add(sectionClass);

      current.classList.add('nav-menu-title');

      wrapper.appendChild(current);
      wrapper.appendChild(next);

      container.insertBefore(wrapper, container.children[i]);

    } else {
      i++;
    }
  }

  // Add dropdown open/close behavior
  const dropdownBtn = nav.querySelector(".dropdown-btn");
  const dropdownContent = nav.querySelector(".dropdown-content");

  if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener("click", () => {
      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Close the dropdown when clicking outside
    document.addEventListener("click", (event) => {
      if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = "none";
      }
    });
  }

  // Add hamburger for mobile
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`;
  hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
  nav.prepend(hamburger);
  nav.setAttribute('aria-expanded', 'false');

  // Prevent mobile nav behavior on window resize
  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

  // Wrap the entire nav for styling consistency
  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);
  block.append(navWrapper);
}