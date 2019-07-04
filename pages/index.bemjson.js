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
      content: {
        block: 'content-grid',
        mods: {
          'row-gap': 'xxl',
        },
        content: [
          {
            block: 'grid',
            mods: { 'm-columns': '10', 'col-gap': 'full' },
            tag: 'section',
            content: [
              {
                block: 'payment',
                mix: [
                  { block: 'form', mods: { border: 'all' } },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '5' },
                  },
                ],
                content: [
                  {
                    block: 'payment',
                    elem: 'header',
                    mix: {
                      block: 'form',
                      elem: 'item',
                      elemMods: {
                        'space-v': 'l',
                        'space-h': 'xl',
                        border: 'bottom',
                      },
                    },
                    content: {
                      block: 'text',
                      mods: {
                        view: 'primary',
                        size: 'xxl',
                      },
                      content: {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                          width: 'l',
                        },
                      },
                    },
                  },
                  {
                    block: 'payment',
                    elem: 'content',
                    mix: {
                      block: 'form',
                      elem: 'item',
                      elemMods: {
                        'space-v': 'xxxl',
                        'space-h': 'xl',
                        border: 'bottom',
                      },
                    },
                    content: [
                      {
                        block: 'form',
                        elem: 'item',
                        elemMods: {
                          'indent-b': 'xl',
                          distribute: 'between',
                          'vertical-align': 'center',
                        },
                        content: [
                          {
                            block: 'form',
                            elem: 'label',
                            elemMods: { width: 'default' },
                            content: {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'l',
                              },
                              content: {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                  width: 'l',
                                },
                              },
                            },
                          },
                          { block: 'input', mods: { size: 'l' } },
                        ],
                      },
                      {
                        block: 'form',
                        elem: 'item',
                        elemMods: {
                          distribute: 'between',
                          'vertical-align': 'center',
                        },
                        content: [
                          {
                            block: 'form',
                            elem: 'label',
                            elemMods: { width: 'default' },
                            content: {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'l',
                              },
                              content: {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                  width: 'l',
                                },
                              },
                            },
                          },
                          { block: 'input', mods: { size: 'l' } },
                        ],
                      },
                    ],
                  },
                  {
                    block: 'payment',
                    elem: 'footer',
                    mix: {
                      block: 'form',
                      elem: 'item',
                      elemMods: {
                        distribute: 'between',
                        'vertical-align': 'center',
                        'space-v': 'l',
                        'space-h': 'xl',
                        border: 'bottom',
                      },
                    },
                    content: [
                      {
                        block: 'text',
                        mods: {
                          view: 'primary',
                          size: 'l',
                        },
                        content: {
                          block: 'text',
                          elem: 'word',
                          elemMods: {
                            width: 'l',
                          },
                        },
                      },
                      {
                        block: 'button',
                        mods: { size: 'l' },
                      },
                    ],
                  },
                ],
              },
              {
                block: 'warning',
                mix: [
                  {
                    block: 'informer',
                    mods: { view: 'default', border: 'all' },
                  },
                  { block: 'theme', mods: { color: 'project-warning' } },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '5' },
                  },
                ],
                content: [
                  {
                    block: 'warning',
                    elem: 'content',
                    mix: {
                      block: 'informer',
                      elem: 'content',
                      elemMods: {
                        distribute: 'center',
                        'space-a': 'xxl',
                      },
                    },
                    content: [
                      {
                        block: 'placeholder',
                        mods: {
                          view: 'primary',
                          size: 'm',
                        },
                      },
                      {
                        block: 'text',
                        mods: { view: 'primary', size: 'xl', align: 'center' },
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
                        ],
                      },
                    ],
                  },
                  {
                    block: 'warning',
                    elem: 'button-wrapper',
                    mix: {
                      block: 'informer',
                      elem: 'action',
                      elemMods: {
                        distribute: 'center',
                        'space-a': 'xl',
                      },
                    },
                    content: {
                      block: 'button',
                      mods: { size: 'l' },
                    },
                  },
                ],
              },
            ],
          },
          {
            block: 'grid',
            mods: { 'm-columns': '10', 'col-gap': 'half' },
            tag: 'section',
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
                    elemMods: { 'm-col': '2' },
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
                    elemMods: { 'm-col': '2' },
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
                    elemMods: { 'm-col': '2' },
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
                    elemMods: { 'm-col': '2' },
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
                    elemMods: { 'm-col': '2' },
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
          {
            block: 'grid',
            mods: { 'm-columns': '12', 'col-gap': 'full' },
            tag: 'section',
            content: [
              {
                block: 'history',
                mix: [
                  {
                    block: 'list',
                    mods: { view: 'default', border: 'all' },
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '8' },
                  },
                ],
                content: [
                  {
                    block: 'history',
                    elem: 'transaction',
                    mix: {
                      block: 'list',
                      elem: 'item',
                      elemMods: {
                        border: 'bottom',
                        'space-a': 'l',
                      },
                    },
                    content: [
                      {
                        block: 'history',
                        elem: 'show',
                        mix: [
                          { block: 'e-accordion', elem: 'short' },
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: { 'vertical-align': 'center' },
                          },
                        ],
                        content: {
                          block: 'history',
                          elem: 'details',
                          content: [
                            {
                              block: 'history',
                              elem: 'time',
                              content: [
                                {
                                  block: 'text',
                                  mods: { view: 'ghost', size: 's' },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'm' },
                                  },
                                },
                                {
                                  block: 'text',
                                  mods: { view: 'ghost', size: 's' },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'm' },
                                  },
                                },
                              ],
                            },
                            {
                              block: 'history',
                              elem: 'destination',
                              mix: {
                                block: 'icon-plus',
                                mods: { 'vertical-align': 'center' },
                              },
                              content: [
                                {
                                  block: 'history',
                                  elem: 'pic',
                                  mix: {
                                    block: 'icon-plus',
                                    elem: 'icon',
                                    elemMods: {
                                      'indent-r': 's',
                                      'indent-l': 'l',
                                    },
                                  },
                                  content: {
                                    block: 'brand-logo',
                                    mods: { name: 'yota', size: 'm' },
                                  },
                                },
                                {
                                  block: 'history',
                                  elem: 'label',
                                  mix: { block: 'icon-plus', elem: 'block' },
                                  content: {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: { width: 'l' },
                                    },
                                  },
                                },
                              ],
                            },
                            {
                              block: 'history',
                              elem: 'label',
                              content: {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
                                content: {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: { width: 'm' },
                                },
                              },
                            },
                          ],
                        },
                      },
                      {
                        block: 'history',
                        elem: 'hide',
                        mix: [
                          {
                            block: 'e-accordion',
                            elem: 'more',
                            elemMods: {
                              view: 'default',
                            },
                          },
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: {
                              'indent-t': 'm',
                            },
                          },
                        ],
                        content: [
                          {
                            block: 'history',
                            elem: 'description',
                            mix: {
                              block: 'list',
                              elem: 'item',
                              elemMods: { 'indent-b': 'm' },
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
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'l' },
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
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'l' },
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            block: 'history',
                            elem: 'actions',
                            mix: {
                              block: 'list',
                              elem: 'item',
                              elemMods: { distribute: 'between' },
                            },
                            content: [
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
                                content: {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: { width: 'l' },
                                },
                              },
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
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
                  {
                    block: 'history',
                    elem: 'transaction',
                    mix: {
                      block: 'list',
                      elem: 'item',
                      elemMods: {
                        border: 'bottom',
                        'space-a': 'l',
                      },
                    },
                    content: [
                      {
                        block: 'history',
                        elem: 'show',
                        mix: [
                          { block: 'e-accordion', elem: 'short' },
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: { 'vertical-align': 'center' },
                          },
                        ],
                        content: {
                          block: 'history',
                          elem: 'details',
                          content: [
                            {
                              block: 'history',
                              elem: 'time',
                              content: [
                                {
                                  block: 'text',
                                  mods: { view: 'ghost', size: 's' },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'm' },
                                  },
                                },
                                {
                                  block: 'text',
                                  mods: { view: 'ghost', size: 's' },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'm' },
                                  },
                                },
                              ],
                            },
                            {
                              block: 'history',
                              elem: 'destination',
                              mix: {
                                block: 'icon-plus',
                                mods: { 'vertical-align': 'center' },
                              },
                              content: [
                                {
                                  block: 'history',
                                  elem: 'pic',
                                  mix: {
                                    block: 'icon-plus',
                                    elem: 'icon',
                                    elemMods: {
                                      'indent-r': 's',
                                      'indent-l': 'l',
                                    },
                                  },
                                  content: {
                                    block: 'brand-logo',
                                    mods: { name: 'mts', size: 'm' },
                                  },
                                },
                                {
                                  block: 'history',
                                  elem: 'label',
                                  mix: { block: 'icon-plus', elem: 'block' },
                                  content: {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: { width: 'l' },
                                    },
                                  },
                                },
                              ],
                            },
                            {
                              block: 'history',
                              elem: 'label',
                              content: {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
                                content: {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: { width: 'm' },
                                },
                              },
                            },
                          ],
                        },
                      },
                      {
                        block: 'history',
                        elem: 'hide',
                        mix: [
                          {
                            block: 'e-accordion',
                            elem: 'more',
                            elemMods: {
                              view: 'default',
                            },
                          },
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: {
                              'indent-t': 'm',
                            },
                          },
                        ],
                        content: [
                          {
                            block: 'history',
                            elem: 'description',
                            mix: {
                              block: 'list',
                              elem: 'item',
                              elemMods: { 'indent-b': 'm' },
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
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'l' },
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
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'l' },
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            block: 'history',
                            elem: 'actions',
                            mix: {
                              block: 'list',
                              elem: 'item',
                              elemMods: { distribute: 'between' },
                            },
                            content: [
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
                                content: {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: { width: 'l' },
                                },
                              },
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
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
                  {
                    block: 'history',
                    elem: 'transaction',
                    mix: {
                      block: 'list',
                      elem: 'item',
                      elemMods: {
                        border: 'bottom',
                        'space-a': 'l',
                      },
                    },
                    content: [
                      {
                        block: 'history',
                        elem: 'show',
                        mix: [
                          { block: 'e-accordion', elem: 'short' },
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: { 'vertical-align': 'center' },
                          },
                        ],
                        content: {
                          block: 'history',
                          elem: 'details',
                          content: [
                            {
                              block: 'history',
                              elem: 'time',
                              content: [
                                {
                                  block: 'text',
                                  mods: { view: 'ghost', size: 's' },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'm' },
                                  },
                                },
                                {
                                  block: 'text',
                                  mods: { view: 'ghost', size: 's' },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'm' },
                                  },
                                },
                              ],
                            },
                            {
                              block: 'history',
                              elem: 'destination',
                              mix: {
                                block: 'icon-plus',
                                mods: { 'vertical-align': 'center' },
                              },
                              content: [
                                {
                                  block: 'history',
                                  elem: 'pic',
                                  mix: {
                                    block: 'icon-plus',
                                    elem: 'icon',
                                    elemMods: {
                                      'indent-r': 's',
                                      'indent-l': 'l',
                                    },
                                  },
                                  content: {
                                    block: 'brand-logo',
                                    mods: { name: 'kcell', size: 'm' },
                                  },
                                },
                                {
                                  block: 'history',
                                  elem: 'label',
                                  mix: { block: 'icon-plus', elem: 'block' },
                                  content: {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: { width: 'l' },
                                    },
                                  },
                                },
                              ],
                            },
                            {
                              block: 'history',
                              elem: 'label',
                              content: {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
                                content: {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: { width: 'm' },
                                },
                              },
                            },
                          ],
                        },
                      },
                      {
                        block: 'history',
                        elem: 'hide',
                        mix: [
                          {
                            block: 'e-accordion',
                            elem: 'more',
                            elemMods: {
                              view: 'default',
                            },
                          },
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: {
                              'indent-t': 'm',
                            },
                          },
                        ],
                        content: [
                          {
                            block: 'history',
                            elem: 'description',
                            mix: {
                              block: 'list',
                              elem: 'item',
                              elemMods: { 'indent-b': 'm' },
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
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'l' },
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
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'l' },
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            block: 'history',
                            elem: 'actions',
                            mix: {
                              block: 'list',
                              elem: 'item',
                              elemMods: { distribute: 'between' },
                            },
                            content: [
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
                                content: {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: { width: 'l' },
                                },
                              },
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
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
                  {
                    block: 'history',
                    elem: 'transaction',
                    mix: {
                      block: 'list',
                      elem: 'item',
                      elemMods: {
                        'space-a': 'l',
                      },
                    },
                    content: [
                      {
                        block: 'history',
                        elem: 'show',
                        mix: [
                          { block: 'e-accordion', elem: 'short' },
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: { 'vertical-align': 'center' },
                          },
                        ],
                        content: {
                          block: 'history',
                          elem: 'details',
                          content: [
                            {
                              block: 'history',
                              elem: 'time',
                              content: [
                                {
                                  block: 'text',
                                  mods: { view: 'ghost', size: 's' },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'm' },
                                  },
                                },
                                {
                                  block: 'text',
                                  mods: { view: 'ghost', size: 's' },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'm' },
                                  },
                                },
                              ],
                            },
                            {
                              block: 'history',
                              elem: 'destination',
                              mix: {
                                block: 'icon-plus',
                                mods: { 'vertical-align': 'center' },
                              },
                              content: [
                                {
                                  block: 'history',
                                  elem: 'pic',
                                  mix: {
                                    block: 'icon-plus',
                                    elem: 'icon',
                                    elemMods: {
                                      'indent-r': 's',
                                      'indent-l': 'l',
                                    },
                                  },
                                  content: {
                                    block: 'brand-logo',
                                    mods: { name: 'megafon', size: 'm' },
                                  },
                                },
                                {
                                  block: 'history',
                                  elem: 'label',
                                  mix: { block: 'icon-plus', elem: 'block' },
                                  content: {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: { width: 'l' },
                                    },
                                  },
                                },
                              ],
                            },
                            {
                              block: 'history',
                              elem: 'label',
                              content: {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
                                content: {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: { width: 'm' },
                                },
                              },
                            },
                          ],
                        },
                      },
                      {
                        block: 'history',
                        elem: 'hide',
                        mix: [
                          {
                            block: 'e-accordion',
                            elem: 'more',
                            elemMods: {
                              view: 'default',
                            },
                          },
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: {
                              'indent-t': 'm',
                            },
                          },
                        ],
                        content: [
                          {
                            block: 'history',
                            elem: 'description',
                            mix: {
                              block: 'list',
                              elem: 'item',
                              elemMods: { 'indent-b': 'm' },
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
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'l' },
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
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: { width: 'l' },
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            block: 'history',
                            elem: 'actions',
                            mix: {
                              block: 'list',
                              elem: 'item',
                              elemMods: { distribute: 'between' },
                            },
                            content: [
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
                                content: {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: { width: 'l' },
                                },
                              },
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
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
              {
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
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '4' },
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
