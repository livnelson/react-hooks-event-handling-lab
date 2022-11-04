// Code EyesOnMe Component Here

function EyesOnMe() {

    function handleFocus(){
        console.log("Good")
    }

    function handleBlur(){
        console.log("Hey! Eyeson me!")
    }

    return (
        <button onFocus={handleFocus} onLBur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe