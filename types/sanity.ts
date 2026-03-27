import dynamicIconImports from 'lucide-react/dynamicIconImports'
import type { Image } from 'sanity'

interface SectionBase {
  _key: string
  _type: string
}

export interface Cta {
  _type: 'cta'
  text: string
  url: string
  color?:
    | 'link'
    | 'secondary'
    | 'dark'
    | 'destructive'
    | 'cta'
    | 'ctaOutline'
    | 'ghost'
    | 'default'
    | 'primaryOutline'
    | 'outline'
  codeConversion?: string
  icon?: keyof typeof dynamicIconImports
}

export interface HeroSection extends SectionBase {
  _type: 'hero'
  label?: string
  title?: string
  description?: string
  primaryCta?: Cta
  secondaryCta?: Cta
  image?: Image
  insuranceBrands?: string[]
}

export interface Solution {
  _key: string
  _type: 'solution'
  title: string
  icon?: keyof typeof dynamicIconImports
  description?: string
  stats?: string
}

export interface SolutionsSection extends SectionBase {
  _type: 'solutionsSection'
  label?: string
  title?: string
  solutions?: Solution[]
}

export interface LeadMagnetSection extends SectionBase {
  _type: 'leadMagnet'
  title?: string
  subtitle?: string
  formTitle?: string
}

export interface Seo {
  _type: 'seo'
  metaTitle: string
  metaDescription: string
}

export interface FormResponseMessage {
  title?: string;
  description?: string;
}

export type FormFieldInputType = 
  | 'text' 
  | 'email' 
  | 'number' 
  | 'tel' 
  | 'url' 
  | 'textarea'

export interface FormField {
  _key: string
  _type: 'formField'
  name: string
  label?: string
  type?: FormFieldInputType
  required?: boolean
}

export interface FormPayload {
  _type: 'form'
  formTitle?: string
  formDescription?: string
  formCta?: Cta
  formFields?: FormField[]
  responseMessage?: FormResponseMessage
  responseErrorMessage?: FormResponseMessage
}

export interface NavItem {
  _type: 'navItem'
  _key: string
  title: string
  url: string
  color:
    | 'link'
    | 'secondary'
    | 'destructive'
    | 'cta'
    | 'ctaOutline'
    | 'ghost'
    | 'default'
    | 'primaryOutline'
    | 'outline'
  icon?: keyof typeof dynamicIconImports
  codeConversion?: string
}

export interface SocialLink {
  _type: 'socialLink'
  _key: string
  platform: keyof typeof dynamicIconImports
  url: string
}

export interface ScheduleItem {
  _type: 'scheduleItem'
  _key: string
  text: string
  isHighlighted: boolean
}

export interface ContactInfo {
  _type: 'contactInfo'
  address?: string
  email?: string
  phone?: string
}

export interface LegalLink {
  _type: 'legalLink'
  _key: string
  label: string
  url: string
}

export interface FooterPayload {
  description: string
  socialLinks?: SocialLink[]
  schedule?: ScheduleItem[]
  contactInfo?: ContactInfo
  copyright?: string
  legalLinks?: LegalLink[]
}

export interface SettingsPayload {
  logo?: Image
  mainNavigation?: NavItem[]
  favicon?: Image
  footer?: FooterPayload
}

export type PageSection =
  | HeroSection
  | SolutionsSection
  | LeadMagnetSection

export type PagePayload = {
  _id: string
  title: string
  slug?: { current: string }
  seo?: Seo
  formDialog?: FormPayload
  sections?: PageSection[]
}
