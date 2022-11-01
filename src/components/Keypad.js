// Code Keypad Component Here
function Keypad (){
    function handleKeypadClick(e){
        console.log('Entering password...')
    }

    return (
        <div>
            <input type="password" onChange={handleKeypadClick}/>
        </div>
    )
}

export default Keypad;