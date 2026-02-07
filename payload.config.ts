import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Editor configuratie - Lexical is moderne rich text editor
  editor: lexicalEditor({}),

  // Collections - hier komen straks Blog Posts, Users, Media
  collections: [
    // Blog posts collection komt in Task #20
  ],

  // Database configuratie - PostgreSQL via Supabase
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),

  // Secret voor JWT tokens
  secret: process.env.PAYLOAD_SECRET || 'your-secret-here-change-in-production',

  // TypeScript types automatisch genereren
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // Admin panel configuratie
  admin: {
    user: 'users', // User collection naam
    meta: {
      titleSuffix: '- ZenTrack CMS',
    },
  },

  // Server URL
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',

  // CORS configuratie
  cors: [
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    'http://localhost:3000',
  ].filter(Boolean),

  // CSRF bescherming
  csrf: [
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    'http://localhost:3000',
  ].filter(Boolean),
})
