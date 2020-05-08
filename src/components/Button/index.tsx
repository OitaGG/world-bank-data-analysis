import * as React from 'react';
import './Button.css';

export interface ButtonProps {
    children: string,
    size?: string,
    type?: string
}

export default function Button ({children, type = 'primary', size = 'large'}: ButtonProps) {
    return (
        <button 
            className={`btn btn_${type} btn_${size}`}>
                {children}
        </button>
    );
}
