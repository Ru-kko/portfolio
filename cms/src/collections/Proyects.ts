import { CollectionConfig } from "payload/types";

const urlRegex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/

const Proyects: CollectionConfig = {
  slug: "proyects",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "resume",
      type: "text",
    },
    {
      name: "keywords",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "name",
          type: "text",
        },
      ],
    },
    {
      name: "Repository",
      type: "text",
      required: false,
      validate: (val: string) => {
        if (urlRegex.test(val))
          return true;
        return `${val} dont match to a url`
      },
    },
    {
      name: "ScreenShots",
      type: "relationship",
      relationTo: "images",
      hasMany: true,
    },
    {
      name: "stack",
      type: "select",
      hasMany: true,
      options: [
        {
          label: "Docker",
          value: "docker",
        },
        {
          label: "Java",
          value: "java",
        },
        {
          label: "GoLang",
          value: "go",
        },
        {
          label: "Lua",
          value: "lua",
        },
        {
          label: "JavaScript",
          value: "javascript",
        },
        {
          label: "TypeScript",
          value: "typescript",
        },
        {
          label: "C#",
          value: "c-sharp",
        },
        {
          label: "NodeJs",
          value: "nodejs",
        },
        {
          label: "Oracle",
          value: "oraclesql",
        },
        {
          label: "MySql",
          value: "mysql",
        },
        {
          label: "Microsoft Sql Server",
          value: "sql-server",
        },
        {
          label: "React",
          value: "React",
        },
        {
          label: "Angular",
          value: "angular",
        },
        {
          label: "Express js",
          value: "express-js",
        },
        {
          label: "SpringBoot",
          value: "spring-boot",
        },
        {
          label: "Gin Gonic",
          value: "gin-gonic",
        },
        {
          label: "Fiber",
          value: "fiber",
        },
        {
          label: "NextJs",
          value: "nextjs",
        },
        {
          label: "Redux",
          value: "redux",
        },
        {
          label: "Nginx",
          value: "nginx",
        },
        {
          label: "Json Web Token",
          value: "JWT",
        },
        {
          label: "Android",
          value: "andorid",
        },
        {
          label: "Linux",
          value: "linux",
        },
        {
          label: "MongoDB",
          value: "mongo",
        },
      ],
    },
  ],
};

export { Proyects };
