import styles from './ButtonGroup.module.css';
import {hexToRgb, getButtonStyles} from '@/utils/buttonStyles';

export default function ButtonGroup({group, onCopy}) {
  return (
    <div className={styles.group}>
      <h3 className={styles.groupTitle}>{group.name}</h3>
      <div className={styles.buttons}>
        {group.variants.map((variant) => {
          const buttonClassName = `${styles.button} ${styles[group.name.toLowerCase().replace(/\s+/g, '')]} ${styles[variant.name]}`;

          return (
            <button
              key={variant.name}
              className={buttonClassName}
              onClick={() => onCopy(getButtonStyles(group.name, variant))}
              aria-label={`Copy ${variant.name} ${group.name} button style`}
              style={{
                '--color': variant.color,
                '--color-rgb': `${hexToRgb(variant.color)}`
              }}
            >
              {variant.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
