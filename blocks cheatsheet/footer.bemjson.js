export default {
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
        content: [{ block: 'text', elem: 'word', elemMods: { width: 'l' } }],
      },
    ],
  },
};
