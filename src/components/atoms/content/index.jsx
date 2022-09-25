import './style.css';

/**
 * @param {object} param
 * @param {string} [param.text]
 * @returns {JSX.Element}
 */
const Content = (param) => {
    return <>
        <p
            className="paragraph"
        >
            {param.text}
        </p>
    </>
}

export default Content;