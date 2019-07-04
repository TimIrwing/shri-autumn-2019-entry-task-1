export default {
  block: 'subscription',
  mix: [
    { block: 'theme', mods: { color: 'project-brand' } },
    { block: 'card', mods: { view: 'default' } },
  ],
  content: [
    {
      block: 'subscription',
      elem: 'info',
      mix: { block: 'card', elem: 'content', elemMods: { 'space-a': 'xl' } },
      content: [
        {
          block: 'subscription',
          elem: 'title',
          content: {
            block: 'text',
            mods: { view: 'primary', size: 'xxl' },
            content: { block: 'text', elem: 'word', elemMods: { width: 'l' } },
          },
        },
        {
          block: 'subscription',
          elem: 'advantages',
          mix: { block: 'list' },
          content: [
            {
              block: 'subscription',
              elem: 'advantage',
              mix: {
                block: 'list',
                elem: 'item',
                elemMods: { 'space-b': 's' },
              },
              content: {
                block: 'text',
                mods: { view: 'primary', size: 'l' },
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
                    elemMods: { width: 's' },
                  },
                ],
              },
            },
            {
              block: 'subscription',
              elem: 'advantage',
              mix: {
                block: 'list',
                elem: 'item',
                elemMods: { 'space-b': 's' },
              },
              content: {
                block: 'text',
                mods: { view: 'primary', size: 'l' },
                content: [
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
                ],
              },
            },
            {
              block: 'subscription',
              elem: 'advantage',
              mix: {
                block: 'list',
                elem: 'item',
                elemMods: { 'space-b': 's' },
              },
              content: {
                block: 'text',
                mods: { view: 'primary', size: 'l' },
                content: [
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: { width: 'm' },
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
                ],
              },
            },
            {
              block: 'subscription',
              elem: 'advantage',
              mix: {
                block: 'list',
                elem: 'item',
                elemMods: { 'space-b': 's' },
              },
              content: {
                block: 'text',
                mods: { view: 'primary', size: 'l' },
                content: [
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
                ],
              },
            },
            {
              block: 'subscription',
              elem: 'advantage',
              mix: {
                block: 'list',
                elem: 'item',
                elemMods: { 'space-b': 's' },
              },
              content: {
                block: 'text',
                mods: { view: 'primary', size: 'l' },
                content: [
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: { width: 'm' },
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
                ],
              },
            },
          ],
        },
      ],
    },
    {
      block: 'subscription',
      elem: 'footer',
      mix: [
        { block: 'list' },
        { block: 'card', elem: 'footer', elemMods: { 'space-a': 'xl' } },
      ],
      content: [
        {
          block: 'subscription',
          elem: 'control',
          mix: { block: 'list', elem: 'item', elemMods: { 'space-b': 's' } },
          content: {
            block: 'input',
            mods: { size: 'l' },
          },
        },
        {
          block: 'subscription',
          elem: 'control',
          mix: { block: 'list', elem: 'item', elemMods: { 'space-b': 's' } },
          content: {
            block: 'button',
            mods: { size: 'l', width: 'full' },
          },
        },
      ],
    },
  ],
};
