function create_local(){
    console.log(localStorage.length);
    if(localStorage.length == 0){
        localStorage.setItem('basket', JSON.stringify({}));
    }
    console.log('work');
}

create_local();