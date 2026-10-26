function processNumbers() {
  let cells = document.querySelectorAll("#numberTable td");
  let numbers = [];

  cells.forEach(cell => {
    let val = parseFloat(cell.textContent.trim());
    if (!isNaN(val)) {
      numbers.push(val);
    }
  });

  numbers.sort((a, b) => a - b);

  document.getElementById("resultInput").value = numbers.join(", ");
}

document.getElementById("processBtn").onclick = processNumbers;