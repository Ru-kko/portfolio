import { CollectionConfig } from 'payload'

const Education: CollectionConfig = {
  slug: 'education',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'from',
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
      validate: (val, { data }) => {
        const startDate = (data as { start_date?: Date })?.start_date;
        if (val && startDate && val <= startDate) return 'End date should be after start date'
        return true
      },
    },
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Certificate',
          value: 'certificate',
        },
        {
          label: 'Degree',
          value: 'degree',
        },
        {
          label: 'Course',
          value: 'course',
        },
      ],
    },
  ],
}

export { Education }
