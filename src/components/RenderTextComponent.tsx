import React from 'react';

interface RenderTextComponentProps {
    text: string,
}

function RenderTextComponent({ text }: RenderTextComponentProps) {
    return (
        <h1 className={text.trim() ? 'animation__text' : ''}>
          <span>{text}</span>
        </h1>
    )
}

export default RenderTextComponent;
