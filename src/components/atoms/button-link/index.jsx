import './style.css';

/**
 * @param {object} param 
 * @param {string} [param.text]
 * @param {string} [param.url]
 * @param {import('react').CSSProperties} [param.style]
 */
const ButtonLink = (param) => {
    return <>
        <a
            style={param.style}
            className='btn-link'
            href={param.url || '#'}
        >
            {param.text}
        </a>
    </>
}

export default ButtonLink;