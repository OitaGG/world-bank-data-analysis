import * as React from 'react'
import './Input.less';

interface Props {
    placeholder?: string,
    type?: string,
    size?: string,
    icon?: string,
    onChange?: any
}

const Input = ({placeholder, type = "withIcon", size = "small", icon = '', onChange}: Props) => {
    return (
        <div className="input_block">
            {icon && <img src="#" alt="input icon"/>}
            <input 
                className={`input input_${size}`}
                placeholder={placeholder} 
                type={type}
                onChange={onChange}/>
        </div>
    )
}

export default Input;
