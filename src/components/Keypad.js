// Code Keypad Component Here

function Keypad (){

    function handlePassword(){
        console.log("Entering password...")
    }

    return (
        <div>
            <input onChange={handlePassword} type="password" />
        </div>
    )
}

export default Keypad;