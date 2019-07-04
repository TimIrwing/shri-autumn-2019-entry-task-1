export default {
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
};
