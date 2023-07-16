

    const fs = require ("fs")
    const client1 = {
        fname: "ahmed",
    lname : "hossama",
    age : "20",
    city : "alex"
 }

 // console.log(client1.fname)
 
 const client1Json = JSON.stringify (client1)

 fs.writeFileSync("data.json",client1Json)
  const fsreading=fs.readFileSync("data.json").toString()
 console.log(fsreading)
 const client1Obj = JSON.parse (fsreading)
 
   console.log(client1Obj)
   client1Obj.fname="adel"
   client1Obj.lname="ahmed"
   client1Obj.age="40"
   client1Obj.citye="cairo"
   console.log(client1Obj)
   const newclientJson = JSON.stringify (client1Obj)
   fs.writeFileSync("data.json",newclientJson)