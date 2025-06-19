document.getElementById("change_button").addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all blocks first
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }

  // Apply new color if valid ID
  if (blockId >= 1 && blockId <= 9) {
    document.getElementById(blockId).style.backgroundColor = color;
  } else {
    alert("Please enter a valid block ID between 1 and 9.");
  }
});

// Reset button
document.getElementById("Reset").addEventListener("click", () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }
});
