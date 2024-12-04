const getDefaultStyle = (color) => {
  const shadowColor = adjustColor(color, -10, 0.3);
  const hoverShadowColor = adjustColor(color, -20, 0.4);

  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: ${color};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px ${shadowColor};
  }
  .button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px -1px ${hoverShadowColor};
  }
  .button:active {
    transform: translateY(0);
  }`;
};

const getRoundedStyle = (color) => {
  const shadowColor = adjustColor(color, -10, 0.3);

  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: ${color};
    color: white;
    border-radius: 24px;
    box-shadow: 0 4px 6px -1px ${shadowColor};
  }
  .button:hover {
    transform: translateY(-2px);
  }
  .button:active {
    transform: translateY(0);
  }`;
};

const getGradientStyle = (color) => {
  const darkenedColor = adjustColor(color, -20);
  const hoverColor = adjustColor(color, -30);

  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: linear-gradient(135deg, ${color}, ${darkenedColor});
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px ${adjustColor(color, -10, 0.3)};
  }
  .button:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, ${color}, ${hoverColor});
  }
  .button:active {
    transform: translateY(0);
  }`;
};

const getPopStyle = (color) => {
  const shadowColor = adjustColor(color, -30);
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: ${color};
    color: white;
    border-radius: 8px;
    transform: perspective(400px) translateZ(0) translateX(1px); /* Initial transform */
    box-shadow: 
      0 0 0 2px rgba(var(--color-rgb), 0.3),
      2px 8px 0 0 color-mix(in srgb, ${color} 70%, black),
      6px 16px 16px rgba(0, 0, 0, 0.2);
  }
  .button:hover {
    transform: perspective(400px) translateZ(2px) translateX(4px); /* On hover */
    box-shadow: 
      0 0 0 2px rgba(var(--color-rgb), 0.3),
      4px 10px 0 0 color-mix(in srgb, ${color} 70%, black),
      8px 20px 20px rgba(0, 0, 0, 0.3);
  }
  .button:active {
    transform: perspective(400px) translateZ(-2px) translateX(0px); /* On active */
    box-shadow: 
      0 0 0 2px rgba(var(--color-rgb), 0.3),
      2px 8px 0 0 color-mix(in srgb, ${color} 70%, black),
      4px 8px 8px rgba(0, 0, 0, 0.2);
  }`;
};

const getOutlineStyle = (color) => {
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: 2px solid ${color};
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: transparent;
    color: ${color};
    border-radius: 8px;
  }
  .button:hover {
    transform: translateY(-2px);
  }
  .button:active {
    transform: translateY(0);
  }`;
};

const getGlowStyle = (color) => {
  const rgbaColor = hexToRgb(color);
  return `
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(${rgbaColor}, 0.3);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(${rgbaColor}, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(${rgbaColor}, 0);
    }
  }
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: 2px solid ${color};
    cursor: pointer;
    transition: all 0.2s ease;
    background: transparent;
    color: ${color};
    border-radius: 8px;
    box-shadow: 0 0 0 0 rgba(${rgbaColor}, 0.3);
    animation: pulse 2s infinite;
  }
  .button:hover {
    background: ${color};
    color: white;
    box-shadow:
      0 0 0 4px rgba(${rgbaColor}, 0.3),
      0 0 20px rgba(${rgbaColor}, 0.6);
  }`;
};

const getNeonStyle = (color) => {
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: rgba(var(--color-rgb), 0.1);
    color: ${color};
    border-radius: 8px;
    text-shadow: 0 0 8px rgba(var(--color-rgb), 0.5);
  }
  .button:hover {
    background: ${color};
    color: white;
  }
  .button:active {
    transform: translateY(0);
  }`;
};

const getLiquidStyle = (color) => {
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: 2px solid ${color};
    background: none;
    color: ${color};
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
  .button::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    background: ${color};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.3s ease;
  }
  .button:hover {
    color: white;
  }
  .button:hover::before {
    transform: scaleY(1);
  }`;
};

const getGlitchStyle = (color) => {
  const shadowColor1 = `rgba(0, 0, 0, 0.1)`;
  const shadowColor2 = `rgba(0, 0, 0, 0.2)`;
  return `
  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: transparent;
    color: ${color};
    border-radius: 8px;
    box-shadow: 
      0 2px 4px ${shadowColor1},
      0 4px 8px -2px ${shadowColor1},
      inset 0 -2px 0 ${shadowColor2};
  }
  .button:hover {
    animation: glitch 0.3s linear infinite;
  }`;
};

const getBubbleStyle = (color) => {
  const shadowColor = adjustColor(color, 0, 0.2);
  const hoverShadowColor1 = 'rgba(0, 0, 0, 0.15)';
  const hoverShadowColor2 = 'rgba(0, 0, 0, 0.15)';
  const insetShadowColor = 'rgba(0, 0, 0, 0.2)';
  const beforeColor = adjustColor(color, -20);
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: transparent;
    color: ${color};
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px ${shadowColor};
    overflow: hidden;
  }
  .button:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 4px 8px ${hoverShadowColor1},
      0 8px 16px -4px ${hoverShadowColor2},
      inset 0 -2px 0 ${insetShadowColor};
  }
  .button::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${beforeColor};
    opacity: 0.2;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease-in-out;
  }
  .button:hover::before {
    transform: scale(4);
  }
  .button:active {
    transform: translateY(0);
  }`;
};

