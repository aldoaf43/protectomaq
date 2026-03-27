import { groq } from 'next-sanity'

const SETTINGS_QUERY = groq`*[_type == "settings"][0]{
  logo,
  mainNavigation[]{
    _key,
    title,
    url,
    color,
    icon,
    codeConversion
  },
  mobileCta,
  footer,
  favicon
}`

const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    seo,
    "sections": sections[]{
      ...
    },
    formDialog {...}
  }`

export { PAGE_QUERY, SETTINGS_QUERY }
