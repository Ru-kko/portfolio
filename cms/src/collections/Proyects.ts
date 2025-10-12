import { CollectionConfig, Field } from 'payload'
import { Technologies } from '../types/Technologies'

const urlRegex =
  /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/

const Proyects: CollectionConfig = {
  slug: 'proyects',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'resume',
      type: 'text',
    },
    {
      name: 'keywords',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      name: 'Repository',
      type: 'text',
      required: false,
      validate: (val: string) => {
        if (urlRegex.test(val)) return true
        return [`${val} dont match to a url`]
      },
    } as Field,
    {
      name: 'ScreenShots',
      type: 'upload',
      relationTo: 'images',
      hasMany: true,
    },
    {
      name: 'stack',
      type: 'select',
      hasMany: true,
      options: Technologies,
    },
  ],
}

export { Proyects }
