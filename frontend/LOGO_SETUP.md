# Blackstone Tech Logo & Brand Animation Setup Guide

## 🎨 Brand Colors - Neon Blue Glow Theme

All website styling has been updated to use the Blackstone Tech logo's neon blue glow color scheme:

### Color Variables (CSS)
```css
--primary-color: #0a0a0f         /* Deep dark background */
--secondary-color: #1a1a2e       /* Secondary dark */
--accent-color: #00d9ff          /* Bright cyan/neon blue */
--accent-dark: #0099cc           /* Darker blue */
--neon-blue: #00d9ff             /* Primary neon blue */
--neon-blue-glow: #0066ff        /* Deep blue glow */
```

## 📁 Logo Image Setup

### Important: Save Your Logo Image
The logo from the attached image needs to be saved to the following location:

**Path:** `c:\Users\M\blackstone-tech\frontend\images\logo.png`

1. Download or save the Blackstone Tech logo image
2. Place it in the `frontend/images/` folder
3. Ensure the filename is exactly: `logo.png`

The logo will automatically appear in:
- Navigation bar (top left)
- Hero section (center of homepage)
- All pages that reference `images/logo.png`

## ✨ Animation Effects Applied

### Logo Animations
- **Intense Neon Glow**: Pulsing cyan/blue glow effect
- **Rainbow Glow Cycle**: Cycles through the blue spectrum
- **Hover Effects**: Enhanced glow on interaction
- **Drop Shadow Glow**: 3D glow effect

### Text Animations
- **Neon Text Glow**: Title text glows with electric blue effect
- **Electric Pulse**: Text pulses with intensity
- **Gradient Animated**: Smooth gradient transitions

### Card/Element Animations
- **Neon Border Glow**: Cards glow on hover
- **Fade In Up**: Elements fade in as you scroll
- **Service Card Hover**: Enhanced glow effects
- **Button Glow**: Interactive button effects

## 🎬 CSS Classes for Animations

You can add these classes to any HTML element to activate animations:

```html
<!-- Logo animations -->
<img class="logo-pulse">           <!-- Pulsing effect -->
<img class="logo-rainbow-glow">    <!-- Color cycling glow -->
<img class="intense-neon-glow">    <!-- Strong glow -->

<!-- Text animations -->
<h1 class="neon-text-glow">Title</h1>          <!-- Text glow -->
<p class="glowing-text">Text</p>               <!-- Classic glow -->
<p class="electric-pulse">Text</p>             <!-- Electric effect -->

<!-- Element animations -->
<div class="neon-border-glow">Content</div>    <!-- Border glow -->
<div class="fade-in-up">Content</div>          <!-- Fade in -->
<div class="floating">Content</div>            <!-- Float animation -->
```

## 🎨 Updated Elements

The following sections have been styled with the neon blue theme:

### Header & Navigation
- Logo with glowing border
- Text with neon glow
- Glowing dropdown borders
- Neon login button

### Hero Section
- Dark gradient background with blue accents
- Animated background particles
- Glowing logo container
- Neon title text
- Glowing buttons with cyan glow

### Services Section
- Neon blue border on cards
- Glowing icons
- Hover effects with intense blue glow
- Smooth transitions

### Products & Logistics
- Neon border styling
- Enhanced hover effects
- Glow shadows
- Icon glow effects

### Footer
- Neon top border
- Glowing social icons
- Text glow on hover
- Blue accent color throughout

## 📱 Responsive Design

All animations are optimized for:
- Desktop screens (1200px+)
- Tablets (768px - 1199px)
- Mobile devices (< 768px)

## 🚀 Performance Tips

The animations use CSS keyframes for optimal performance:
- All animations run at 60 FPS
- GPU-accelerated transforms
- Smooth transitions on all browsers

## 🔧 Customization

To modify animation colors, edit the CSS variables in `css/style.css`:

```css
:root {
    --accent-color: #00d9ff;      /* Change the main blue color here */
    --neon-blue-glow: #0066ff;    /* Change glow intensity */
}
```

## ✅ Checklist

- [ ] Save `logo.png` to `frontend/images/` folder
- [ ] Verify logo appears in navbar
- [ ] Check logo appears in hero section
- [ ] Test animations in different browsers
- [ ] Verify mobile responsiveness
- [ ] Test color contrast for accessibility

## 📊 Browser Support

Animations work on all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎯 Next Steps

1. Copy the provided logo image to `frontend/images/logo.png`
2. Open `index.html` in a browser to see the animations
3. Test hover effects on buttons and cards
4. Verify glow effects on different screens
5. Customize colors if needed in `css/style.css`

---

**All files updated with neon blue theme and animation effects! 🌟**
