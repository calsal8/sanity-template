export default {
  type: 'object',
  name: 'uiComponentRef',
  title: 'UI component reference',
  fields: [
    {
      type: 'string',
      name: 'name',
      options: {
        list: [{ title: 'Top wave', value: 'topWave' }, { title: 'Bottom wave', value: 'bottomWave' }],
        layout: 'radio',
        direction: 'horizontal'
      }
    }
  ],
  preview: {
    select: {
      title: 'name'
    },
    prepare({ title }) {
      return {
        title: `UI reference: ${title}`
      }
    }
  }
}
