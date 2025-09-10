import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navbar',
  title: 'Navigation Bar',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo (Desktop)',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main logo for desktop screens'
    }),
    defineField({
      name: 'mobileLogo',
      title: 'Logo (Mobile)',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Smaller logo for mobile screens. If not provided, desktop logo will be used.'
    }),
    defineField({
      name: 'logoAlt',
      title: 'Logo Alt Text',
      type: 'string',
      description: 'Alternative text for both desktop and mobile logos',
      validation: Rule => Rule.required().max(100)
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Text that appears next to the logo (e.g., "Fibroid Care Specialists")',
      validation: Rule => Rule.max(100)
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
          description: 'Main contact phone number',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'emergencyText',
          title: 'Emergency Text',
          type: 'string',
          description: 'Text for emergency availability (e.g., "24/7 Emergency")',
          validation: Rule => Rule.max(50)
        }),
        defineField({
          name: 'showContactInfo',
          title: 'Show Contact Info',
          type: 'boolean',
          description: 'Whether to display contact information in the header',
          initialValue: true
        })
      ]
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call-to-Action Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text (Desktop)',
          type: 'string',
          description: 'Text displayed on the CTA button for desktop',
          validation: Rule => Rule.required().max(30)
        }),
        defineField({
          name: 'mobileText',
          title: 'Button Text (Mobile)',
          type: 'string',
          description: 'Text displayed on the CTA button for mobile',
          validation: Rule => Rule.max(20)
        }),
        defineField({
          name: 'showButton',
          title: 'Show CTA Button',
          type: 'boolean',
          description: 'Whether to display the CTA button',
          initialValue: true
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'tagline',
      media: 'logo'
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title || 'Navigation Bar',
        media: media
      }
    }
  }
})
