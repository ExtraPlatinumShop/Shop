'use client';
import React from 'react'
import { useTranslation } from 'react-i18next'
import '@/lang/i18n'

export default function NotFound() {
  const { t } = useTranslation()
  
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">{t('Page_not_found')}</p>
      <a href="/" className="not-found-link">{t('Return_to_home')}</a>
    </div>
  );
}
