class Section {
    constructor (items, renderer, containerSelector){
        this._items = items;
        this._renderer = renderer;
        const container = document.querySelector(containerSelector);
    }
    renderItems(){
        this._items.forEach(
            (item) => {
                //Call renderer
            }
        );
    }
    
     addItem(){

     }
}

export default Section;