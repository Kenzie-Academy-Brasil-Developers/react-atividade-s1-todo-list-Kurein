import {useState} from "react"

function Form({submitCallBack}){
    const [text, setText] = useState("")

    return (
        <form>
            <input type="text"
                   value={text}
                   onChange={(event)=> setText(event.target.value)}
                   placeholder="Insira sua tarefa aqui"
                   />
            <button type="submit"
                    onClick={(e)=>{
                            e.preventDefault()
                            submitCallBack(text)
                        }}>
                    Adicionar Tarefa
            </button>
        </form>
    )
}

export default Form