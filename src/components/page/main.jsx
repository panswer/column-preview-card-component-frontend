import { useState } from 'react';

import './style.css';

import SummaryCard from '../organisms/summaryCard';

import iconSedan from '../../assets/imgs/icon-sedans.svg';
import iconSuvs from '../../assets/imgs/icon-suvs.svg';
import iconLuxury from '../../assets/imgs/icon-luxury.svg';

/**
 * @returns {JSX.Element}
 */
const Main = () => {
    const [cards] = useState([{
        _id: '1',
        icon: iconSedan,
        iconAlt: "sedans' icon",
        title: 'sedans',
        content: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
        url: '#',
        backgroundColor: 'var(--primary-color-bright-orange)'
    }, {
        _id: '2',
        icon: iconSuvs,
        iconAlt: "suvs' icon",
        title: 'suvs',
        content: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next familify vacation and off-road adventures.',
        backgroundColor: 'var(--primary-color-dark-cyan)',
        url: '#'
    }, {
        _id: '3',
        icon: iconLuxury,
        backgroundColor: 'var(--primary-color-very-dark-cyan)',
        content: 'Cruise in the best car brands without the bloadted prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
        iconAlt: "luxurys' icon",
        title: 'luxury',
        url: '#'
    }]);

    return <div className='content'>
        <SummaryCard cards={cards} />
    </div>
}

export default Main;