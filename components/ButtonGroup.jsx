import styles from "./ButtonGroup.module.css";
import {hexToRgb} from "@/utils/btnHelpers";
import {getButtonStyles} from "@/utils/btnStyles";

export default function ButtonGroup({group, onCopy}) {
  const sanitizedGroupName = group.name.toLowerCase().replace(/\s+/g, "");

  return (
    <div className={styles.group}>
      <h3 className={styles.groupTitle}>{group.name}</h3>
      <div className={styles.buttons}>
        {group.variants.map((variant) => {
          const buttonClassName = `${styles.button} ${styles[sanitizedGroupName]} ${styles[variant.name]}`;
          const rgbColor = hexToRgb(variant.color);
          return (
            <button
              key={variant.name}
              className={buttonClassName}
              onClick={() => onCopy(getButtonStyles(group.name, variant))}
              aria-label={`Copy ${variant.name} ${group.name} button style`}
              style={{
                "--color": variant.color,
                "--color-rgb": `${rgbColor}`,
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
