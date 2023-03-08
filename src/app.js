const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
app.set("view engine","hbs")
const hbs = require('hbs');

const static_path = path.join(__dirname,"../public");
const view_path = path.join(__dirname,"../tamplates/views");
const partials_path = path.join(__dirname,"../tamplates/partials");
app.set("views",view_path)

app.use(express.static(static_path));
hbs.registerPartials(partials_path);

app.get('/',(req,res)=>{
    res.render("index");
});

app.get('/about',(req,res)=>{
    res.render("about")
});

app.get('/weather',(req,res)=>{
    res.render("weather");
});

app.get('*',(req,res)=>{
    res.render('error')
})



app.listen(port,()=>{
    console.log(`app is running at port ${port}`);
})