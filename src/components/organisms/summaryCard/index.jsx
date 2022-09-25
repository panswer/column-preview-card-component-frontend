import './styles.css';

import Card from '../../molecules/card';

/**
 * @typedef {Array<import('../../molecules/card/index').CardProps>} SummaryCardProps
 */

/**
 * @param {object} props
 * @param {SummaryCardProps} [props.cards]
 * @returns {JSX.Element}
 */
const SummaryCard = (props) => {
    return <div className='summary_card-content'>
        {
            (
                props.cards ||
                []
            ).map(
                card => <Card
                    key={card._id}
                    _id={card._id}
                    backgroundColor={card.backgroundColor}
                    content={card.content}
                    icon={card.icon}
                    iconAlt={card.iconAlt}
                    title={card.title}
                    url={card.url}
                />
            )
        }
    </div>
}

export default SummaryCard;