const router = require('express').Router();
const { Category, Item } = require('../../db/models');
console.log('1');

router.get("/", async (req,res)=>{
    try {
      const categories= await Category.findAll()
      console.log(categories);
        
        res.status(200).json({categories})
        
        
    }  catch ({ message }) {
        res.status(500).json({ error: message });
      }
})
router.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const removeCategories= await Category.destroy({ where: { id } });
      if (removeCategories) {
        res.status(200).json({ message: "success", id });
  
      }
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  });


  module.exports = router;