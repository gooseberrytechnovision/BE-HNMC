import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [

    // Hero Section
    defineField({
      name: 'hero',
      title: '🏠 Hero Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'headline',
          title: 'Main Headline',
          type: 'string',
          description: 'Primary headline for the hero section',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subheadline',
          title: 'Subheadline',
          type: 'text',
          description: 'Supporting text below the main headline',
        }),
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Badge Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'showBadge',
              title: 'Show Badge',
              type: 'boolean',
              initialValue: true,
            }),
          ],
        }),
        defineField({
          name: 'ctaButton',
          title: 'Primary Call to Action Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
              description: 'Enter relative URL or full URL',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'secondaryButton',
          title: 'Secondary Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
              description: 'Enter relative URL or full URL',
            }),
            defineField({
              name: 'showButton',
              title: 'Show Secondary Button',
              type: 'boolean',
              initialValue: true,
            }),
          ],
        }),
        defineField({
          name: 'stats',
          title: 'Statistics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'number',
                  title: 'Number',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'rightContent',
          title: 'Right Side Content',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Content Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Content Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'achievements',
              title: 'Achievements List',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Achievement Text',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                },
              ],
            }),
          ],
        }),
        defineField({
          name: 'floatingCards',
          title: 'Floating Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Card Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'subtitle',
                  title: 'Card Subtitle',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'position',
                  title: 'Card Position',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Top Right', value: 'top-right' },
                      { title: 'Bottom Left', value: 'bottom-left' },
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'showCard',
                  title: 'Show Card',
                  type: 'boolean',
                  initialValue: true,
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Hero Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // Topic Section
    defineField({
      name: 'topic',
      title: '📋 Topic Section (About Fibroids)',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Topic Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Topic Subtitle',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'mainContent',
          title: 'What is Topic Description',
          type: 'array',
          of: [{type: 'block'}],
          validation: (Rule) => Rule.required(),
          description: 'Main description about the topic',
        }),
        defineField({
          name: 'detailsHeading',
          title: 'Common Symptoms Heading',
          type: 'string',
          initialValue: 'Common Symptoms',
          description: 'Heading for the symptoms section',
        }),
        defineField({
          name: 'detailsList',
          title: 'Common Symptoms',
          type: 'array',
          of: [{type: 'block'}],
          description: 'List of common symptoms using rich text editor',
        }), 
        defineField({
          name: 'callToAction',
          title: 'Symptoms CTA (Do You Have Fibroid Symptoms?)',
          type: 'object',
          description: 'Call to action section for symptoms',
          fields: [
            defineField({
              name: 'heading',
              title: 'Symptoms CTA Heading',
              type: 'string',
              initialValue: 'Experiencing Symptoms?',
              description: 'Heading for the symptoms CTA section',
            }),
            defineField({
              name: 'description',
              title: 'Symptoms Description',
              type: 'array',
              of: [{type: 'block'}],
              validation: (Rule) => Rule.required(),
              description: 'Description text for symptoms',
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
              description: 'Can be relative URL (e.g., /appointment) or external URL',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Get Expert Help',
              description: 'Text displayed on the CTA button',
            }),
          ],
        }),
        defineField({
          name: 'infoCards',
          title: 'Additional Information Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'infoCard',
              title: 'Information Card',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Card Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Card Description',
                  type: 'text',
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Lucide icon name (e.g., shield, users, heart)',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'showCard',
                  title: 'Show Card',
                  type: 'boolean',
                  initialValue: true,
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.max(2),
        }),
      ],
    }),

    // About Section
    defineField({
      name: 'about',
      title: '🏥 About Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          description: 'Optional subtitle for the section',
        }),
        defineField({
          name: 'description',
          title: 'Main Description',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Main content about fibroids and HNMC expertise using rich text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'mediaType',
          title: 'Media Type',
          type: 'string',
          options: {
            list: [
              { title: 'Image', value: 'image' },
              { title: 'Video', value: 'video' },
            ],
          },
          initialValue: 'image',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'About Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          hidden: ({ parent }) => parent?.mediaType !== 'image',
        }),
        defineField({
          name: 'video',
          title: 'About Video',
          type: 'file',
          options: {
            accept: 'video/*',
          },
          hidden: ({ parent }) => parent?.mediaType !== 'video',
        }),
        defineField({
          name: 'stats',
          title: 'Statistics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'number',
                  title: 'Number',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  description: 'Lucide icon name (e.g., "Users", "Award", "Clock")',
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.max(4).warning('Maximum 4 stats recommended'),
        }),
      ],
    }),

    // Services Section
    defineField({
      name: 'services',
      title: '⚕️ Services Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
        }),
        defineField({
          name: 'servicesList',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Service Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Service Description',
                  type: 'text',
                }),
                defineField({
                  name: 'icon',
                  title: 'Service Icon',
                  type: 'string',
                  description: 'Lucide icon name (e.g., "Stethoscope", "Heart", "Brain")',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'link',
                  title: 'Service Link',
                  type: 'string',
                  description: 'Internal section (e.g., "#services") or external URL (e.g., "https://example.com")',
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
              description: 'Text displayed on the CTA button',
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
              description: 'Can be relative URL (e.g., /appointment) or external URL',
            }),
            defineField({
              name: 'showButton',
              title: 'Show Button',
              type: 'boolean',
              description: 'Toggle to show/hide the CTA button',
              initialValue: true,
            }),
          ],
        }),
      ],
    }),


    // Resource Section
    defineField({
      name: 'resources',
      title: '📖 Resources Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Resources Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Resources Subtitle',
          type: 'text',
        }),
        defineField({
          name: 'resourcesList',
          title: 'Resources',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Resource Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Resource Description',
                  type: 'array',
                  of: [{ type: 'block'}],
                }),
                defineField({
                  name: 'icon',
                  title: 'Resource Icon',
                  type: 'string',
                  description: 'Lucide icon name (e.g., "BookOpen", "FileText", "Download")',
                }),
                defineField({
                  name: 'link',
                  title: 'Resource Link',
                  type: 'string',
                  description: 'Internal section (e.g., "#resources") or external URL (e.g., "https://example.com")',
                }),
                defineField({
                  name: 'showCard',
                  title: 'Show Card',
                  type: 'boolean',
                  description: 'Toggle to show/hide this resource card',
                  initialValue: true,
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.max(5).warning('Maximum 5 cards recommended for optimal layout'),
        }),
      ],
    }),

    defineField({
      name: 'insurance',
      title: '💳 Insurance Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Insurance Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Insurance Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'mainContent',
          title: 'What is Insurance Description',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Main description about insurance coverage and benefits',
        }),
        defineField({
          name: 'detailsHeading',
          title: 'Coverage Details Heading',
          type: 'string',
          initialValue: 'Coverage Details',
          description: 'Heading for the insurance coverage details section',
        }),
        defineField({
          name: 'detailsList',
          title: 'Coverage Details',
          type: 'array',
          of: [{type: 'block'}],
          description: 'List of coverage details using rich text editor',
        }), 
        defineField({
          name: 'callToAction',
          title: 'Insurance CTA (Contact for Insurance Questions)',
          type: 'object',
          description: 'Call to action section for insurance inquiries',
          fields: [
            defineField({
              name: 'heading',
              title: 'Insurance CTA Heading',
              type: 'string',
              initialValue: 'Have Insurance Questions?',
              description: 'Heading for the insurance contact section',
            }),
            defineField({
              name: 'description',
              title: 'Insurance Description',
              type: 'array',
              of: [{type: 'block'}],
              description: 'Description text for insurance inquiries',
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
              description: 'Can be relative URL (e.g., /contact) or external URL',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Contact Us',
              description: 'Text displayed on the CTA button',
            }),
          ],
        }),
        defineField({
          name: 'infoCards',
          title: 'Additional Insurance Information Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'infoCard',
              title: 'Insurance Information Card',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Card Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Card Description',
                  type: 'text',
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Lucide icon name (e.g., shield, credit-card, check-circle)',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'showCard',
                  title: 'Show Card',
                  type: 'boolean',
                  initialValue: true,
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.max(2),
        }),
      ],
    }),

    // Testimonials Section
    defineField({
      name: 'testimonials',
      title: '⭐ Testimonials Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'testimonialsList',
          title: 'Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'quote',
                  title: 'Testimonial Quote',
                  type: 'array',
                  of: [
                    {type: 'block'},
                    {type: 'image'}
                  ],
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'author',
                  title: 'Author Name',
                  type: 'string',
                }),
                defineField({
                  name: 'authorTitle',
                  title: 'Author Title/Location',
                  type: 'string',
                }),
                defineField({
                  name: 'profilePhoto',
                  title: 'Profile Photo',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  description: 'Optional profile photo for the testimonial author',
                }),
                defineField({
                  name: 'rating',
                  title: 'Rating',
                  type: 'number',
                  validation: (Rule) => Rule.min(1).max(5),
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Call to Action Section
    defineField({
      name: 'cta',
      title: '🎯 Call to Action Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'CTA Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'CTA Description',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Rich text description for the CTA section',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'button',
          title: 'CTA Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
              description: 'Enter relative URL (e.g., #appointment) or full URL (e.g., https://example.com)',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'showSection',
          title: 'Show CTA Section',
          type: 'boolean',
          initialValue: true,
          description: 'Toggle to show/hide the entire CTA section',
        }),
      ],
    }),


  ],
  preview: {
    select: {
      title: 'hero.headline',
      subtitle: 'hero.subheadline',
    },
  },
})
