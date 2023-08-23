/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', '"Open Sans"', 'Roboto', 'Arial']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

