// Configuration video-studio de Savor (L’Art du Savoir-Vivre).
// Doc : https://github.com/nouhailler/video-studio#readme
import { defineVideoConfig } from '@nouhailler/video-studio';
import savorTutoriel from './scenarios/savor-tutoriel-fr';

export default defineVideoConfig({
  name: 'Savor — L’Art du Savoir-Vivre',
  app: {
    build: 'npm run build',
    staticDir: 'dist'
  },
  driver: {
    type: 'runtime',
    url: '/',
    targetAttribute: 'data-demo-id'
  },
  layout: 'phone',
  capture: {
    colorScheme: 'light'
  },
  output: {
    timeoutMs: 240000
  },
  scenarios: [savorTutoriel],
  validation: {
    sourceDirs: ['src'],
    targetPrefixes: [
      'nav-',
      'menu-',
      'home-domain-',
      'domain-level-',
      'domain-lesson-',
      'rule-fav-',
      'rule-details-',
      'quiz-choice-',
      'scenario-card-',
      'scenario-choice-',
      'search-kind-',
      'search-result-',
      'sheet-card-',
      'dict-entry-',
      'country-card-',
      'settings-theme-',
      'settings-fontsize-'
    ]
  },
  theme: {
    brand: 'Savor',
    logo: '../public/logo.svg',
    colors: {
      bg: '#14192B',
      bgTop: '#1D2640',
      bgMid: '#161E34',
      surface: '#1F2944',
      text: '#FAF7F0',
      accent: '#B08D45',
      accentLight: '#E3CD9A',
      accentDark: '#7A5E22',
      accentInk: '#FAF7F0'
    },
    fontCss: [
      '@fontsource/cormorant-garamond/latin-500.css',
      '@fontsource/source-sans-3/latin-400.css',
      '@fontsource/source-sans-3/latin-600.css'
    ],
    fonts: {
      serif: "'Cormorant Garamond', Georgia, serif",
      sans: "'Source Sans 3', system-ui, sans-serif"
    },
    labels: {
      chapter: 'Chapitre',
      tutorial: 'Tutoriel',
      intro: 'Introduction',
      outro: 'Conclusion'
    }
  }
});
