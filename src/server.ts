import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import soundRoutes from "./routes/sounds";
import router from "./routes/sounds";

const app = new Koa()

app.use(bodyParser())

app.use(router.routes())

app.listen(3000)
