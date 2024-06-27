const express = require('express');
const app = express();
const port = 3033;

app.listen(port, () => {
    console.log(`Server running on ${port}.`);
});
