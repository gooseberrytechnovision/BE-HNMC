import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Logo displayed in the footer',
    }),
    defineField({
      name: 'description',
      title: 'Footer Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Footer description text',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'YouTube', value: 'youtube'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'showLink',
              title: 'Show Link',
              type: 'boolean',
              initialValue: true,
              description: 'Toggle to show/hide this social link',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.max(6).warning('Maximum 6 social links recommended'),
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Link Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Link URL',
              type: 'string',
              description: 'Enter relative URL (e.g., #about, #services) or full URL (e.g., https://example.com)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'openInNewTab',
              title: 'Open in New Tab',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'showLink',
              title: 'Show Link',
              type: 'boolean',
              initialValue: true,
              description: 'Toggle to show/hide this footer link',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.max(8).warning('Maximum 8 footer links recommended'),
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
        }),
        defineField({
          name: 'showContactInfo',
          title: 'Show Contact Info',
          type: 'boolean',
          initialValue: true,
          description: 'Toggle to show/hide contact information in footer',
        }),
      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2025 HNMC Healthcare. All rights reserved.',
      description: 'Copyright text displayed at the bottom of the footer',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
        subtitle: 'Footer configuration',
      }
    },
  },
})
