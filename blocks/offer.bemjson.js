export default {
  block: 'offer',
  mix: [
    { block: 'theme', mods: { color: 'megafon-brand' } },
    { block: 'card', mods: { view: 'default' } },
  ],
  content: [
    {
      block: 'offer',
      elem: 'partner',
      mix: { block: 'card', elem: 'content', elemMods: { 'space-a': 'xl' } },
      content: {
        block: 'brand-logo',
        mods: { name: 'megafon', size: 'm' },
      },
    },
    {
      block: 'offer',
      elem: 'footer',
      mix: { block: 'card', elem: 'footer', elemMods: { 'space-a': 'xl' } },
      content: [
        {
          block: 'text',
          mods: { view: 'ghost', size: 's' },
          mix: { block: 'offer', elem: 'name' },
          content: { block: 'text', elem: 'word', elemMods: { width: 'm' } },
        },
        {
          block: 'text',
          mods: { view: 'primary', size: 'xxl' },
          mix: { block: 'offer', elem: 'sale' },
          content: { block: 'text', elem: 'word', elemMods: { width: 'm' } },
        },
        {
          block: 'text',
          mods: { view: 'secondary', size: 'm' },
          content: [
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'm' } },
            { block: 'text', elem: 'word', elemMods: { width: 's' } },
            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
          ],
        },
      ],
    },
  ],
};
