
type ButtonTypeProps={
    nickName:string
    callback:()=>void
}

export const Button =(props:ButtonTypeProps)=>{
    const onClickHandler=()=>{
        props.callback()
    }
    return(
        <button onClick={onClickHandler}>{props.nickName}</button>
    )
}
