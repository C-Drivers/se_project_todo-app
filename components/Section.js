class Section {
    constructor (items, renderer, containerSelector){
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    renderItems(){
        this._items.forEach(
            (item) => {
                renderer(item);
            }
        );
    }
    
     addItem(element){
        element.append(this._container);
     }
}

export default Section;