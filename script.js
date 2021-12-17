function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todo-input");
    db.collection("todo-items").add({
        text: text.value, 
        status: "active",
    })
    text.value = "";
}

function getItems(){
    db.collection("todo-items").onSnapshot((snapshot) => {
        console.log(snapshot);
        let items = [];
        snapshot.docs.foreach((dic) => {
            items.push(doc.data())
        })
    })
}

getItems();