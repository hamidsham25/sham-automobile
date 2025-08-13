import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'car',
  title: 'Auto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: r => r.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: r => r.required()
    }),
    defineField({
      name: 'price',
      title: 'Preis (€)',
      type: 'number',
      validation: r => r.min(0)
    }),
    defineField({
      name: 'mileage',
      title: 'Kilometerstand',
      type: 'number',
      validation: r => r.min(0)
    }),
    defineField({
      name: 'year',
      title: 'Baujahr',
      type: 'number',
      validation: r => r.min(1980).max(new Date().getFullYear())
    }),
    defineField({
      name: 'fuelType',
      title: 'Kraftstoff',
      type: 'string',
      options: {
        list: ['Benzin', 'Diesel', 'Hybrid', 'Elektro', 'LPG', 'CNG', 'Andere']
      }
    }),
    defineField({
      name: 'transmission',
      title: 'Getriebe',
      type: 'string',
      options: {
        list: ['Manuell', 'Automatik']
      }
    }),
    defineField({
      name: 'power',
      title: 'Leistung (PS)',
      type: 'number'
    }),
    defineField({
      name: 'color',
      title: 'Farbe',
      type: 'string'
    }),
    defineField({
      name: 'doors',
      title: 'Türen',
      type: 'number'
    }),
    defineField({
      name: 'images',
      title: 'Bilder',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true }
      }],
      validation: r => r.min(1)
    }),
    defineField({
      name: 'thumbnail',
      title: 'Vorschaubild (optional – falls nicht gesetzt, nimm erstes Bild)',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung',
      type: 'text'
    }),
    defineField({
      name: 'features',
      title: 'Ausstattung',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'location',
      title: 'Standort',
      type: 'string',
      initialValue: 'Hannover'
    }),
    defineField({
      name: 'isFeatured',
      title: 'Auf Startseite hervorheben',
      type: 'boolean',
      initialValue: false
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      year: 'year',
      price: 'price'
    },
    prepare({ title, media, year, price }) {
      return {
        title: `${title ?? 'Auto'}${year ? ` (${year})` : ''}`,
        subtitle: price ? `${price.toLocaleString('de-DE')} €` : '',
        media
      }
    }
  }
})
