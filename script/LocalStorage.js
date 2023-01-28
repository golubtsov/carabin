function create_local(){
    if(localStorage.length == 0){
        localStorage.setItem('basket', JSON.stringify({}));
    }
}

create_local();