const prompt = require('prompt');

prompt.start();

prompt.get(["userName"], (err, result)=>{
    console.log(result.userName)
})