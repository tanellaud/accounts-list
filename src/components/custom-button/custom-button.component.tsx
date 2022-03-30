import React, { FC } from 'react';
import './custom-button.styles.scss';

interface Props {
    buttonLabel?: string;
    variant?: string
}

const CustomButton: FC<Props> = ({ buttonLabel, variant }) => (
    <div>
        <button className={`button button-${variant}`}>
            {buttonLabel}
            
        </button>
    </div>
)

export default CustomButton;