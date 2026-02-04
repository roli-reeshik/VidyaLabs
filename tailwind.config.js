/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#111827',
        navy: '#1E293B',
        'digital-blue': '#2563EB',
        'digital-blue-hover': '#1d4ed8',
        'ice-blue': '#F8FAFC',
        'mist-gray': '#F1F5F9',
        'icon-bg': '#DBEAFE',
        // Modern tech colors
        'tech-cyan': '#06B6D4',
        'tech-purple': '#8B5CF6',
        'tech-pink': '#EC4899',
        'tech-green': '#10B981',
        'tech-orange': '#F59E0B',
        'dark-bg': '#0A0E27',
        'dark-surface': '#151B3D',
        'accent-blue': '#3B82F6',
        'accent-cyan': '#22D3EE',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-cyber': 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)',
        'gradient-ai': 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
        'gradient-software': 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
        'mesh-gradient': 'radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(236, 72, 153, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(6, 182, 212, 0.15) 0px, transparent 50%)',
      },
      boxShadow: {
        'tech-glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'tech-glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'cyber-glow': '0 0 30px rgba(139, 92, 246, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
