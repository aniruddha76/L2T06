// JS code for webpage

// Function to save items for later
function saveForLater(itemName, imageSrc) {
  if (typeof sessionStorage !== "undefined") {
    let savedItems = JSON.parse(sessionStorage.getItem("savedItems")) || [];
    savedItems.push({ name: itemName, image: imageSrc });
    sessionStorage.setItem("savedItems", JSON.stringify(savedItems));
    // Alert user with the number of saved items
    alert(`Item saved! You have ${savedItems.length} items saved for later.`);
  } else {
    alert("Session storage is not supported in your browser.");
  }
}

// Function to display saved items on the saved for later page
function displaySavedItems() {
  let savedItems = JSON.parse(sessionStorage.getItem("savedItems")) || [];
  let saveForLaterContainer = document.getElementById(
    "save-for-later-container"
  );

  if (savedItems.length > 0) {
    savedItems.forEach((item) => {
      let itemDiv = document.createElement("div");
      itemDiv.classList.add("saved-item");

      let itemName = document.createElement("p");
      itemName.textContent = item.name;
      itemDiv.appendChild(itemName);

      let itemImage = document.createElement("img");
      itemImage.src = item.image;
      itemDiv.appendChild(itemImage);

      saveForLaterContainer.appendChild(itemDiv);
    });
  } else {
    saveForLaterContainer.textContent = "No items saved for later.";
  }
}

// Call the displaySavedItems function when the "Save for Later" page loads
window.addEventListener("load", displaySavedItems);

// Function to handle comment form submission
document
  .getElementById("comment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // Save the comment to sessionStorage
    let comments = JSON.parse(sessionStorage.getItem("comments")) || [];
    comments.push({ name, comment });
    sessionStorage.setItem("comments", JSON.stringify(comments));

    // Clear the form
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";

    // Alert user that their comment is saved
    alert("Thank you for your comment! It has been saved.");
  });

//Function to like an item
function likeParagraph(button, message) {
  if (!button.classList.contains("liked")) {
    button.classList.add("liked");
    button.textContent = "Liked";
  } else {
    button.classList.remove("liked");
    button.textContent = "Like";
  }

  alert(message);
}
