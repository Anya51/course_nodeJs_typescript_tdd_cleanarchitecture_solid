import { MongooseHelper } from "../infra/db/mongodb/helpers/mongoose-helpers";
import env from "./config/env";

MongooseHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import("./config/app")).default;
    app.listen(env.port, () =>
      console.log(`Server running at http://localhost:${env.port}`)
    );
  })
  .catch(console.error);
