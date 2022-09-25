import './style.css';

/**
 * @param {object} param 
 * @param {string} [param.text]
 * @returns {JSX.Element}
 */
const Title = (param) => {
    return <>
        <h1 className="title">
            {param.text}
        </h1>
    </>
}

export default Title;