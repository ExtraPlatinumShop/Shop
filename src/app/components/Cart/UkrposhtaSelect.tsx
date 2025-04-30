'use client';

import { FC, useState, useEffect } from 'react';
import { ukrposhtaService } from '@/app/services/ukrposhtaService';
import styles from './NovaPoshtaSelect.module.css';

interface UkrposhtaSelectProps {
  city: string;
  onSelect: (office: string) => void;
  value: string;
}

const UkrposhtaSelect: FC<UkrposhtaSelectProps> = ({ city, onSelect, value }) => {
  const [query, setQuery] = useState('');
  const [offices, setOffices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setQuery('');
    setOffices([]);
    onSelect('');
  }, [city]);

  useEffect(() => {
    console.log('UkrposhtaSelect useEffect', { city, query });
    if (!city /* || query.length < 2 */) {
      setOffices([]);
      return;
    }
    setIsLoading(true);
    const fetchOffices = async () => {
      const results = await ukrposhtaService.getOffices(city, query);
      setOffices(results);
      setIsLoading(false);
    };
    const timeoutId = setTimeout(fetchOffices, 400);
    return () => clearTimeout(timeoutId);
  }, [city, query]);

  const handleSelect = (office: any) => {
    setQuery(office.address);
    onSelect(office.address);
    setShowDropdown(false);
  };

  console.log('UkrposhtaSelect рендериться, city:', city, 'query:', query);

  return (
    <div className={styles.warehouseSelect}>
      <input
        type="text"
        placeholder="Введіть адресу або номер відділення"
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setShowDropdown(true);
          onSelect('');
        }}
        className={styles.input}
        autoComplete="off"
        onFocus={() => setShowDropdown(true)}
      />
      {showDropdown && query.length > 1 && offices.length > 0 && (
        <div className={styles.dropdown}>
          {offices.map((office) => (
            <div
              key={office.postalCode + office.address}
              className={styles.dropdownItem}
              onClick={() => handleSelect(office)}
            >
              {office.postalCode}, {office.address}
            </div>
          ))}
        </div>
      )}
      {isLoading && <div className={styles.loading}>Завантаження...</div>}
    </div>
  );
};

export default UkrposhtaSelect; 