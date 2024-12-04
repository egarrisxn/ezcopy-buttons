const getDefaultStyle = (color) => `
.button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  background: ${color};
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}`;

const getGradientStyle = (color) => `
.button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  background: linear-gradient(135deg, ${color}, ${adjustColor(color, -20)});
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px ${adjustColor(color, 0, 0.2)};
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px -1px ${adjustColor(color, 0, 0.3)};
}`;

const getOutlineStyle = (color) => `
.button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  background: transparent;
  color: ${color};
  border: 2px solid ${color};
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:hover {
  background: ${color};
  color: white;
  transform: translateY(-2px);
}`;

const getPopArtStyle = (color) => `
.button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  background: ${color};
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease;
  box-shadow: 
    0 6px 0 ${adjustColor(color, -30)},
    0 8px 10px -2px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.button:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 8px 0 ${adjustColor(color, -30)},
    0 10px 12px -2px rgba(0, 0, 0, 0.3);
}

.button:active {
  transform: translateY(2px);
  box-shadow: 
    0 2px 0 ${adjustColor(color, -30)},
    0 4px 6px -2px rgba(0, 0, 0, 0.2);
}`;

const getNeumorphicStyle = (color) => `
.button {
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  background: ${color};
  color: ${isLightColor(color) ? '#1f2937' : 'white'};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 
    8px 8px 16px ${adjustColor(color, -10, 0.2)},
    -8px -8px 16px ${adjustColor(color, 10, 0.2)};
}

.button:hover {
  box-shadow: 
    12px 12px 20px ${adjustColor(color, -10, 0.25)},
    -12px -12px 20px ${adjustColor(color, 10, 0.25)};
}

.button:active {
  box-shadow: 
    inset 8px 8px 16px ${adjustColor(color, -10, 0.2)},
    inset -8px -8px 16px ${adjustColor(color, 10, 0.2)};
}`;

const getGlassStyle = (color) => `
.button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  background: rgba(${hexToRgb(color)}, 0.1);
  color: ${color};
  border: 1px solid rgba(${hexToRgb(color)}, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 6px -1px rgba(${hexToRgb(color)}, 0.1);
}

.button:hover {
  background: rgba(${hexToRgb(color)}, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 6px 8px -1px rgba(${hexToRgb(color)}, 0.2);
}`;

// Utility functions

export function getButtonStyles(groupType, variant) {
  const styleGenerators = {
    Default: getDefaultStyle,
    'Modern Gradient': getGradientStyle,
    Outline: getOutlineStyle,
    'Pop Art': getPopArtStyle,
    Neumorphic: getNeumorphicStyle,
    Glass: getGlassStyle
  };

  return styleGenerators[groupType](variant.color);
}

export function adjustColor(hex, amount, opacity = 1) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  r = Math.max(0, Math.min(255, r + amount));
  g = Math.max(0, Math.min(255, g + amount));
  b = Math.max(0, Math.min(255, b + amount));

  const rgb = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
  return opacity === 1 ? `#${rgb}` : `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

export function isLightColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
}
