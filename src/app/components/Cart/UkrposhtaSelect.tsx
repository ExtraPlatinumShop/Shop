'use client';

import { FC } from 'react';
import styles from './NovaPoshtaSelect.module.css';

interface UkrposhtaSelectProps {
  city: string;
  onSelect: (address: string) => void;
  value: string;
}

const UkrposhtaSelect: FC<UkrposhtaSelectProps> = ({ onSelect, value }) => {
  return (
    <div className={styles.warehouseSelect}>
      <input
        type="text"
        placeholder="Введіть адресу відділення"
        value={value}
        onChange={e => onSelect(e.target.value)}
        className={styles.input}
        autoComplete="off"
      />
    </div>
  );
};

export default UkrposhtaSelect; 