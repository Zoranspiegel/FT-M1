"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor(data) {
    //Root = 20
    this.value = data;
    this.left = null;
    this.right = null;
  }
  size() {
    if (!this.left && !this.right) return 1;
    if (this.left && !this.right) return this.left.size() + 1;
    if (!this.left && this.right) return this.right.size() + 1;
    if (this.left && this.right)
      return this.left.size() + this.right.size() + 1;
  }
  insert(data) {
    if (data < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(data);
      } else {
        this.left.insert(data);
      }
    }
    if (data > this.value) {
      if (!this.right) {
        this.right = new BinarySearchTree(data);
      } else {
        this.right.insert(data);
      }
    }
  }
  contains(data) {
    if (this.value === data) return true;
    if (data < this.value) {
      if (!this.left) return false;
      else return this.left.contains(data);
    }
    if (data > this.value) {
      if (!this.right) return false;
      else return this.right.contains(data);
    }
  }
  depthFirstForEach(f, order) {
    if (order === "pre-order") {
      //[20,15,5,0,1,14,13,12,11,17,25,21,28,50,45,30,35,33,31,34]
      f(this.value);
      if (this.left) this.left.depthFirstForEach(f, order);
      if (this.right) this.right.depthFirstForEach(f, order);
    } else if (order === "post-order") {
      //[1,0,11,12,13,14,5,17,15,21,31,34,33,35,30,45,50,28,25,20]
      if (this.left) this.left.depthFirstForEach(f, order);
      if (this.right) this.right.depthFirstForEach(f, order);
      f(this.value);
    }
    //[0,1,5,11,12,13,14,15,17,20,21,25,28,30,31,33,34,35,45,50]
    else {
      if (this.left) this.left.depthFirstForEach(f, order);
      f(this.value);
      if (this.right) this.right.depthFirstForEach(f, order);
    }
  }
  breadthFirstForEach(f, arrF = []) {
    if (this.left) {
      arrF.push(this.left);
    }
    if (this.right) {
      arrF.push(this.right);
    }
    f(this.value);
    if (arrF.length > 0) arrF.shift().breadthFirstForEach(f, arrF);
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
