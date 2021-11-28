module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        outer: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        filterItem: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      spacing: {
        '99': '27rem',
        '102': '30rem',
        '105': '33rem',
        '108': '36rem',
        '111': '39rem',
        '114': '42rem',
        '117': '45rem',
        '120': '48rem',
      },
      colors: {
        primary: '#FFAB00',
        secondary: '#757575',
        'nav-gray': '#f7f7f7',
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        green: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        blue: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1976D2',
          800: '#1565C0',
          900: '#0D47A1',
          'A100': '#82B1FF',
          'A200': '#448AFF',
          'A400': '#2979FF',
          'A700': '#2962FF',
        },
        red: {
          50: '#FFEBEE',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#EF9A9A',
          400: '#EF5350',
          500: '#F44336',
          600: '#E53935',
          700: '#D32F2F',
          800: '#C62828',
          900: '#B71C1C',
        },
        yellow: {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
      },
    },
    fontSize: {
      'xs': '8px',
      'sm': '10px',
      'tiny': '12px',
      'base': '14px',
      'lg': '17px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '29px',
      '4xl': '35px',
      '5xl': '42px',
      '6xl': '48px',
    },
    fontFamily: {
      roboto: ['Roboto', 'Noto Sans TC'],
      'noto-sans': ['Noto Sans TC', 'Roboto']
    },
    backgroundImage: {
      'banner-city-desktop': "url('/src/assets/img/desktop/Banner.png')",
      'banner-city-mobile': "url('/src/assets/img/mobile/Banner.png')",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
