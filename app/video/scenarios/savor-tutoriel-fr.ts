// Tutoriel complet de Savor (L’Art du Savoir-Vivre).
// Chaque `narrate` est affiché en sous-titre et prononcé par la voix de synthèse.
import { defineScenario, type RuntimeStep } from '@nouhailler/video-studio';

export default defineScenario<RuntimeStep>({
  id: 'savor-tutoriel-fr',
  video: {
    title: 'Savor — Tutoriel complet de L’Art du Savoir-Vivre',
    description: 'Découverte complète de Savor : leçons nuancées, quiz expliqués, situations ramifiées, recherche, guide pratique, dictionnaire, fiches pays, progression et mode hors ligne.',
    language: 'fr',
    voiceEnabled: true,
    resolution: { width: 1920, height: 1080 },
    fps: 30,
    clock: '2026-11-20T14:30:00+01:00',
    firstChapter: 'Premier lancement et accueil',
    intro: {
      eyebrow: 'Tutoriel',
      title: 'L’Art du Savoir-Vivre',
      tagline: 'Comprendre les usages et leurs raisons, sans raideur',
      narration:
        'Bienvenue dans Savor, l’encyclopédie interactive de L’Art du Savoir-Vivre. ' +
        'Nous allons découvrir comment lire les leçons, répondre aux quiz, pratiquer des situations réalistes, consulter le guide et les fiches pays, puis suivre votre progression hors ligne.'
    },
    outro: {
      title: 'Savor',
      bullets: [
        '158 leçons nuancées et leurs quiz expliqués',
        '32 situations pratiques à choix multiples',
        'Guide, dictionnaire et fiches pays hors ligne',
        'Progression et favoris conservés sur votre appareil'
      ],
      narration:
        'Vous connaissez maintenant toutes les ressources de Savor. ' +
        'Explorez chaque domaine à votre rythme, exercez votre discernement en situation et adaptez les réglages à votre confort. Bonne lecture.'
    }
  },
  scenario: {
    name: 'savor-tutoriel-fr',
    label: 'Tutoriel complet',
    steps: [
      // ── Chapitre 1 : Premier lancement et accueil ─────────────────────────
      {
        type: 'highlight',
        target: 'onboarding-modal',
        narrate: 'Au premier lancement, une courte présentation s’affiche. L’application fonctionne sans compte ni adresse.',
        video: { readingPause: 600 }
      },
      {
        type: 'click',
        target: 'onboarding-skip',
        narrate: 'Passons la présentation pour lire l’avertissement important avant d’entrer.',
        video: { zoom: 1.25 }
      },
      {
        type: 'click',
        target: 'onboarding-accept',
        narrate: 'Confirmons la lecture de cet avertissement.',
        video: { zoom: 1.2 }
      },
      {
        type: 'click',
        target: 'onboarding-confirm',
        narrate: 'Validons pour accéder directement au tableau de bord.',
        video: { zoom: 1.25 }
      },
      {
        type: 'highlight',
        target: 'home-start-card',
        narrate: 'Sur l’accueil, cette carte propose de découvrir l’ouvrage ou de situer votre niveau, sans rien verrouiller.'
      },
      {
        type: 'highlight',
        target: 'home-challenge-card',
        narrate: 'À côté, le défi du jour soumet chaque jour une nouvelle situation rapide à résoudre.'
      },
      {
        type: 'highlight',
        target: 'home-domain-usages',
        narrate: 'Plus bas, les huit domaines classent l’encyclopédie, du rapport à soi jusqu’aux usages à l’étranger.'
      },

      // ── Chapitre 2 : Domaines, leçons et quiz ────────────────────────────
      {
        type: 'navigate',
        target: 'home-domain-usages',
        narrate: 'Ouvrons le domaine quatre, consacré aux usages et aux bonnes manières.',
        video: { chapter: 'Domaines, leçons et quiz', transition: 'fade' }
      },
      {
        type: 'highlight',
        target: 'domain-level-beginner',
        narrate: 'Chaque domaine s’organise en trois niveaux : débutant, intermédiaire et avancé, tous accessibles librement.'
      },
      {
        type: 'navigate',
        target: 'domain-lesson-l-4-1-4',
        narrate: 'Ouvrons la leçon sur le tutoiement et le vouvoiement.'
      },
      {
        type: 'click',
        target: 'lesson-fav',
        narrate: 'Un clic sur ce bouton ajoute la leçon aux favoris pour la retrouver facilement.',
        video: { zoom: 1.3 }
      },
      {
        type: 'highlight',
        target: 'lesson-rules',
        narrate: 'Chaque leçon détaille ses règles essentielles en précisant leur statut : usage actuel, principe ou pratique culturelle.',
        video: { readingPause: 700 }
      },
      {
        type: 'click',
        target: 'rule-details-l-4-1-4-r1',
        narrate: 'Déplions les détails pour comprendre pourquoi la règle existe, quand elle s’applique et ses exceptions.',
        video: { zoom: 1.25, readingPause: 800 }
      },
      {
        type: 'click',
        target: 'rule-fav-l-4-1-4-r1',
        narrate: 'Vous pouvez aussi marquer une règle précise d’un signet pour la réviser plus tard.',
        video: { zoom: 1.35 }
      },
      {
        type: 'highlight',
        target: 'lesson-nuances',
        narrate: 'Plus bas, une section dédiée rappelle toujours les nuances selon les milieux, les régions ou les générations.'
      },
      {
        type: 'navigate',
        target: 'lesson-start-quiz',
        narrate: 'Lançons maintenant le quiz de validation pour vérifier ce que nous avons retenu.',
        video: { zoom: 1.2 }
      },
      {
        type: 'click',
        target: 'quiz-choice-l-4-1-4-q1-2',
        narrate: 'Répondons à la première question sur le rôle du « tu » et du « vous ».'
      },
      {
        type: 'click',
        target: 'quiz-validate',
        narrate: 'Validons notre réponse.',
        video: { zoom: 1.25 }
      },
      {
        type: 'highlight',
        target: 'quiz-feedback',
        narrate: 'La correction explique aussitôt la raison de la bonne réponse, sans notation punitive.',
        video: { readingPause: 800 }
      },
      // Enchaînement rapide des questions suivantes pour atteindre le bilan et enregistrer la tentative :
      { type: 'click', target: 'quiz-next', video: { narration: false } },
      { type: 'click', target: 'quiz-choice-l-4-1-4-q2-1', video: { narration: false } },
      { type: 'click', target: 'quiz-validate', video: { narration: false } },
      { type: 'click', target: 'quiz-next', video: { narration: false } },
      // Question 3 volontairement manquée pour illustrer ensuite la section « Questions échouées » dans Révisions :
      { type: 'click', target: 'quiz-choice-l-4-1-4-q3-0', video: { narration: false } },
      { type: 'click', target: 'quiz-validate', video: { narration: false } },
      { type: 'click', target: 'quiz-next', video: { narration: false } },
      { type: 'click', target: 'quiz-choice-l-4-1-4-q4-2', video: { narration: false } },
      { type: 'click', target: 'quiz-validate', video: { narration: false } },
      { type: 'click', target: 'quiz-next', video: { narration: false } },
      { type: 'click', target: 'quiz-choice-l-4-1-4-q5-0', video: { narration: false } },
      { type: 'click', target: 'quiz-choice-l-4-1-4-q5-2', video: { narration: false } },
      { type: 'click', target: 'quiz-validate', video: { narration: false } },
      {
        type: 'click',
        target: 'quiz-next',
        narrate: 'Après la dernière question, affichons le bilan complet du quiz.'
      },
      {
        type: 'highlight',
        target: 'quiz-summary',
        narrate: 'Ce bilan récapitule le score et détaille toutes les explications. Les questions manquées rejoignent vos révisions.',
        video: { readingPause: 800 }
      },
      {
        type: 'navigate',
        target: 'quiz-back-lesson',
        narrate: 'Revenons sur la leçon.',
        video: { zoom: 1.2 }
      },
      {
        type: 'click',
        target: 'lesson-complete',
        narrate: 'Marquons la leçon comme terminée pour l’inscrire dans votre carnet de lecture.',
        video: { zoom: 1.25 }
      },

      // ── Chapitre 3 : Les situations pratiques ────────────────────────────
      {
        type: 'navigate',
        target: 'nav-situations',
        narrate: 'Passons aux situations pratiques depuis la barre de raccourcis en bas de l’écran.',
        video: { chapter: 'Les situations pratiques', transition: 'fade', zoom: 1.25 }
      },
      {
        type: 'highlight',
        target: 'scenarios-domain',
        narrate: 'Trente-deux scènes réalistes vous placent devant des choix concrets, filtrables par domaine et par niveau.'
      },
      {
        type: 'navigate',
        target: 'scenario-card-s-5-4',
        narrate: 'Essayons « Le dîner qui bascule », une situation ramifiée en plusieurs étapes.'
      },
      {
        type: 'highlight',
        target: 'scenario-context',
        narrate: 'Le contexte pose la scène : un invité arrive en retard, accompagné d’une personne imprévue.',
        video: { readingPause: 700 }
      },
      {
        type: 'click',
        target: 'scenario-choice-s-5-4-a-a',
        narrate: 'Choisissons d’accueillir chaleureusement l’invitée sur le pas de la porte.'
      },
      {
        type: 'highlight',
        target: 'scenario-feedback',
        narrate: 'L’application affiche aussitôt le verdict et explique l’effet relationnel de votre décision.',
        video: { readingPause: 800 }
      },
      {
        type: 'click',
        target: 'scenario-next',
        narrate: 'Votre choix oriente la suite de la soirée : passons à l’étape suivante.',
        video: { zoom: 1.25 }
      },
      {
        type: 'click',
        target: 'scenario-choice-s-5-4-b-b',
        narrate: 'À table, une remarque gêne votre invitée : protégeons-la avec tact en proposant une solution simple.'
      },
      {
        type: 'highlight',
        target: 'scenario-rule',
        narrate: 'En fin de parcours, la situation résume la règle en jeu et rappelle sa nuance.',
        video: { readingPause: 800 }
      },

      // ── Chapitre 4 : Consulter au quotidien ──────────────────────────────
      {
        type: 'navigate',
        target: 'topbar-search',
        narrate: 'Pour répondre vite à une question précise, ouvrons la recherche globale.',
        video: { chapter: 'Consulter au quotidien', transition: 'fade', zoom: 1.3 }
      },
      {
        type: 'type',
        target: 'search-input',
        text: 'tutoiement',
        narrate: 'Tapons « tutoiement » : la recherche parcourt leçons, règles, fiches, situations, définitions et pays.'
      },
      {
        type: 'click',
        target: 'search-kind-sheet',
        narrate: 'Ces filtres ciblent un type précis, ici les fiches pratiques.',
        video: { zoom: 1.25 }
      },
      {
        type: 'navigate',
        target: 'search-result-sheet-f-tutoiement',
        narrate: 'Ouvrons la fiche correspondante pour consulter une réponse directe sans suivre tout un cours.'
      },
      {
        type: 'highlight',
        target: 'sheet-advice',
        narrate: 'Chaque fiche réunit les gestes conseillés, leurs raisons, les erreurs à éviter et des formulations prêtes à l’emploi.',
        video: { readingPause: 700 }
      },
      {
        type: 'navigate',
        target: 'topbar-menu',
        narrate: 'Le menu principal regroupe toute la navigation de l’ouvrage par usage.',
        video: { zoom: 1.3 }
      },
      {
        type: 'navigate',
        target: 'menu-dictionnaire',
        narrate: 'Consultons le dictionnaire, qui rassemble soixante-quatre définitions des mots du savoir-vivre.'
      },
      {
        type: 'highlight',
        target: 'dict-alpha',
        narrate: 'Son index alphabétique permet de sauter directement à la lettre souhaitée.',
        video: { zoom: 1.2 }
      },
      {
        type: 'navigate',
        target: 'nav-culture',
        narrate: 'L’onglet Culture donne accès à douze fiches pays pour préparer une rencontre ou un voyage.',
        video: { zoom: 1.25 }
      },
      {
        type: 'navigate',
        target: 'country-card-japon',
        narrate: 'Ouvrons par exemple la fiche consacrée au Japon.'
      },
      {
        type: 'click',
        target: 'country-fav',
        narrate: 'Ajoutons cette fiche pays aux favoris pour la garder sous la main.',
        video: { zoom: 1.3 }
      },
      {
        type: 'highlight',
        target: 'country-limits',
        narrate: 'Chaque fiche précise ses limites et rappelle que les usages décrivent des tendances, jamais des caricatures.',
        video: { readingPause: 700 }
      },

      // ── Chapitre 5 : Suivre et réviser ───────────────────────────────────
      {
        type: 'navigate',
        target: 'nav-progression',
        narrate: 'L’onglet Parcours ouvre votre carnet de lecture personnel, sans classement ni compétition.',
        video: { chapter: 'Suivre et réviser', transition: 'fade', zoom: 1.25 }
      },
      {
        type: 'highlight',
        target: 'progress-stats',
        narrate: 'Vous y retrouvez vos leçons terminées, situations pratiquées, moyenne de quiz et temps de lecture.'
      },
      {
        type: 'highlight',
        target: 'progress-table',
        narrate: 'Un tableau récapitule votre progression par domaine et par niveau, suivi de votre activité récente.'
      },
      {
        type: 'navigate',
        target: 'progress-review-link',
        narrate: 'Accédons aux révisions depuis ce raccourci.'
      },
      {
        type: 'highlight',
        target: 'review-modes',
        narrate: 'La répétition espacée vous propose les questions du jour, vos questions échouées et des quiz de révision.',
        video: { readingPause: 700 }
      },
      {
        type: 'navigate',
        target: 'topbar-menu',
        narrate: 'Ouvrons le menu pour afficher vos favoris.',
        video: { zoom: 1.3 }
      },
      {
        type: 'navigate',
        target: 'menu-favoris',
        narrate: 'Toutes les leçons, règles et fiches pays marquées restent classées ici, disponibles même sans connexion.'
      },

      // ── Chapitre 6 : Réglages et mode hors ligne ─────────────────────────
      {
        type: 'navigate',
        target: 'topbar-menu',
        narrate: 'Terminons par les paramètres depuis le menu.',
        video: { chapter: 'Réglages et mode hors ligne', transition: 'fade', zoom: 1.3 }
      },
      {
        type: 'navigate',
        target: 'menu-parametres',
        narrate: 'Les paramètres adaptent l’affichage à votre confort de lecture et préservent vos données locales.'
      },
      {
        type: 'type',
        target: 'settings-name',
        text: 'Claire',
        narrate: 'Vous pouvez saisir un prénom facultatif pour personnaliser l’accueil, sans qu’il quitte votre appareil.'
      },
      {
        type: 'click',
        target: 'settings-theme-dark',
        narrate: 'Basculez entre le thème papier clair et le thème sombre selon votre environnement.',
        video: { zoom: 1.25 }
      },
      {
        type: 'highlight',
        target: 'settings-offline',
        narrate: 'Tous les contenus sont stockés localement pour fonctionner hors ligne, avec export et restauration en un fichier.',
        video: { readingPause: 700 }
      },
      {
        type: 'navigate',
        target: 'settings-system-link',
        narrate: 'Ouvrons enfin les paramètres système.',
        video: { zoom: 1.2 }
      },
      {
        type: 'highlight',
        target: 'system-install',
        narrate: 'Vous pouvez y vérifier les mises à jour et installer Savor sur votre écran d’accueil pour l’ouvrir d’un geste.',
        video: { readingPause: 700 }
      }
    ]
  }
});
