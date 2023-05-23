function loadCSVFiles() {
    const directoryInput = document.getElementById('directoryInput');
    const files = directoryInput.files;
  
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.name.endsWith('.csv')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const contents = e.target.result;
          // Process the CSV data as needed
          console.log(contents);
          outputDiv.innerHTML += `<p>Loaded file: ${file.name}</p>`;
        };
        reader.readAsText(file);
      }
    }
  }