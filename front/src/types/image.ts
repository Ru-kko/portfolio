interface ImageBase {
  id: string;
  url: string;
}

interface Sizes {
  card: ImageBase;
  thumbnail: ImageBase;
}

export interface Image extends ImageBase {
  alt: string;
  sizes: Sizes;
}
