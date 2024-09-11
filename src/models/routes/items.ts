import express from 'express';
import Item from '../Item'; 

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {}; 
    const items = await Item.find(filter);
    res.json(items);
  } catch (err : any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
