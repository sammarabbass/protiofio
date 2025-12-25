
let display = document.getElementById("display");

document.addEventListener("keydown", function (e) {
  let key = e.key;

  // Numbers (0–9)
  if (key >= "0" && key <= "9") {
    display.value += key;
  }

  // Operators
  if (key === "+" || key === "-" || key === "*" || key === "/") {
    display.value += key;
  }

  // Decimal
  if (key === ".") {
    display.value += ".";
  }

  // Enter = Equal
  if (key === "Enter") {
    e.preventDefault();
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }

  // Backspace = DC
  if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  // Escape = AC
  if (key === "Escape") {
    display.value = "";
  }
});
