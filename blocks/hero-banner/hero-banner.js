export default function decorate(block) {
    Array.from(block.children).forEach((row) => {
      row.classList.add("hero-banner-ctnr");
  
      Array.from(row.children).forEach((column, index) => {
        column.classList.add("hero-banner-ctnr-col");
        column.classList.add(`sec-${index + 1}`);
  
        // Add custom class to all children inside sec-2
        if (column.classList.contains('sec-2')) {
          Array.from(column.children).forEach((child, i) => {
            child.classList.add(`sec-2-text-${i + 1}`);
          });
        }
      });
    });
  }
  