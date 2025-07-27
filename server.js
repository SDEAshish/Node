const express = require('express');

const app = express();

//

app.get('/', (req, res) =>{
        res.send("welcome to your new journey");
})

app.listen(3003 , () => {
    console.log("server started at port no. 3003")
});