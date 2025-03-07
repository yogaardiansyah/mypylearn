const codeArea = document.getElementById("code-area");
const lineNumbers = document.getElementById("line-numbers");

// Fungsi untuk mengupdate nomor baris
function updateLineNumbers() {
  const lines = codeArea.value.split("\n");
  lineNumbers.innerHTML = "";
  for (let i = 1; i <= lines.length; i++) {
    const lineNumber = document.createElement("div");
    lineNumber.textContent = i;
    lineNumbers.appendChild(lineNumber);
  }
}

// Update nomor baris saat ada perubahan di textarea
codeArea.addEventListener("input", updateLineNumbers);

// Inisialisasi nomor baris saat halaman pertama kali dimuat
updateLineNumbers();
