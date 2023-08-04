const fs = require("fs");
fs.mkdir("AsyncFolder", (err) => {
  console.log(err);
  console.log("Folder has been created");
});

fs.writeFile("AsyncFolder.txt/AsyncFile.txt", );
