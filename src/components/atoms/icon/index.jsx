import './style.css';

/**
 * @param {object} param
 * @param {string} [param.ico]
 * @param {string} [param.alt]
 * @returns {JSX.Element}
 */
const Icon = (param) => {
    return <div className="icon-content">
        {
            param.ico ?
                <img className="icon" src={param.ico} alt={param.alt || ''} /> :
                null
        }
    </div>
}

export default Icon;