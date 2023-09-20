'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      type={btnType || 'button'}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;
