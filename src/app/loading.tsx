'use client'
import React from 'react'
import styleLoad from './loader-Style.module.css'
import { useTranslation } from "react-i18next";

export default function Loading() {
  const { t } = useTranslation();

  return (
    <section className={styleLoad.load_block}>
      <div className={styleLoad.loader}>
        <span className={styleLoad.loader_text}>{t('Loading_Text')}</span>
        <span className={styleLoad.load}></span>
      </div>
    </section>
  )
}
