import { CollectionConfig } from "payload/types";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Messagges: CollectionConfig = {
  slug: "messages",
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: () => true,
    read: (args) => {
      if (args.req.user) return true;
      return false;
    }
  },
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'email',
      type: 'text',
      validate: (val: string) => {
        if (emailRegex.test(val))
          return true;
        return `${val} is not a email`;
      }
    },
    {
      name: 'content',
      type: 'textarea',
    }
  ],
};

export { Messagges };
