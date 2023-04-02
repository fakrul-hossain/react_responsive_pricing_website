import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const Feature = ({feature}) => {
    return (
        <div 
        className="flex gap-2 items-center">
                  <CheckCircleIcon className="h-6 w-6 text-blue-500" />
            <span className="font-medium">{feature}</span>
        </div>
    );
};

export default Feature;