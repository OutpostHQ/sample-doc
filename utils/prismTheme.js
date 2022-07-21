export const PrismTheme = {
  plain: {
    color: '#2B2962',
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: 'hsl(30, 20%, 50%)',
      },
    },
    {
      types: ['property', 'tag', 'boolean', 'constant', 'symbol'],
      style: { color: '#2B2962' },
    },
    {
      types: ['number'],
      style: { color: '#30A666' },
    },
    {
      types: ['attr-name', 'string', 'char', 'builtin', 'insterted'],
      style: {
        color: '#2B2962',
      },
    },
    {
      types: [
        'operator',
        'entity',
        'url',
        'string',
        'variable',
        'language-css',
      ],
      style: {
        color: 'rgb(102, 100, 232)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['regex', 'important'],
      style: {
        color: '#e90',
      },
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: 'rgb(102, 93, 232)',
      },
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        // opacity: '0.7',
        color: '#F6A2D6',
      },
    },
  ],
}
