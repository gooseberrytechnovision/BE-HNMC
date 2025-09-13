import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // SEO and Meta
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
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
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Image displayed when shared on social media',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
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
      title: 'Topic Section',
      type: 'object',
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
          name: 'whatIsTopic',
          title: 'What is Topic Description',
          type: 'array',
          of: [{type: 'block'}],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'commonSymptomsHeading',
          title: 'Common Symptoms Heading',
          type: 'string',
          initialValue: 'Common Symptoms',
        }),
        defineField({
          name: 'commonSymptoms',
          title: 'Common Symptoms',
          type: 'array',
          of: [{type: 'block'}],
          description: 'List of common symptoms using rich text editor',
        }), 
        defineField({
          name: 'doYouHaveSymptoms',
          title: 'Symptoms CTA (Do You Have Fibroid Symptoms?)',
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Symptoms CTA Heading',
              type: 'string',
              initialValue: 'Experiencing Symptoms?',
            }),
            defineField({
              name: 'symptomsExist',
              title: 'Symptoms Description',
              type: 'array',
              of: [{type: 'block'}],
              validation: (Rule) => Rule.required(),
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
            }),
          ],
        }),
        defineField({
          name: 'additionalInfo',
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
      title: 'About Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Main content about fibroids and HNMC expertise',
        }),
        defineField({
          name: 'image',
          title: 'About Image',
          type: 'image',
          options: {
            hotspot: true,
          },
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
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Services Section
    defineField({
      name: 'services',
      title: 'Services Section',
      type: 'object',
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
      title: 'Resources Section',
      type: 'object',
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
                  type: 'text',
                }),
                defineField({
                  name: 'icon',
                  title: 'Resource Icon',
                  type: 'string',
                  description: 'Lucide icon name (e.g., "BookOpen", "FileText", "Download")',
                  validation: (Rule) => Rule.required(),
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
    
    // Doctors Section
    defineField({
      name: 'doctors',
      title: 'Doctors Section',
      type: 'object',
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
          name: 'featuredDoctors',
          title: 'Featured Doctors',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{type: 'doctor'}],
            },
          ],
        }),
        defineField({
          name: 'ctaButton',
          title: 'View All Doctors Button',
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
              type: 'url',
            }),
          ],
        }),
      ],
    }),

    // Insurance & Billing Section
    defineField({
      name: 'insuranceBilling',
      title: 'Insurance & Billing Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Insurance & Billing Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'insuranceBillingList',
          title: 'Insurance & Billing',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Insurance & Billing Title',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                }), 
              ],
            },
          ],
        }),
      ],
    }),

    // Testimonials Section
    defineField({
      name: 'testimonials',
      title: 'Testimonials Section',
      type: 'object',
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
                  type: 'text',
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

    // Register For Patient Portal
    defineField({
      name: 'registerForPatientPortal',
      title: 'Register For Patient Portal Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Register For Patient Portal Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Register For Patient Portal Subtitle',
          type: 'text',
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
          ],
        }),
        defineField({
          name: 'signUpButton',
          title: 'Book Appointment Button',
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
              type: 'url',
            }),
          ],
        }),
      ],
    }),

    // Footer
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({
          name: 'logo',
          title: 'Footer Logo',
          type: 'image',
        }),
        defineField({
          name: 'description',
          title: 'Footer Description',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Eg: Copyright 2025 HNMC. or All rights reserved',
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
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                }),
              ],
            },
          ],
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
                }),
                defineField({
                  name: 'url',
                  title: 'Link URL',
                  type: 'url',
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'hero.headline',
    },
  },
})
