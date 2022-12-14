import React from 'react';

const Class = ({menu}) => {
    const {label,NewLabel,NewLabel2} = menu;
    return (
        <div>
            <div>
            <p>{label}</p>
            <p>{NewLabel}</p>
            <p>{NewLabel2}</p>
          </div>
        ) 
      

        </div>
    );
};

export default Class;