const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"

// initialize app
const app = next({ dev, dir: __dirname })

// in case of dir issues with the snapshot fs, try the below app initialization:
//const nextConfig = require('./next.config');
//const app = next({ dev, dir: __dirname, conf: nextConfig });

const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)

    handle(req, res, parsedUrl)
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
