import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app =express();
const port = 3000;
const apiUrl = "https://api.jikan.moe/v4/anime";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , (req , res) => {
    res.render("index.ejs");
});

app.get("/my" , (req , res) => {
    res.render("my_top_10.ejs");
});

app.get("/imdb" , (req , res) => {
    res.render("imdb_top_10.ejs");
});

app.get("/trending" , (req , res) => {
    res.render("trending.ejs");
});

app.get( "/aniinfo/:name" , async (req ,res) =>{
   
    console.log( "anime name : " + req.params.name);

    const animeName = req.params.name;

    try{
        const result = await axios.get( apiUrl , {
            params : {
                q : animeName,
        }});

        const animeContent = result.data.data[0];
        res.render( "anime_info.ejs" , { 
            content : animeContent,
            animeName : animeName,
        });

    }catch(error){
        console.error(err);
        res.send('Anime not found or API error');
    }

    // res.render("anime_info.ejs");

});





app.listen( port , () => {
    console.log(`Server is running on port: ${port}.`);
});