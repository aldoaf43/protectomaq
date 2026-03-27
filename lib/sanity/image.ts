import imageUrlBuilder, { SanityImageSource } from '@sanity/image-url'

import { client } from './client'

const builder = imageUrlBuilder(client)

/**
 * @example
 * urlFor(image).width(300).height(200).url()
 *
 * @param source
 * @returns
 */
export function urlForImage(source: SanityImageSource | undefined | null) {
  if (!source || !source.toString) {
    return null
  }

  return builder.image(source)
}
