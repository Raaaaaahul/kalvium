const express = require("express");
const router = express.Router();
const operations = require('../models/Schema')


router.get('/*', async (req, res) => {
    const url = req.params[0];
    const parts = url.split('/')
    let expression = ""
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] === 'plus') {
            expression += '+'
        }
        else if (parts[i] === 'minus') {
            expression += '-'
        }
        else if (parts[i] === 'into') {
            expression += '*'
        }
        else if (parts[i] === 'divide') {
            expression += '/'
        }
        else {
            expression += parts[i]
        }
    }
    let result=0;
    try
    {
        result = eval(expression)
        console.log(result)
    }
    catch(error)
    {
        console.error(error)
    }
    const operationRecord = new operations({
        question:expression,
        answer:result
    })
    await operationRecord.save();
    res.json({ question: expression, answer: result });
})


module.exports = router;