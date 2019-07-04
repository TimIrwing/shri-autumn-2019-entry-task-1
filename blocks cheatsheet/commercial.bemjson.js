export default {
  block: 'commercial',
  mix: [
    {
      block: 'card',
      mods: {
        view: 'default',
      },
    },
    {
      block: 'theme',
      mods: { color: 'project-brand' },
    },
  ],
  content: [
    {
      block: 'card',
      elem: 'content',
      elemMods: { 'space-a': 'xxl' },
      mix: {
        block: 'commercial',
        elem: 'pic',
      },
      content: [
        {
          block: 'commercial',
          elem: 'image',
          mix: {
            block: 'image',
          },
        },
      ],
    },
    {
      block: 'card',
      elem: 'footer',
      elemMods: {
        'space-a': 'xxl',
      },
      mix: [
        {
          block: 'commercial',
          elem: 'info',
        },
      ],
      content: [
        {
          block: 'text',
          mods: { view: 'primary', size: 's' },
          content: [
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 'l' },
            },
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 'm' },
            },
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 'l' },
            },
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 's' },
            },
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 's' },
            },
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 'm' },
            },
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 'l' },
            },
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 'm' },
            },
          ],
        },
        {
          block: 'commercial',
          elem: 'navigation',
          content: [
            { block: 'commercial', elem: 'page-button' },
            { block: 'commercial', elem: 'page-button' },
            { block: 'commercial', elem: 'page-button' },
          ],
        },
      ],
    },
  ],
};
