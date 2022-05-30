const { text } = require("body-parser");
const id = 4;
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life", "A fresh start will put you on your way", 
        "A lifetime friend shall soon be made", "A soft voice may be awfully persuasive" ];
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

   getGoals: (req, res) =>{
    const goals = [
    {id: 1, text: "build server"},
    {id: 2, text:"connect front end"},
    {id: 3, text: "test"},
]
res.status(200).send(goals);
   },
   deleteGoal: (req, res) => {
    const id = req.params;
    const deleteIndex = goals.findIndex((goals) => +goals.id === +id);
    goals.splice(deleteIndex, 1);
    res.status(200).send(goals);
   }

}