const aleatBtn = () =>{
    alert("Hi Bro ki obsotha");
}

const confirmBtn = () =>{
    const result = confirm("Are you confirm");
    console.log(result);
    if(result === true){
        alert("thanks bondhu");
    }else{
        alert("dhur beta dili nah");
    }
}

const getInfo = () =>{
    const name = prompt('tel me your name')
    console.log(name);
    if(name === null){
        console.log('name na dile hobe nah');
    }else{
        console.log('name dicos taile tui');
    }
}