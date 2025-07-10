// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);


import { z } from "zod";

const postSchema = z.coerce.number().min(1).max(65535).default(3000);
export const PORT = postSchema.parse(process.env.PORT);