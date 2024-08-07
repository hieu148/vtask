import './style.css'

function TextInput(props) {
    return(
        <div className="text-input">
            <input
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                name={props.name}
                type={props.type}
            />
            {
                props.error && (
                    <p className={"error-text"}>
                        {props.error}
                    </p>
                )
            }
        </div>
    )
}

export default TextInput