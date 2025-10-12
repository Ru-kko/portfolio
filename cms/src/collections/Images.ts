import { CollectionConfig } from 'payload'

const Images: CollectionConfig = {
  slug: 'images',
  admin: {
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
  },
  upload: {
    imageSizes: [
      {
        name: 'card',
        height: 480,
        position: 'centre',
      },
      {
        name: 'thumbnail',
        height: 900,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}

export { Images }
