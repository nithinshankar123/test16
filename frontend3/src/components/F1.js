import "./style.css";
function F1(){
    const myStyle={
        color:"blue",
        backgroundColor:"orange"

    }
    return(
        <div>
            <h1 style={{color:"red"}}>Inline style</h1>
            <h1 style={myStyle}>Internal Style</h1>
            <h1 className="c1" class="c1">External</h1>
            <h1 className="tect-center text-danger">Bootstrap</h1>
        </div>
    )
}
export default F1;