import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
config();

const app = express();
const port = 3000;
const apiKey = process.env.API_KEY;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post("/openuv", async (req,res)=>{
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    
    try {
        const response = await fetch(`https://api.openuv.io/api/v1/uv?lat=${latitude}&lng=${longitude}`, {
            headers: {
                'x-access-token': apiKey
            }
        });
        const data = await response.json();
        const uvIndex = data.result.uv;
        const safeTime = data.result.safe_exposure_time.st5;
        let suggestionText = "";

        if(uvIndex >= 0 || uvIndex<3 ){
            suggestionText="Either sun is not there or UV rays are low so you can spend 60-80 mins outside."
        }else if(uvIndex >= 3 || uvIndex<6){
            suggestionText="UV rays are moderate so you can spend 40-60 mins outside."
        }else if(uvIndex >= 6 || uvIndex<8){
            suggestionText="UV rays are high so you can spend 30-40 mins outside."
        }else if(uvIndex >= 8 || uvIndex<11){
            suggestionText="UV rays are very high so you can spend 20-30 mins outside."
        }else if(uvIndex >= 11 || uvIndex<14){
            suggestionText="UV rays are extreme high so you can spend 15-20 mins outside."
        }else{
            suggestionText="You should stay at home."
        }



        res.render("index.ejs",{suggestionText:suggestionText , uvIndex:uvIndex});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch UV data' });
    }
})

app.listen(port,()=>{
    console.log("listening to port 3000");
})