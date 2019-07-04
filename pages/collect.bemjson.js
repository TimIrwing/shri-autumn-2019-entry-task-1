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
      block: 'content-grid',
      mods: { 'row-gap': 'xxl' },
      content: [
        {
          block: 'layout',
          elem: 'container',
          mix: [
            { block: 'theme', mods: { color: 'project-inverse' } },
            { block: 'collect-page', elem: 'section-1' },
          ],
          content: {
            block: 'layout',
            elem: 'container',
            elemMods: { size: 'm', align: 'center' },
            content: {
              block: 'grid',
              mods: { 'm-columns': '12', 'col-gap': 'half' },
              content: [
                {
                  block: 'collect',
                  mix: [
                    {
                      block: 'card',
                      mods: { view: 'default', border: 'all' },
                    },
                    { block: 'theme', mods: { color: 'project-inverse' } },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: { 'm-col': '3' },
                    },
                  ],
                  content: [
                    {
                      block: 'collect',
                      elem: 'image',
                      mix: { block: 'card', elem: 'content' },
                      content: [
                        { block: 'image' },
                        {
                          block: 'collect',
                          elem: 'progress',
                          content: {
                            block: 'collect',
                            elem: 'done',
                            elemMods: { size: 'two-third' },
                          },
                        },
                      ],
                    },
                    {
                      block: 'collect',
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: { 'space-a': 'l' },
                      },
                      content: [
                        {
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
                          ],
                        },
                        {
                          block: 'text',
                          mods: { view: 'secondary', size: 'm' },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: { width: 's' },
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
                              elemMods: { width: 'l' },
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: { width: 's' },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  block: 'collect',
                  mix: [
                    {
                      block: 'card',
                      mods: { view: 'default', border: 'all' },
                    },
                    { block: 'theme', mods: { color: 'project-inverse' } },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: { 'm-col': '3' },
                    },
                  ],
                  content: [
                    {
                      block: 'collect',
                      elem: 'image',
                      mix: { block: 'card', elem: 'content' },
                      content: [
                        { block: 'image' },
                        {
                          block: 'collect',
                          elem: 'progress',
                          content: {
                            block: 'collect',
                            elem: 'done',
                            elemMods: { size: 'one-third' },
                          },
                        },
                      ],
                    },
                    {
                      block: 'collect',
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: { 'space-a': 'l' },
                      },
                      content: [
                        {
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
                          ],
                        },
                        {
                          block: 'text',
                          mods: { view: 'secondary', size: 'm' },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: { width: 's' },
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
                              elemMods: { width: 'l' },
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: { width: 's' },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  block: 'collect',
                  mix: [
                    {
                      block: 'card',
                      mods: { view: 'default', border: 'all' },
                    },
                    { block: 'theme', mods: { color: 'project-inverse' } },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: { 'm-col': '3' },
                    },
                  ],
                  content: [
                    {
                      block: 'collect',
                      elem: 'image',
                      mix: { block: 'card', elem: 'content' },
                      content: [
                        { block: 'image' },
                        {
                          block: 'collect',
                          elem: 'progress',
                          content: {
                            block: 'collect',
                            elem: 'done',
                            elemMods: { size: 'half' },
                          },
                        },
                      ],
                    },
                    {
                      block: 'collect',
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: { 'space-a': 'l' },
                      },
                      content: [
                        {
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
                          ],
                        },
                        {
                          block: 'text',
                          mods: { view: 'secondary', size: 'm' },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: { width: 's' },
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
                              elemMods: { width: 'l' },
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: { width: 's' },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  block: 'collect',
                  mix: [
                    {
                      block: 'card',
                      mods: { view: 'default', border: 'all' },
                    },
                    { block: 'theme', mods: { color: 'project-inverse' } },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: { 'm-col': '3' },
                    },
                  ],
                  content: [
                    {
                      block: 'collect',
                      elem: 'image',
                      mix: { block: 'card', elem: 'content' },
                      content: [
                        { block: 'image' },
                        {
                          block: 'collect',
                          elem: 'progress',
                          content: {
                            block: 'collect',
                            elem: 'done',
                            elemMods: { size: 'two-third' },
                          },
                        },
                      ],
                    },
                    {
                      block: 'collect',
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: { 'space-a': 'l' },
                      },
                      content: [
                        {
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
                          ],
                        },
                        {
                          block: 'text',
                          mods: { view: 'secondary', size: 'm' },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: { width: 's' },
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
                              elemMods: { width: 'l' },
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: { width: 's' },
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
        },
        {
          block: 'layout',
          elem: 'container',
          elemMods: { size: 'm', align: 'center' },
          content: {
            block: 'grid',
            mods: { 'm-columns': '12', 'col-gap': 'full' },
            content: [
              {
                block: 'articles',
                mix: [
                  { block: 'list', mods: { view: 'default' } },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '5' },
                  },
                ],
                content: [
                  {
                    block: 'articles',
                    elem: 'article',
                    mix: {
                      block: 'list',
                      elem: 'item',
                      elemMods: { 'indent-b': 'xl' },
                    },
                    content: {
                      block: 'articles',
                      elem: 'unit',
                      mix: {
                        block: 'icon-plus',
                        mods: { 'vertical-align': 'center' },
                      },
                      content: [
                        {
                          block: 'articles',
                          elem: 'pic',
                          mix: [
                            {
                              block: 'theme',
                              mods: { color: 'project-inverse' },
                            },
                            {
                              block: 'icon-plus',
                              elem: 'icon',
                              elemMods: { 'indent-r': 'm' },
                            },
                          ],
                          content: { block: 'image' },
                        },
                        {
                          block: 'articles',
                          elem: 'content',
                          mix: { block: 'icon-plus', elem: 'block' },
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'secondary', size: 'l' },
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
                                {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: { width: 'm' },
                                },
                              ],
                            },
                            {
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
                              ],
                            },
                            {
                              block: 'text',
                              mods: { view: 'link', size: 'm' },
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
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    block: 'articles',
                    elem: 'article',
                    mix: {
                      block: 'list',
                      elem: 'item',
                      elemMods: { 'indent-b': 'xl' },
                    },
                    content: {
                      block: 'articles',
                      elem: 'unit',
                      mix: {
                        block: 'icon-plus',
                        mods: { 'vertical-align': 'center' },
                      },
                      content: [
                        {
                          block: 'articles',
                          elem: 'pic',
                          mix: [
                            {
                              block: 'theme',
                              mods: { color: 'project-inverse' },
                            },
                            {
                              block: 'icon-plus',
                              elem: 'icon',
                              elemMods: { 'indent-r': 'm' },
                            },
                          ],
                          content: { block: 'image' },
                        },
                        {
                          block: 'articles',
                          elem: 'content',
                          mix: { block: 'icon-plus', elem: 'block' },
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'secondary', size: 'l' },
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
                                {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: { width: 'm' },
                                },
                              ],
                            },
                            {
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
                              ],
                            },
                            {
                              block: 'text',
                              mods: { view: 'link', size: 'm' },
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
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    block: 'articles',
                    elem: 'article',
                    mix: {
                      block: 'list',
                      elem: 'item',
                      elemMods: { 'indent-b': 'xl' },
                    },
                    content: {
                      block: 'articles',
                      elem: 'unit',
                      mix: {
                        block: 'icon-plus',
                        mods: { 'vertical-align': 'center' },
                      },
                      content: [
                        {
                          block: 'articles',
                          elem: 'pic',
                          mix: [
                            {
                              block: 'theme',
                              mods: { color: 'project-inverse' },
                            },
                            {
                              block: 'icon-plus',
                              elem: 'icon',
                              elemMods: { 'indent-r': 'm' },
                            },
                          ],
                          content: { block: 'image' },
                        },
                        {
                          block: 'articles',
                          elem: 'content',
                          mix: { block: 'icon-plus', elem: 'block' },
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'secondary', size: 'l' },
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
                                {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: { width: 'm' },
                                },
                              ],
                            },
                            {
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
                              ],
                            },
                            {
                              block: 'text',
                              mods: { view: 'link', size: 'm' },
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
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              {
                block: 'offer',
                mix: [
                  { block: 'theme', mods: { color: 'megafon-brand' } },
                  { block: 'card', mods: { view: 'default' } },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '3' },
                  },
                ],
                content: [
                  {
                    block: 'offer',
                    elem: 'partner',
                    mix: {
                      block: 'card',
                      elem: 'content',
                      elemMods: { 'space-a': 'xl' },
                    },
                    content: {
                      block: 'brand-logo',
                      mods: { name: 'megafon', size: 'm' },
                    },
                  },
                  {
                    block: 'offer',
                    elem: 'footer',
                    mix: {
                      block: 'card',
                      elem: 'footer',
                      elemMods: { 'space-a': 'xl' },
                    },
                    content: [
                      {
                        block: 'text',
                        mods: { view: 'ghost', size: 's' },
                        mix: { block: 'offer', elem: 'name' },
                        content: {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'm' },
                        },
                      },
                      {
                        block: 'text',
                        mods: { view: 'primary', size: 'xxl' },
                        mix: { block: 'offer', elem: 'sale' },
                        content: {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'm' },
                        },
                      },
                      {
                        block: 'text',
                        mods: { view: 'secondary', size: 'm' },
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
                            elemMods: { width: 'l' },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                block: 'subscription',
                mix: [
                  { block: 'theme', mods: { color: 'project-brand' } },
                  { block: 'card', mods: { view: 'default' } },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '4' },
                  },
                ],
                content: [
                  {
                    block: 'subscription',
                    elem: 'info',
                    mix: {
                      block: 'card',
                      elem: 'content',
                      elemMods: { 'space-a': 'xl' },
                    },
                    content: [
                      {
                        block: 'subscription',
                        elem: 'title',
                        content: {
                          block: 'text',
                          mods: { view: 'primary', size: 'xxl' },
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: { width: 'l' },
                          },
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
                      {
                        block: 'card',
                        elem: 'footer',
                        elemMods: { 'space-a': 'xl' },
                      },
                    ],
                    content: [
                      {
                        block: 'subscription',
                        elem: 'control',
                        mix: {
                          block: 'list',
                          elem: 'item',
                          elemMods: { 'space-b': 's' },
                        },
                        content: {
                          block: 'input',
                          mods: { size: 'l' },
                        },
                      },
                      {
                        block: 'subscription',
                        elem: 'control',
                        mix: {
                          block: 'list',
                          elem: 'item',
                          elemMods: { 'space-b': 's' },
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
            ],
          },
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
