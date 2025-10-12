import { CollectionConfig } from 'payload'

const Messagges: CollectionConfig = {
  slug: 'messages',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: () => true,
    read: (args) => {
      if (args.req.user) return true
      return false
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
      unique: false,
    },
    {
      name: 'content',
      type: 'textarea',
    },
  ],
}

export { Messagges }
