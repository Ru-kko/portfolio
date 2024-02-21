import { CollectionConfig } from "payload/types";

const Images: CollectionConfig = {
  slug: "images",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  upload: {
    staticURL: "/static/img",
    staticDir: "/media/img/",
    imageSizes: [
      {
        name: "card",
        height: 480,
        position: "centre",
      },
      {
        name: "thumbnail",
        height: 900,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};

export { Images };
