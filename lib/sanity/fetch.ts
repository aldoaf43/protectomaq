import { cache } from 'react'

import { client } from '@/lib/sanity/client'
import { PAGE_QUERY, SETTINGS_QUERY } from '@/lib/sanity/queries'
import { PagePayload, SettingsPayload } from '@/types/sanity'

export const getSettings = cache(async (): Promise<SettingsPayload | null> => {
  return await client.fetch(SETTINGS_QUERY)
})

export const getPage = cache(async (slug: string | null = null): Promise<PagePayload | null> => {
  return await client.fetch(PAGE_QUERY, { slug })
})
