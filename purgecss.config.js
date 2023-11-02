module.exports = {
    content: [
      './src/*.html',
    ],
    css: ['./src/assets/css/tw-output.css'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  };
  