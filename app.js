const express = require("express");
const app = express();

const cricketTeam=[{"player_id":2,"player_name":"Trivi","jersey_number":3,"role":"All-rounder"},{"player_id":3,"player_name":"Babu","jersey_number":18,"role":"Batsman"}
,{"player_id":4,"player_name":"Venkat","jersey_number":19,"role":"Batsman"},{"player_id":5,"player_name":"Vamsi","jersey_number":2,"role":"Batsman"},
{"player_id":6,"player_name":"Hari","jersey_number":22,"role":"Bowler"},{"player_id":7,"player_name":"Harish","jersey_number":7,"role":"Batsman"},
{"player_id":8,"player_name":"Chanakya","jersey_number":1,"role":"Bowler"},{"player_id":9,"player_name":"Vinod","jersey_number":8,"role":"Wicket-keeper"},
{"player_id":10,"player_name":"Gowtham","jersey_number":6,"role":"Bowler"},{"player_id":11,"player_name":"Varshith","jersey_number":11,"role":"All-rounder"},
{"player_id":12,"player_name":"Vishal","jersey_number":17,"role":"Bowler"},{"player_id":13,"player_name":"Vishal","jersey_number":17,"role":"Bowler"}]

app.listen(3000, () => {
    console.log(
      "server started"
    );
});

app.get("/",(req,res)=>{
  res.send("Welcome");
})

app.get("/players",(req,res)=>{
    res.send(cricketTeam);
});

app.get("/players/:id",(req,res)=>{
  const {id}=req.params;
  res.send(cricketTeam[id]);
})

module.exports = app;