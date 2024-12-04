'use client';
import styles from './ButtonGrid.module.css';
import ButtonGroup from './ButtonGroup';
import {buttonGroups} from '@/utils/buttonTypes';

export default function ButtonGrid() {
  const copyButtonCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={styles.grid}>
      {buttonGroups.map((group, index) => (
        <ButtonGroup key={index} group={group} onCopy={copyButtonCode} />
      ))}
    </div>
  );
}
