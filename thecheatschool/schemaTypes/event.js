export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'eventImage',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., 10:00 AM - 12:00 PM',
    },
    {
      name: 'mode',
      title: 'Mode of Conduct',
      type: 'string',
      options: {
        list: [
          {title: 'Online', value: 'online'},
          {title: 'Offline', value: 'offline'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Venue address (for offline) or meeting link (for online)',
    },
    {
      name: 'guestSpeakers',
      title: 'Guest Speakers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Speaker Name',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Speaker Title',
              type: 'string',
              description: 'e.g., CEO at Company, Professor at University',
            },
            {
              name: 'photo',
              title: 'Speaker Photo',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'title',
              media: 'photo',
            },
          },
        },
      ],
    },
    {
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'eventImage',
      date: 'date',
    },
    prepare(selection) {
      const {title, date} = selection
      return {
        title: title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date set',
      }
    },
  },
}