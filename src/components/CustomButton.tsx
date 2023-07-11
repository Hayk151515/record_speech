import React, { MouseEventHandler } from 'react';

interface CustomButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    btnText: string;
}

function CustomButton({ btnText, onClick }: CustomButtonProps) {
    return (
        <div className="wrap">
          <button onClick={onClick} className="button">{btnText}</button>
        </div>
    )
}

export default CustomButton;
