export default {
  block: 'articles',
  mix: { block: 'list', mods: { view: 'default' } },
  content: [
    {
      block: 'articles',
      elem: 'article',
      mix: { block: 'list', elem: 'item', elemMods: { 'indent-b': 'xl' } },
      content: {
        block: 'articles',
        elem: 'unit',
        mix: { block: 'icon-plus', mods: { 'vertical-align': 'center' } },
        content: [
          {
            block: 'articles',
            elem: 'pic',
            mix: [
              { block: 'theme', mods: { color: 'project-inverse' } },
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
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                ],
              },
              {
                block: 'text',
                mods: { view: 'primary', size: 'l' },
                content: [
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                ],
              },
              {
                block: 'text',
                mods: { view: 'link', size: 'm' },
                content: [
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
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
      mix: { block: 'list', elem: 'item', elemMods: { 'indent-b': 'xl' } },
      content: {
        block: 'articles',
        elem: 'unit',
        mix: { block: 'icon-plus', mods: { 'vertical-align': 'center' } },
        content: [
          {
            block: 'articles',
            elem: 'pic',
            mix: [
              { block: 'theme', mods: { color: 'project-inverse' } },
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
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                ],
              },
              {
                block: 'text',
                mods: { view: 'primary', size: 'l' },
                content: [
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                ],
              },
              {
                block: 'text',
                mods: { view: 'link', size: 'm' },
                content: [
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
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
      mix: { block: 'list', elem: 'item', elemMods: { 'indent-b': 'xl' } },
      content: {
        block: 'articles',
        elem: 'unit',
        mix: { block: 'icon-plus', mods: { 'vertical-align': 'center' } },
        content: [
          {
            block: 'articles',
            elem: 'pic',
            mix: [
              { block: 'theme', mods: { color: 'project-inverse' } },
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
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                ],
              },
              {
                block: 'text',
                mods: { view: 'primary', size: 'l' },
                content: [
                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                ],
              },
              {
                block: 'text',
                mods: { view: 'link', size: 'm' },
                content: [
                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};
