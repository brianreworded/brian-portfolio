
   
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
       'dyslexia': ['"OpenDyslexic 3"'],
       'dyslexiabold': ['OpenDyslexic3bold'],
       'open': ['"Open Sans"'],
       'display': ['"OpenDyslexic 3"', 'Georgia', 'Arial'],
       'mainfont': ['var(--fonts)'],
       'ossie': ["Oswald"],
       'georgie': ["Georgia"],
    },
    extend: {
      colors: {
        'tquoise': '#04ed38',
        'reworded': '#12c7ed',
        'pinky': '#e670dbc0',
        'night':'#000a35',
        'purply':'#b676e3',
        'paleorange': '#efa148',
        'vegas': '#C4B454',
        'minerva': '#F2A51D',
        'th-fonting': 'var(--fonting)',
        'th-fontingsecondary': 'var(--fontingsecondary)',
        'th-textboxbackground': 'var(--textboxbackground)',
        'th-background': 'var(--background)',
        'th-background-secondary': 'var(--background-secondary)',
        'th-foreground': 'var(--foreground)',
        'th-primary-dark': 'var(--primary-dark)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-light': 'var(--primary-light)',
        'th-accent-dark': 'var(--accent-dark)',
        'th-accent-medium': 'var(--accent-medium)',
        'th-accent-light': 'var(--accent-light)',
      },
      
    },
  },
  plugins: [

  ],
}

