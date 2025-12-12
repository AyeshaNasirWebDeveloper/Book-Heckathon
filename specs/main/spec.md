# Implementing UI/UX Enhancements

## 1. Create global color system (global.css)
- Define CSS variables for:
  --color-bg-dark
  --color-bg-light
  --color-text-dark
  --color-text-light
  --color-gold
  --color-gold-hover
  --color-border
- Add typography scale
- Add responsive fluid font sizes

## 2. Update docusaurus.config.js
- Enable custom theme
- Add dark/light theme tokens
- Update navbar style hooks
- Update footer style hooks

## 3. Implement Dark/Light theme styles
- Create themeOverrides.css
- Apply black-white-gold palette
- Add transitions for theme switching

## 4. Implement Navbar
- Rebuild navbar using gold accents
- Add hover glow effect
- Add mobile expanding drawer

## 5. Implement Hero section
- Add robotics theme layout
- Add Framer Motion animations:
  - floating robots
  - fade-in
  - parallax layers
- Add CTA buttons with golden theme

## 6. Implement Homepage Features
- Replace images with:
  /static/img/robot-1.jpeg
  /static/img/robot-2.jpeg
  /static/img/robot-3.jpeg
- Add hover s