const getMetallicStyle = (color) => {
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    color: ${color};
    border-radius: 12px;
    box-shadow:
    inset 2px 2px 5px #ffffff,
    inset -2px -2px 5px #bababa;
  }
  .button:hover {
  transform: translateY(-2px);
  }
  .button:active {
    transform: translateY(0);
  }`;
};

const getGlassStyle = (color) => {
  const rgbColor = hexToRgb(color);
  return `
  .button {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    border: 1px solid rgba(${rgbColor}, 0.4);
    cursor: pointer;
    transition: all 0.2s ease;
    background: rgba(${rgbColor}, 0.4);
    color: ${color};
    box-shadow: 0 4px 6px -1px rgba(${rgbColor}, 0.3);
    backdrop-filter: blur(8px);
  }
  .button:hover {
    background: rgba(${rgbColor}, 0.5);
    box-shadow: 0 6px 8px -1px rgba(${rgbColor}, 0.4);
    transform: translateY(-2px);
  }
  .button:active {
    transform: translateY(0);
  }`;
};

const getNeumorphicStyle = (color) => {
  const lightShadowColor = adjustColor(color, -10, 0.2);
  const darkShadowColor = adjustColor(color, 10, 0.2);
  const hoverLightShadowColor = adjustColor(color, -10, 0.25);
  const hoverDarkShadowColor = adjustColor(color, 10, 0.25);
  const activeLightShadowColor = adjustColor(color, -10, 0.2);
  const activeDarkShadowColor = adjustColor(color, 10, 0.2);
  const outlineColor = adjustColor(color, 20);
  return `
  .button {
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    transition: box-shadow 0.2s ease, transform 0.2s ease;
    background: ${color};
    color: ${isLightColor(color) ? '#1f2937' : 'white'};
    box-shadow: 
      8px 8px 16px ${lightShadowColor},
      -8px -8px 16px ${darkShadowColor};
  }
  .button:hover {
    box-shadow: 
      12px 12px 20px ${hoverLightShadowColor},
      -12px -12px 20px ${hoverDarkShadowColor};
  }
  .button:active {
    box-shadow: 
      inset 8px 8px 16px ${activeLightShadowColor},
      inset -8px -8px 16px ${activeDarkShadowColor};
    transform: translateY(4px);  /* Adds press effect */
  }
  .button:focus {
    outline: 2px solid ${outlineColor};
    outline-offset: 2px;
  }`;
};

//! Utility functions

export function adjustColor(hex, amount, opacity = 1) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  r = Math.max(0, Math.min(255, r + amount));
  g = Math.max(0, Math.min(255, g + amount));
  b = Math.max(0, Math.min(255, b + amount));

  if (opacity < 1) {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export function hexToRgb(hex) {
  if (!/^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(hex)) {
    throw new Error('Invalid HEX color');
  }
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

export function isLightColor(hex) {
  if (!/^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(hex)) {
    throw new Error('Invalid HEX color');
  }
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
}

export function getButtonStyles(groupType, variant) {
  const styleGenerators = {
    Default: getDefaultStyle,
    Rounded: getRoundedStyle,
    Gradient: getGradientStyle,
    Pop: getPopStyle,
    Outline: getOutlineStyle,
    Glow: getGlowStyle,
    Neon: getNeonStyle,
    Liquid: getLiquidStyle,
    Glitch: getGlitchStyle,
    Bubble: getBubbleStyle,
    Metallic: getMetallicStyle,
    Glass: getGlassStyle,
    Neumorphic: getNeumorphicStyle
  };

  const generator = styleGenerators[groupType];
  if (!generator) {
    throw new Error(`Invalid button style group: ${groupType}`);
  }
  return generator(variant.color);
}
