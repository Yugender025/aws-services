document.getElementById("database").addEventListener("click", function(e) {
    const storageSection = document.getElementById("storage");
  
    if (storageSection) {
      storageSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with ID 'storage' not found");
    }
  
    e.preventDefault(); // Prevent the default action
  });
  
