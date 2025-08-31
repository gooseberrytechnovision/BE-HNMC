import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'doctor',
  title: 'Doctor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Doctor Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      description: 'e.g., "Gynecologist", "Fibroid Specialist"',
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'string',
      description: 'e.g., "MD, FACOG"',
    }),
    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Areas of expertise',
    }),
    defineField({
      name: 'photo',
      title: 'Doctor Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Professional background and experience',
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'degree',
              title: 'Degree',
              type: 'string',
            }),
            defineField({
              name: 'institution',
              title: 'Institution',
              type: 'string',
            }),
            defineField({
              name: 'year',
              title: 'Year',
              type: 'number',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'experience',
      title: 'Years of Experience',
      type: 'number',
    }),
    defineField({
      name: 'languages',
      title: 'Languages Spoken',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      description: 'e.g., "Monday-Friday", "By appointment only"',
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
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'office',
          title: 'Office Location',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'appointmentLink',
      title: 'Appointment Booking Link',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Doctor',
      type: 'boolean',
      description: 'Show this doctor on the home page',
      initialValue: false,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'photo',
    },
  },
})
