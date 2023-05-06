const config = {
  darkMode: 'class',
  
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    require('path').join(require.resolve(
      '@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],

  theme: {
    extend: {
      colors: {
        'dark-blue': '#151A21',
      },
    },
  },

  plugins: [
    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
  ],
};

module.exports = config;
