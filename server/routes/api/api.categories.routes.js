const router = require('express').Router();
const { Category, Item } = require('../../db/models');

router.get("/", async (req,res)=>{
    try {
      const categories= await Category.findAll()
        
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

  router.post('/addCategory', async (req, res) => {
    let category;
    try {
      const { title } = req.body;
  
      
      category = await Category.findOne({ where: { title } });
      if (category) {
        res.json({ message: 'Такая категория уже есть!' });
        return;
      }
      category = await Category.create({title });
  
      category = await Category.findOne({
        where: { title: title }
      });
      
      
        res.json({ message: 'success', category });
      
    } catch ({ message }) {
      res.json({ message });
    }
  });


  module.exports = router;