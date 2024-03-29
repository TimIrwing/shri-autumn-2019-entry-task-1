export default {
  block: 'event',
  mix: [
    { block: 'theme', mods: { color: 'project-inverse' } },
    { block: 'card', mods: { view: 'default' } },
  ],
  content: [
    {
      block: 'event',
      elem: 'content',
      mix: {
        block: 'card',
        elem: 'content',
        elemMods: {
          'vertical-align': 'center',
          distribute: 'center',
          'space-a': 'xxl',
        },
      },
      content: [
        {
          block: 'event',
          elem: 'preview',
          content: [
            {
              block: 'event',
              elem: 'speaker',
              content: { block: 'avatar', mods: { size: 'm' } },
            },
            { block: 'brand-logo', mods: { name: 'mts', size: 'm' } },
          ],
        },
        {
          block: 'event',
          elem: 'title',
          content: {
            block: 'text',
            mods: { view: 'primary', size: 'xxl', align: 'center' },
            content: { block: 'text', elem: 'word', elemMods: { width: 'l' } },
          },
        },
        {
          block: 'event',
          elem: 'description',
          content: {
            block: 'text',
            mods: { view: 'primary', size: 'l', align: 'center' },
            content: [
              { block: 'text', elem: 'word', elemMods: { width: 'l' } },
              { block: 'text', elem: 'word', elemMods: { width: 'l' } },
              { block: 'text', elem: 'word', elemMods: { width: 'l' } },
              { block: 'text', elem: 'word', elemMods: { width: 'l' } },
              { block: 'text', elem: 'word', elemMods: { width: 'l' } },
              { block: 'text', elem: 'word', elemMods: { width: 'l' } },
              { block: 'text', elem: 'word', elemMods: { width: 'l' } },
              { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            ],
          },
        },
      ],
    },
    {
      block: 'event',
      elem: 'footer',
      mix: {
        block: 'card',
        elem: 'footer',
        elemMods: {
          'vertical-align': 'center',
          distribute: 'center',
          'space-a': 'xxl',
        },
      },
      content: {
        block: 'text',
        mods: { view: 'link', size: 'xl', align: 'center' },
        content: [
          { block: 'text', elem: 'word', elemMods: { width: 's' } },
          { block: 'text', elem: 'word', elemMods: { width: 's' } },
        ],
      },
    },
  ],
};
