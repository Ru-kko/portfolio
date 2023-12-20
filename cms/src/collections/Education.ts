import { CollectionConfig } from "payload/types";

const Education: CollectionConfig = {
  slug: "education",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "from",
      type: "text",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "start_date",
      type: "date",
    },
    {
      name: "end_date",
      type: "date",
      required: false,
      validate: (val: Date, { data }: { data: { start_date: Date } }) => {
        if (val <= data.start_date)
          return "End date should be after start date";
        return true;
      },
    },
    {
      name: "type",
      type: "select",
      options: [
        {
          label: "Certificate",
          value: "certificate",
        },
        {
          label: "Degree",
          value: "degree",
        },
        {
          label: "Course",
          value: "course",
        },
      ],
    },
  ],
};

export { Education };
