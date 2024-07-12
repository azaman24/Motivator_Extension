const express = require('express');
const XLSX = require('xlsx');
const app = express();
const port = 3001;

app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/random-quote', async (req, res) => {
    const workbook = XLSX.readFile('Motivator_Quotes.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    function getRandomRow(data) {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
    }

    const randomRow = getRandomRow(data);
    res.json(randomRow);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});