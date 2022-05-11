import {List, Item} from 'linked-list'

const list = [];

const addItem = (list, newItem) => {
    if(list.length() === 0) return list.push(newItem);
    return list.push([...list, newItem]);
}

const addEdge = (v, w) => {
    addItem(list[v], w);
    addItem(list[w], v);
}

addEdge(1, 0);
addEdge(0, 2);
addEdge(2, 1);
addEdge(0, 3);