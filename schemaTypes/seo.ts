import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO & Meta',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Title for search engines (60 characters recommended)',
      validation: (Rule) => Rule.max(60).warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      description: 'Description for search engines (160 characters recommended)',
      validation: (Rule) => Rule.max(160).warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Relevant keywords for this page (comma-separated)',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image displayed when shared on social media (1200x630px recommended)',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Open Graph image is required for social sharing'),
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
      description: 'Title for social media sharing (if different from page title)',
      validation: (Rule) => Rule.max(60).warning('Longer titles may be truncated by social platforms'),
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      description: 'Description for social media sharing (if different from meta description)',
      validation: (Rule) => Rule.max(160).warning('Longer descriptions may be truncated by social platforms'),
    }),
    defineField({
      name: 'twitterCard',
      title: 'Twitter Card Type',
      type: 'string',
      options: {
        list: [
          { title: 'Summary', value: 'summary' },
          { title: 'Summary Large Image', value: 'summary_large_image' },
          { title: 'App', value: 'app' },
          { title: 'Player', value: 'player' },
        ],
      },
      initialValue: 'summary_large_image',
    }),
    defineField({
      name: 'twitterImage',
      title: 'Twitter Image',
      type: 'image',
      description: 'Image for Twitter cards (1200x675px recommended)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'The canonical URL for this page (prevents duplicate content issues)',
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent search engines from indexing this page',
      initialValue: false,
    }),
    defineField({
      name: 'noFollow',
      title: 'No Follow',
      type: 'boolean',
      description: 'Tell search engines not to follow links on this page',
      initialValue: false,
    }),
    defineField({
      name: 'structuredData',
      title: 'Structured Data (JSON-LD)',
      type: 'text',
      description: 'JSON-LD structured data for rich snippets (optional)',
      rows: 10,
    }),
    defineField({
      name: 'robotsTxt',
      title: 'Robots.txt Instructions',
      type: 'object',
      fields: [
        defineField({
          name: 'allow',
          title: 'Allow',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Paths to allow in robots.txt',
        }),
        defineField({
          name: 'disallow',
          title: 'Disallow',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Paths to disallow in robots.txt',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare(selection) {
      const { title, description } = selection
      return {
        title: title || 'Untitled SEO',
        subtitle: description ? `${description.substring(0, 60)}...` : 'No description',
      }
    },
  },
})
