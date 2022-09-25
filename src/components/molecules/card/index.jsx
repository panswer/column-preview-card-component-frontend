import './style.css';

import Icon from '../../atoms/icon';
import Title from '../../atoms/title';
import Content from '../../atoms/content';

import ButtonLink from '../../atoms/button-link';

/**
 * @typedef {object} CardProps
 * @property {string} [_id]
 * @property {string} [icon]
 * @property {string} [iconAlt]
 * @property {string} [title]
 * @property {string} [content]
 * @property {string} [url]
 * @property {string} [backgroundColor]
 */

/**
 * @param {CardProps} param 
 * @returns {JSX.Element}
 */
const Card = (param) => {
    return <div
        className='card-container'
        style={{
            backgroundColor: param.backgroundColor
        }}
    >
        <Icon ico={param.icon} alt={param.iconAlt} />
        <Title text={param.title} />
        <Content text={param.content} />
        <ButtonLink
            text='learn more'
            url={param.url}
            style={{
                color: param.backgroundColor
            }}
        />
    </div>
}

export default Card;