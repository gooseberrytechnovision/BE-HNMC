import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sidebar',
  title: 'Sidebar Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Sidebar Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Logo displayed in the sidebar'
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Lucide icon name (e.g., "Home", "User", "CreditCard")',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'label',
              title: 'Menu Label',
              type: 'string',
              validation: Rule => Rule.required().max(50)
            }),
            defineField({
              name: 'linkType',
              title: 'Link Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Internal (Scroll to Section)', value: 'internal' },
                  { title: 'External Link', value: 'external' }
                ]
              },
              initialValue: 'internal',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'internalSection',
              title: 'Internal Section',
              type: 'string',
              description: 'Section ID to scroll to (only for internal links)',
              options: {
                list: [
                  { title: 'Home', value: 'home' },
                  { title: 'About Fibroids', value: 'about-fibroids' },
                  { title: 'Meet Dr. Liberman', value: 'dr-liberman' },
                  { title: 'Our Services', value: 'services' },
                  { title: 'Resources', value: 'resources' },
                  { title: 'About Us', value: 'about' },
                  { title: 'Testimonials', value: 'testimonials' },
                  { title: 'Book Appointment', value: 'appointment' },
                  { title: 'Insurance & Billing', value: 'insurance' },
                  { title: 'Patient Portal', value: 'register' }
                ]
              },
              hidden: ({ parent }) => parent?.linkType !== 'internal'
            }),
            defineField({
              name: 'externalUrl',
              title: 'External URL',
              type: 'url',
              description: 'External link URL (only for external links)',
              hidden: ({ parent }) => parent?.linkType !== 'external'
            }),
            defineField({
              name: 'openInNewTab',
              title: 'Open in New Tab',
              type: 'boolean',
              description: 'Whether to open external links in a new tab',
              initialValue: true,
              hidden: ({ parent }) => parent?.linkType !== 'external'
            })
          ]
        }
      ]
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
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: Rule => Rule.required().email()
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'showContactInfo',
          title: 'Show Contact Info',
          type: 'boolean',
          description: 'Whether to display contact information in the sidebar',
          initialValue: true
        })
      ]
    }),
  ],
  preview: {
    select: {
      title: 'menuItems',
      media: 'logo'
    },
    prepare(selection) {
      const { title } = selection
      const itemCount = title ? title.length : 0
      return {
        title: `Sidebar (${itemCount} menu items)`,
        media: selection.media
      }
    }
  }
})
