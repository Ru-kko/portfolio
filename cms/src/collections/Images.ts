import { CollectionConfig } from "payload/types";

const Images: CollectionConfig = {
  slug: "images",
  admin: {
    useAsTitle: "name",
  },
  upload: {
    staticURL: "/static/img",
    staticDir: "/media/img/",
    imageSizes: [
      {
        name: "card",
        width: 768,
        height: 1024,
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
