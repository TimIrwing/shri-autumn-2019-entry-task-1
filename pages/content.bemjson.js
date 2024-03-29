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
      elemMods: { align: 'center', size: 's' },
      content: [
        {
          block: 'text',
          mods: { type: 'h1', size: 'xxl', view: 'primary' },
          content: [
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
          ],
        },
        {
          block: 'text',
          mods: { type: 'p', size: 'l', view: 'primary' },
          content: [
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
          ],
        },
        {
          block: 'text',
          mods: { type: 'p', size: 'l', view: 'primary' },
          content: [
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
          ],
        },
      ],
    },
    {
      block: 'layout',
      elem: 'container',
      elemMods: { size: 'm', align: 'center' },
      content: {
        block: 'grid',
        mods: { 'm-columns': '10', 'col-gap': 'full' },
        content: [
          {
            block: 'event',
            mix: [
              { block: 'theme', mods: { color: 'project-inverse' } },
              { block: 'card', mods: { view: 'default' } },
              { block: 'grid', elem: 'fraction', elemMods: { 'm-col': '5' } },
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
                      content: {
                        block: 'text',
                        elem: 'word',
                        elemMods: { width: 'l' },
                      },
                    },
                  },
                  {
                    block: 'event',
                    elem: 'description',
                    content: {
                      block: 'text',
                      mods: { view: 'primary', size: 'l', align: 'center' },
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
          },
          {
            block: 'event',
            mix: [
              { block: 'theme', mods: { color: 'project-inverse' } },
              { block: 'card', mods: { view: 'default' } },
              { block: 'grid', elem: 'fraction', elemMods: { 'm-col': '5' } },
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
                      {
                        block: 'brand-logo',
                        mods: { name: 'yota', size: 'm' },
                      },
                    ],
                  },
                  {
                    block: 'event',
                    elem: 'title',
                    content: {
                      block: 'text',
                      mods: { view: 'primary', size: 'xxl', align: 'center' },
                      content: {
                        block: 'text',
                        elem: 'word',
                        elemMods: { width: 'l' },
                      },
                    },
                  },
                  {
                    block: 'event',
                    elem: 'description',
                    content: {
                      block: 'text',
                      mods: { view: 'primary', size: 'l', align: 'center' },
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
          },
        ],
      },
    },
    {
      block: 'layout',
      elem: 'container',
      elemMods: { align: 'center', size: 's' },
      content: [
        {
          block: 'text',
          mods: { type: 'h2', size: 'xxl', view: 'primary' },
          content: [
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
          ],
        },
        {
          block: 'text',
          mods: { type: 'p', size: 'l', view: 'primary' },
          content: [
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
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
          ],
        },
        {
          block: 'text',
          mods: { type: 'h3', size: 'xxl', view: 'primary' },
          content: [
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
          ],
        },
        {
          block: 'text',
          mods: { type: 'p', size: 'l', view: 'primary' },
          content: [
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
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
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
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
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
          ],
        },
      ],
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
