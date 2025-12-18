import React from 'react';
import lightOnImage from '../assets/images/lighton.png';
import lightOfImage from '../assets/images/lightoff.png';

function LightSwitch() {
    const [isLightOn, setIsLightOn] = React.useState(false);

    const handleToggle = () => {
        setIsLightOn(!isLightOn);
    };

    return (
        <div className={isLightOn ? 'light-on-container' : 'light-off-container'}>
            <h1>
                {isLightOn
                ? 'Good morning! Have a good day'
                : 'Good night! Sweet dreams'}
            </h1>

            <img
                src={isLightOn ? lightOnImage : lightOfImage}
                alt={isLightOn ? 'Light On' : 'Light Off'}
            />
            
            <button onClick={handleToggle}>
                {isLightOn ? 'Turn Off' : 'Turn On'}
            </button>
        </div>
    );
};
export default LightSwitch;
    