import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'solution',
  title: 'Solución',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icono (Lucide)',
      type: 'string',
      description: 'Nombre del icono de Lucide (ej. Shield, HardHat, etc.)',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'stats',
      title: 'Estadísticas / Beneficio Corto',
      type: 'string',
    }),
  ],
});
