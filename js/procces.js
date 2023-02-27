let obj = {
    "огоньгорыкофеспатьсорвать":"4",
    "огоньгорыкофеспатьоставить":"7",
    "огоньгорыкофепроснутьсясорвать":"6"
};

class ProccesTest {
    constructor(){
        this.test = [];
        this.value = "";
    }

    
    change(i, name){
        this.test[i] = name;
    }
    result(){
        this.value = "";
        for(let i = 0; i < 8; i++){
            if(this.test[i] === undefined || this.test[i] == "null") continue;
            this.value += this.test[i];
        }

        if(this.test[7] === "сорвать" || this.test[7] === "оставить") return obj[this.value]; 
        else return this.value
           
    }
}