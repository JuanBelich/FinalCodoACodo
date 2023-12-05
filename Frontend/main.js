/*
estructura del json a usar de la api




id
title
price
description
category
image
rating{
    rate
    count
}

tipos de categorias
electronics=electronica
jewelery=joyeria
men's clothing=ropa de hombre
women's clothing=ropa de mujer
*/
const imgElect=document.getElementById("elect-img-id");
const imgMen=document.getElementById("men-img-id");
const imgWomen=document.getElementById("women-img-id");
const imgJewelery=document.getElementById("jew-img-id");

const listaJoyas=document.getElementById("lista-joyas");

const listaRopaH=document.getElementById("lista-ropaH");
const listaRopaM=document.getElementById("lista-ropaM");



let joyas=[];
let electronica=[];
let ropaH=[];
let ropaM=[];
fetch("https://fakestoreapi.com/products/category/jewelery")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        joyas=data;
        imgJewelery.src=joyas[0].image;
        console.log(joyas);
    });
fetch("https://fakestoreapi.com/products/category/electronics")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        electronica=data;
        imgElect.src=electronica[0].image;
        console.log(electronica);
    })
fetch("https://fakestoreapi.com/products/category/men's clothing")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        ropaH=data;
        imgMen.src=ropaH[1].image;
        console.log(ropaH);
    })
fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        ropaM=data;
        imgWomen.src=ropaM[0].image;
        console.log(ropaM);
    })













