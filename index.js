const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, () => console.log(`live on http://localhost:${PORT}`));

app.use(express.json());

// Endpoints (Eg. localhost/namelist
app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'Hi',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'Invalid logo! '})
    }

    res.send({
        tshirt: `tshirt with your ${logo} and ID of ${id}`,
    });

});