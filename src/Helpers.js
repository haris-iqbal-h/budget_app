//local storage
export function fetchData(key) {
    //for get data              
                    // JSON.parse(localStorage.getItem(key))
    //for saving data           
                    // localStorage.setItem(Json.stringify("key",data))

    return JSON.parse(localStorage.getItem(key))
}