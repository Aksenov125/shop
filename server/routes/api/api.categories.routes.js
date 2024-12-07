const router = require('express').Router();
const { Categories } = require('../../db/models');

router.get("/", async (req,res)=>{
    try {
        const categories= await Categories.findAll()
        console.log(categories);
        
        res.status(200).json({categories})
        
        
    }  catch ({ message }) {
        res.status(500).json({ error: message });
      }
})


  module.exports = router;