import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "q0wgfrpj",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",

  token:
    "skrm9xHBWBD7Hfm4mLTkJfUlEnKEgkSj5cM2wclXXnj8ADrAdAD2pB9PUSCEWvvlkRDEaLUM2ql3jyr4RnZg9ggCgppv8zdaLcAVwPTG8dAFKbmo0qdaE0o3qfJoUNA8rp0g179E3bLUfQo5GYujwj1IaOidwmKvteyug3OYOoh6W3YA7fmR",
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
