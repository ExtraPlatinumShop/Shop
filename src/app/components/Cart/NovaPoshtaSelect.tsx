'use client';

import { FC, useState, useEffect } from 'react';
import { novaPoshtaService } from '@/app/services/novaPoshtaService';
import styles from './NovaPoshtaSelect.module.css';

interface NovaPoshtaSelectProps {
  onSelect: (city: string, warehouse: string) => void;
  value: {
    city: string;
    warehouse: string;
  };
}

const NovaPoshtaSelect: FC<NovaPoshtaSelectProps> = ({ onSelect, value }) => {
  const [cities, setCities] = useState<any[]>([]);
  const [warehouses, setWarehouses] = useState<any[]>([]);
  const [cityQuery, setCityQuery] = useState('');
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [isLoadingWarehouses, setIsLoadingWarehouses] = useState(false);
  const [selectedCityRef, setSelectedCityRef] = useState('');
  const [isCitySelected, setIsCitySelected] = useState(false);
  const [warehouseQuery, setWarehouseQuery] = useState('');
  const [showWarehouseDropdown, setShowWarehouseDropdown] = useState(false);

  useEffect(() => {
    const searchCities = async () => {
      if (cityQuery.length < 2) return;
      setIsLoadingCities(true);
      const results = await novaPoshtaService.getCities(cityQuery);
      setCities(results);
      setIsLoadingCities(false);
    };
    if (!isCitySelected) {
      const timeoutId = setTimeout(searchCities, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [cityQuery, isCitySelected]);

  useEffect(() => {
    const loadWarehouses = async () => {
      if (!selectedCityRef) return;
      setIsLoadingWarehouses(true);
      const results = await novaPoshtaService.getWarehouses(selectedCityRef, warehouseQuery);
      setWarehouses(results);
      setIsLoadingWarehouses(false);
    };
    if (selectedCityRef && warehouseQuery.length > 0) {
      const timeoutId = setTimeout(loadWarehouses, 400);
      return () => clearTimeout(timeoutId);
    } else {
      setWarehouses([]);
    }
  }, [selectedCityRef, warehouseQuery]);

  const handleCitySelect = (city: any) => {
    setCityQuery(city.Present);
    const cityRef = city.DeliveryCity;
    if (!cityRef) {
      alert('Не вдалося знайти відділення для цього міста');
      return;
    }
    setSelectedCityRef(cityRef);
    setCities([]);
    setIsCitySelected(true);
    setWarehouseQuery('');
    setWarehouses([]);
    setShowWarehouseDropdown(false);
    onSelect(city.Present, '');
  };

  const handleWarehouseSelect = (warehouse: any) => {
    setWarehouseQuery(warehouse.Description);
    setShowWarehouseDropdown(false);
    onSelect(cityQuery, warehouse.Description);
  };

  return (
    <div className={styles.container}>
      <div className={styles.citySelect}>
        <input
          type="text"
          placeholder="Введіть місто"
          value={cityQuery}
          onChange={(e) => {
            setCityQuery(e.target.value);
            setIsCitySelected(false);
            setSelectedCityRef('');
            setWarehouseQuery('');
            setWarehouses([]);
          }}
          className={styles.input}
        />
        {isLoadingCities && <div className={styles.loading}>Завантаження...</div>}
        {cities.length > 0 && !isCitySelected && (
          <div className={styles.dropdown}>
            {cities.map((city) => (
              <div
                key={city.DeliveryCity || city.Present}
                className={styles.dropdownItem}
                onClick={() => handleCitySelect(city)}
              >
                {city.Present}
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedCityRef && (
        <div className={styles.warehouseSelect}>
          <input
            type="text"
            placeholder="Введіть вулицю, номер або назву відділення"
            value={warehouseQuery}
            onChange={e => {
              setWarehouseQuery(e.target.value);
              setShowWarehouseDropdown(true);
              onSelect(cityQuery, '');
            }}
            className={styles.input}
            autoComplete="off"
            onFocus={() => setShowWarehouseDropdown(true)}
          />
          {showWarehouseDropdown && warehouseQuery.length > 0 && warehouses.length > 0 && (
            <div className={styles.dropdown}>
              {warehouses.map((warehouse) => (
                <div
                  key={warehouse.Ref}
                  className={styles.dropdownItem}
                  onClick={() => handleWarehouseSelect(warehouse)}
                >
                  {warehouse.Description}
                </div>
              ))}
            </div>
          )}
          {isLoadingWarehouses && <div className={styles.loading}>Завантаження...</div>}
        </div>
      )}
    </div>
  );
};

export default NovaPoshtaSelect; 