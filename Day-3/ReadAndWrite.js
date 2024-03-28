const fstream = require("fs");

fstream.writeFile("WriteJsFile.txt", "This is the sample text", (error) => {
    if (error) throw error;
    console.log("Successfully created.")
})

fstream.readFile("WriteJsFile.txt", "utf-8", (error, data) => {
    if (error) throw error;
    console.log(data)
})