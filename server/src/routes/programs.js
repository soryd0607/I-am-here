import { Router } from 'express';
import prisma from '../lib/prisma.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const programs = await prisma.program.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'asc' },
    });
    res.json(programs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch programs.' });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const program = await prisma.program.findUnique({
      where: { slug: req.params.slug },
    });
    if (!program) return res.status(404).json({ error: 'Program not found.' });
    res.json(program);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch program.' });
  }
});

export default router;
