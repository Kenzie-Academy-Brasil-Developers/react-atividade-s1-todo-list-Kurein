function TodoList({list, buttonCallBack}){
    return (
        <ul>
            {list.map((element)=>{
                if(element !== ""){
                    return(
                        <li key={list.indexOf(element)}>
                            <h3>{element}</h3>
                            <button onClick={()=>{
                                buttonCallBack(element)
                            }}>
                                Tarefa Finalizada
                            </button>
                        </li>
                    )
                }
            })}
        </ul>
    )
}

export default TodoList