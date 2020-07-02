import { Router } from 'express'

const router: Router = Router()

router.get('/', (req, res) => {
  res.send('Hello word')
})

export default router
