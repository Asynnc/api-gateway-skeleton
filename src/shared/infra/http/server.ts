import { app } from "./app"

app.listen(process.env.PORT_SERVER || 10000, () => {
  console.log(`✅ Api Gateway connected on port ${process.env.PORT_SERVER}!`)
})
