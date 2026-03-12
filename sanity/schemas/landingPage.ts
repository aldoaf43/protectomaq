import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'landingPage',
  title: 'Página de Inicio',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Sección Hero',
      type: 'object',
      fields: [
        { name: 'label', title: 'Etiqueta Pequeña', type: 'string' },
        { name: 'title', title: 'Título Principal', type: 'string' },
        { name: 'description', title: 'Descripción', type: 'text' },
        { name: 'primaryCta', title: 'Texto CTA Primario', type: 'string' },
        { name: 'secondaryCta', title: 'Texto CTA Secundario', type: 'string' },
        { name: 'image', title: 'Imagen Hero', type: 'image' },
      ]
    }),
    
    // Solutions Section
    defineField({
      name: 'solutions',
      title: 'Sección Soluciones',
      type: 'object',
      fields: [
        { name: 'label', title: 'Etiqueta', type: 'string' },
        { name: 'title', title: 'Título', type: 'string' },
        { 
          name: 'items', 
          title: 'Soluciones', 
          type: 'array', 
          of: [{ type: 'reference', to: [{ type: 'solution' }] }] 
        },
      ]
    }),

    // Lead Magnet
    defineField({
      name: 'leadMagnet',
      title: 'Sección Lead Magnet',
      type: 'object',
      fields: [
        { name: 'title', title: 'Título', type: 'string' },
        { name: 'subtitle', title: 'Subtítulo', type: 'text' },
        { name: 'formTitle', title: 'Título del Formulario', type: 'string' },
      ]
    }),
  ],
});
