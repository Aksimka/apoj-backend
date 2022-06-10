import Router from '@koa/router'
import path from 'path'
import * as fs from "fs";

const router = new Router()

router.get('/sound', (ctx, next) => {
  const filePath = path.join(__dirname, '../../assets/test.mp3');
  const stat = fs.statSync(filePath);
  ctx.set('Content-Type', 'audio/mpeg')
  // @ts-ignore
  ctx.set('Content-Length', stat.size)
  const readStream = fs.createReadStream(filePath);

  ctx.body = readStream
});

export default router
