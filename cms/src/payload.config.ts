import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Education, Images, Messagges, Proyects, Users, Experience } from './collections'
import { DB_CONNECTION_STRING, PAYLOAD_SECRET } from './config/env'
import { s3Adapter } from './config/static'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  endpoints: [
    {
      path: '/ping',
      method: 'get',
      handler: () => new Response(JSON.stringify({ message: 'pong' }), { status: 200 }),
    }
  ],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Education, Images, Messagges, Proyects, Experience],
  editor: slateEditor({}),
  secret: PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: DB_CONNECTION_STRING,
  }),
  sharp,
  plugins: [
    s3Adapter,
  ],
})
