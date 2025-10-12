import { CollectionConfig } from 'payload'
import { Technologies } from '../types/Technologies'

const Experience: CollectionConfig = {
  slug: 'experience',
  admin: {
    useAsTitle: 'job',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'job',
      type: 'text',
    },
    {
      name: 'company',
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
      name: 'start_date',
      type: 'date',
    },
    {
      name: 'end_date',
      type: 'date',
      required: false,
      validate: (val, data) => {
        const startDate = (data as { start_date?: Date })?.start_date

        if (val && startDate && val <= startDate) return 'End date should be after start date'
        return true
      },
    },
    {
      name: 'stack',
      type: 'select',
      hasMany: true,
      options: Technologies,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Freelancer',
          value: 'freelance',
        },
        {
          label: 'FullTime',
          value: 'fulltime',
        },
      ],
    },
  ],
}

export { Experience }
