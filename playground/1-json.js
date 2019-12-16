 const fs =require('fs');

 const user = JSON.parse(fs.readFileSync('1-json.json').toString());

 data.name = "Christopher";
 data.age = "30";

 fs.writeFileSync('1-json.json', JSON.stringify(user));

