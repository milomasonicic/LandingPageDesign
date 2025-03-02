/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'customwebp': "url('/out.webp')",
        'customwebpbb': "url('/output.webp')",
        'customweb1': "url('/output1.webp')",
        'cus': "url('/output1.webp')",
        'us': "url('/output33.webp')",
        'sss': "url('/leonardo.jpg')",
        'ooo': "url('/ot.jpg')",
        'smt': "url('/smt.jpg')",
        'rrr': "url('/rrr.jpg')",
        'music': "url('/music.jpg')",
        'ss': "url('/lr.jpg')",
        'robot': "url('/robot1.jpg')",
        'robot2': "url('/ot.jpg')",
        'logo1': "url('/logo1.jpg')",
        'surgery': "url('/surgery.jpg')",
        'garden': "url('/garden.jpg')"
        

      },
      maxWidth: {
        'container': '1280px', 
        
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"], 
      },

    },
  },
  plugins: [],
}