const bodyParser = require("body-parser");
const express=require("express")
const app=express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  
    res.sendFile(__dirname + "/index.html")

app.get("/BmiCalculator" ,(req,res)=>{
   res.sendFile(__dirname +"/BmiCalculator.html")
})

app.post("/",(req,res)=>{
    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);
    var sum= num1 + num2;
    res.send("the rseult is " + sum)
})
})

app.post("/bmiCalculator",(req ,res)=>{
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);
  var result=weight/(height*height)
  res.send("your bmi is " + result)

})
app.listen(3000,()=>{
    console.log("server is runnig at port 3000");
})