import * as React from 'react';
import './Button.less';

export interface ButtonProps {
    children: string,
    size?: string,
    type?: string,
    onClick: any
}

export default function Button ({children, type = 'primary', size = 'large', onClick}: ButtonProps) {
    return (
        <button 
            className={`btn btn_${type} btn_${size}`}
            onClick={onClick}>
                {children}
        </button>
    );
}
