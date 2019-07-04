export default {
  block: 'layout',
  elem: 'container',
  elemMods: {
    align: 'center',
  },
  mix: [
    {
      block: 'theme',
      mods: {
        size: 'default',
        space: 'default',
        color: 'project-default',
        gap: 'small',
      },
    },
    { block: 'index' },
  ],
  content: [
    {
      block: 'header',
      tag: 'header',
      content: {
        block: 'header',
        elem: 'content',
        content: [
          { block: 'header', elem: 'logo' },
          {
            block: 'onoffswitch',
            content: { block: 'onoffswitch', elem: 'button' },
          },
        ],
      },
    },
    {
      block: 'layout',
      elem: 'container',
      elemMods: {
        align: 'center',
        size: 'm',
      },
      mix: { block: 'product-page', elem: 'section-1' },
      content: {
        block: 'grid',
        mods: { 'm-columns': '12', 'col-gap': 'full' },
        content: [
          {
            block: 'section',
            mix: {
              block: 'grid',
              elem: 'fraction',
              elemMods: { 'm-col': '8' },
            },
            content: [
              {
                block: 'text',
                mods: { type: 'h1', size: 'xxl', view: 'primary' },
                content: {
                  block: 'text',
                  elem: 'word',
                  elemMods: { width: 'l' },
                },
              },
              {
                block: 'text',
                mods: { type: 'p', size: 'm', view: 'primary' },
                content: [
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                ],
              },
              {
                block: 'text',
                mods: { type: 'h2', size: 'xl', view: 'primary' },
                content: {
                  block: 'text',
                  elem: 'word',
                  elemMods: { width: 'l' },
                },
              },
              {
                block: 'text',
                mods: { type: 'p', size: 'm', view: 'primary' },
                content: [
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                ],
              },
            ],
          },
          {
            block: 'cover',
            mix: [
              { block: 'card', mods: { view: 'default' } },
              { block: 'theme', mods: { color: 'project-brand' } },
              {
                block: 'grid',
                elem: 'fraction',
                elemMods: { 'm-col': '4' },
              },
              { block: 'product-page', elem: 'cover' },
            ],
            content: [
              {
                block: 'cover',
                elem: 'info',
                mix: {
                  block: 'card',
                  elem: 'content',
                  elemMods: { 'space-a': 'xxl' },
                },
                content: [
                  {
                    block: 'cover',
                    elem: 'preview',
                    mix: { block: 'image' },
                  },
                  {
                    block: 'text',
                    mods: { view: 'primary', size: 'xxl' },
                    content: {
                      block: 'text',
                      elem: 'word',
                      elemMods: { width: 'l' },
                    },
                  },
                  {
                    block: 'text',
                    mods: { view: 'primary', size: 'xxl' },
                    content: {
                      block: 'text',
                      elem: 'word',
                      elemMods: { width: 'm' },
                    },
                  },
                ],
              },
              {
                block: 'cover',
                elem: 'footer',
                mix: {
                  block: 'card',
                  elem: 'footer',
                  elemMods: { 'space-a': 'xxl' },
                },
                content: {
                  block: 'button',
                  mods: { size: 'l', width: 'full' },
                },
              },
            ],
          },
        ],
      },
    },
    {
      block: 'layout',
      elem: 'container',
      mix: [
        { block: 'theme', mods: { color: 'project-inverse' } },
        { block: 'product-page', elem: 'section-2' },
      ],
      content: {
        block: 'layout',
        elem: 'container',
        elemMods: { align: 'center', size: 'm' },
        content: [
          {
            block: 'text',
            mods: { size: 'xl', view: 'primary' },
            content: [
              {
                block: 'text',
                elem: 'word',
                elemMods: { width: 'l' },
              },
              {
                block: 'text',
                elem: 'word',
                elemMods: { width: 'l' },
              },
            ],
          },
          {
            block: 'grid',
            mods: { 'm-columns': '12', 'col-gap': 'half' },
            mix: { block: 'product-page', elem: 'products' },
            content: [
              {
                block: 'product',
                mix: [
                  {
                    block: 'card',
                    mods: { view: 'default', border: 'all' },
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '3' },
                  },
                ],
                content: [
                  {
                    block: 'product',
                    elem: 'content',
                    mix: {
                      block: 'card',
                      elem: 'content',
                      elemMods: { 'space-a': 'm' },
                    },
                    content: {
                      block: 'image',
                      mix: { block: 'product', elem: 'image' },
                    },
                  },
                  {
                    block: 'product',
                    elem: 'footer',
                    mix: {
                      block: 'card',
                      elem: 'footer',
                      elemMods: { 'space-a': 'm' },
                    },

                    content: [
                      {
                        block: 'text',
                        mods: { view: 'primary', size: 'm' },
                        content: {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'l' },
                        },
                      },
                      {
                        block: 'text',
                        mods: { view: 'primary', size: 's' },
                        content: {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'm' },
                        },
                      },
                    ],
                  },
                ],
              },
              {
                block: 'product',
                mix: [
                  {
                    block: 'card',
                    mods: { view: 'default', border: 'all' },
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '3' },
                  },
                ],
                content: [
                  {
                    block: 'product',
                    elem: 'content',
                    mix: {
                      block: 'card',
                      elem: 'content',
                      elemMods: { 'space-a': 'm' },
                    },
                    content: {
                      block: 'image',
                      mix: { block: 'product', elem: 'image' },
                    },
                  },
                  {
                    block: 'product',
                    elem: 'footer',
                    mix: {
                      block: 'card',
                      elem: 'footer',
                      elemMods: { 'space-a': 'm' },
                    },

                    content: [
                      {
                        block: 'text',
                        mods: { view: 'primary', size: 'm' },
                        content: {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'l' },
                        },
                      },
                      {
                        block: 'text',
                        mods: { view: 'primary', size: 's' },
                        content: {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'm' },
                        },
                      },
                    ],
                  },
                ],
              },
              {
                block: 'product',
                mix: [
                  {
                    block: 'card',
                    mods: { view: 'default', border: 'all' },
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '3' },
                  },
                ],
                content: [
                  {
                    block: 'product',
                    elem: 'content',
                    mix: {
                      block: 'card',
                      elem: 'content',
                      elemMods: { 'space-a': 'm' },
                    },
                    content: {
                      block: 'image',
                      mix: { block: 'product', elem: 'image' },
                    },
                  },
                  {
                    block: 'product',
                    elem: 'footer',
                    mix: {
                      block: 'card',
                      elem: 'footer',
                      elemMods: { 'space-a': 'm' },
                    },

                    content: [
                      {
                        block: 'text',
                        mods: { view: 'primary', size: 'm' },
                        content: {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'l' },
                        },
                      },
                      {
                        block: 'text',
                        mods: { view: 'primary', size: 's' },
                        content: {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'm' },
                        },
                      },
                    ],
                  },
                ],
              },
              {
                block: 'product',
                mix: [
                  {
                    block: 'card',
                    mods: { view: 'default', border: 'all' },
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '3' },
                  },
                ],
                content: [
                  {
                    block: 'product',
                    elem: 'content',
                    mix: {
                      block: 'card',
                      elem: 'content',
                      elemMods: { 'space-a': 'm' },
                    },
                    content: {
                      block: 'image',
                      mix: { block: 'product', elem: 'image' },
                    },
                  },
                  {
                    block: 'product',
                    elem: 'footer',
                    mix: {
                      block: 'card',
                      elem: 'footer',
                      elemMods: { 'space-a': 'm' },
                    },

                    content: [
                      {
                        block: 'text',
                        mods: { view: 'primary', size: 'm' },
                        content: {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'l' },
                        },
                      },
                      {
                        block: 'text',
                        mods: { view: 'primary', size: 's' },
                        content: {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'm' },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      block: 'footer',
      tag: 'footer',
      content: {
        block: 'footer',
        elem: 'content',
        content: [
          {
            block: 'text',
            mods: { view: 'primary', size: 'l' },
            content: [
              { block: 'text', elem: 'word', elemMods: { width: 'l' } },
              { block: 'text', elem: 'word', elemMods: { width: 's' } },
            ],
          },
          {
            block: 'text',
            mods: { view: 'primary', size: 'l' },
            content: [
              { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            ],
          },
        ],
      },
    },
  ],
};
