import express from "express";
import axios from "axios";

const app = express();
const port =  3000;

const API_KEY = '36ee68ae4f4c61b6092a1114b75ece50';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=jamnagar&appid=';
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=jamnagar&appid={API key}';



app.get('/weather', async (req, res) => {
    const { city } = req.query;
    
    try {
    //   const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
      const response = await axios.get(`${BASE_URL}&appid=${API_KEY}`);
      const weatherData = response.data;
      
      res.json({
        temperature: weatherData.main.temp,
        description: weatherData.weather[0].description,
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


  app.post('/weather', async (req, res) => {
    const { city } = req.body;
    
    try {
      const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
      const weatherData = response.data;
      
      res.json({
        temperature: weatherData.main.temp,
        description: weatherData.weather[0].description,
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});  
  
  

app.get("/",async (req,res)=>{

    try{
        const result=await axios.get("https://api.openweathermap.org/data/2.5/weather?q=jamnagar&appid=36ee68ae4f4c61b6092a1114b75ece50")
        // res.render("index.ejs",{
        // secret: result.data.secret,
        // user: result.data.username,
        // })
    }catch(error){
        console.log(error.response.data);
    }
});

const requests=require("requests");

requests('https://api.openweathermap.org/data/2.5/weather?q=jamnagar&appid=36ee68ae4f4c61b6092a1114b75ece50', { streaming })
.on('data', function (chunk) {
  console.log(chunk)
})
.on('end', function (err) {
  if (err) return console.log('connection closed due to errors', err);
 
  console.log('end');
});