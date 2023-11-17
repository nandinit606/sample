import log from 'react';

const Header = () => {
    const[name,setname]=userNandu("Nandu")

    return(
        <div>
            <h1>My name is{name}</h1>
            <button onClick ={()=> setName("Nandini")}> Click here </button>
        </div>
    )
}