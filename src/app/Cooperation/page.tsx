import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Співпраця | Extra-Platinum',
  description: 'Пропозиції співпраці з Extra-Platinum. Станьте нашим партнером у сфері побутової хімії.',
  openGraph: {
    title: 'Співпраця з Extra-Platinum',
    description: 'Партнерство у сфері побутової хімії',
  }
};

"use client";
import CoopForm from "@/components/CoopForm/CoopForm";
import CoopInfo from "@/components/CoopInfo/CoopInfo";
import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import style from "./style.module.scss";

export default function Cooparation() {
  const [files, setFiles] = useState<File[]>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);


  return (
    <div className={style.cooperation}>
      <CoopForm />
      <CoopInfo />
    </div>
  );
}
