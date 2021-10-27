

function TextBox(props) {
    return (
        <div>
            <label htmlFor="myInput">{props.label}</label>
            <input id="myInput" type="text" onChange={ (event) => {
                    props.change(event.target.value)
                    //props.change(document.getElementById("myInput").innerText)
                }
            }/>
        </div>
    );
}

export default TextBox;