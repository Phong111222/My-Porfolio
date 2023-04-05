import { FC, useState, MouseEvent, useMemo, forwardRef } from 'react';

interface Props {
  onClick: (e?: MouseEvent) => void;
  isToggle: boolean;
  closeColor?: string;
}

const lineStyle =
  'w-[20px] h-[2px] bg-black mb-[3px] last:mb-0 duration-[400ms]';

const HamburgerButton: FC<Props> = forwardRef(
  ({ onClick, closeColor, isToggle }) => {
    const handleClick = (e: MouseEvent) => {
      onClick?.(e);
    };

    const _closeColor = useMemo(() => {
      return isToggle
        ? {
            backgroundColor: closeColor ? closeColor : '#000',
          }
        : {};
    }, [isToggle]);

    return (
      <div onClick={handleClick}>
        <div
          className={`${lineStyle} ${
            isToggle && `translate-y-[5px] translate-x-0 rotate-[45deg] `
          }`}
          style={{ ..._closeColor }}
        />
        <div className={`${lineStyle} ${isToggle && `opacity-0 `}`} />
        <div
          className={`${lineStyle} ${
            isToggle && `translate-y-[-5px] translate-x-0 rotate-[-45deg] `
          }`}
          style={{ ..._closeColor }}
        />
      </div>
    );
  }
);

export default HamburgerButton;
