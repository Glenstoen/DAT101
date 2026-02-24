"use strict";
import { TPoint } from "lib2d";
import { newShapeType } from "./paint.mjs";
import { EShapeType } from "./menu.js";

// 🖼️ Access the paint canvas and drawing context, move this to your new JavaScript file.
const cvsPaint = document.getElementById("cvsPaint");
const ctxPaint = cvsPaint.getContext("2d");

let mousePos = new TPoint();
let shape = null;
let shapes = [];

class TShape{

    constructor(aX, aY){
        this.posStart = new TPoint(aX, aY);
        this.posEnd = null;
    }

    setEndPos(aX, aY){
        this.posEnd = new TPoint(aX, aY);
    }

    draw(){
    }
}


export class TLineShape extends TShape{

    constructor(aX, aY){
        super(aX, aY);
    }
    
    draw(){
        ctxPaint.beginPath();
        ctxPaint.moveTo(this.posStart.x, this.posStart.y);
            if(this.posEnd){
                ctxPaint.lineTo(this.posEnd.x, this.posEnd.y);
            }else{
                ctxPaint.lineTo(mousePos.x, mousePos.y);
            }
        ctxPaint.stroke();
    }
}

export class TCircleShape extends TShape{
    #radius;

    constructor(aX, aY){
        super(aX, aY);
        this.#radius = 0;
    }
    
    draw(){
        ctxPaint.beginPath();
        //ctxPaint.moveTo(this.posStart.x, this.posStart.y);
            if(!this.posEnd){
                this.#calcRadius();
            }

            ctxPaint.arc(this.posStart.x, this.posStart.y, this.#radius, 0, 2*Math.PI);
            ctxPaint.stroke();
    }

    #calcRadius(){
        const dx = mousePos.x - this.posStart.x;
        const dy = mousePos.y - this.posStart.y;
        let hyp = Math.pow(dx,2) + Math.pow(dy,2);
        hyp = Math.sqrt(hyp);
        this.#radius = hyp;
    }
}

export class TEllipseShape extends TShape{
    #radius1;
    #radius2;

    constructor(aX, aY){
        super(aX, aY);
        this.#radius1 = 0;
        this.#radius2 = 0;
    }
    
    draw(){
        ctxPaint.beginPath();
        //ctxPaint.moveTo(this.posStart.x, this.posStart.y);
            if(!this.posEnd){
                this.#calcRadius();
            }
            ctxPaint.ellipse(
                this.posStart.x, this.posStart.y,
                this.#radius1, this.#radius2, 0, 0, 2*Math.PI);
            ctxPaint.stroke();
    }

    #calcRadius(){
        const dx = mousePos.x - this.posStart.x;
        const dy = mousePos.y - this.posStart.y;
        //let hyp = Math.pow(dx,2) + Math.pow(dy,2);
        //hyp = Math.sqrt(hyp);
        this.#radius1 = Math.abs(dx);
        this.#radius2 = Math.abs(dy);
    }
}

export class TRectangleShape extends TShape{
    #width;
    #height;

    constructor(aX, aY){
        super(aX, aY);
        this.#width = 0;
        this.#height = 0;
        
    }

    draw(){
        ctxPaint.beginPath();
        ctxPaint.moveTo(this.posStart.x, this.posStart.y);
            if(!this.posEnd){
                this.#calcSize();
            }

            ctxPaint.rect(this.posStart.x, this.posStart.y, this.#width, this.#height);
            ctxPaint.stroke();
    }
    #calcSize(){
            this.#width = mousePos.x - this.posStart.x;
            this.#height = mousePos.y - this.posStart.y;
    }
}

export class TPenShape extends TShape{
    #points;

    constructor(aX, aY){
        super(aX, aY);
        this.#points = [];
    }
    
    addPos(aX, aY){
        const pos = new TPoint(aX, aY);
        this.#points.push(pos);
    }

    draw(){
        ctxPaint.beginPath();
        ctxPaint.moveTo(this.posStart.x, this.posStart.y);

        for(let i = 0; i < this.#points.length; i++){
            const pos = this.#points[i];
            ctxPaint.lineTo(pos.x, pos.y);
        }
            if(this.posEnd){
                ctxPaint.lineTo(this.posEnd.x, this.posEnd.y);
            }

        ctxPaint.stroke();
    }
}

function updateMousePos(aEvent){
    const rect = cvsPaint.getBoundingClientRect();
    mousePos.x = Math.round(aEvent.clientX - rect.left);
    mousePos.y = Math.round(aEvent.clientY - rect.top);
    if((shape !== null) && (shape.addPos)){
        shape.addPos(mousePos.x, mousePos.y);
    }
}

function mouseDown(aEvent){
    updateMousePos(aEvent);
    const x = mousePos.x;
    const y = mousePos.y;
    if(shape === null){
        switch(newShapeType.ShapeType){
            case EShapeType.Line:
                shape = new TLineShape(mousePos.x, mousePos.y);
                break;
            case EShapeType.Circle:
                shape = new TCircleShape(mousePos.x, mousePos.y);
                break;
            case EShapeType.Oval:
                shape = new TEllipseShape(mousePos.x, mousePos.y);
                break;
            case EShapeType.Rectangle:
                shape = new TRectangleShape(mousePos.x, mousePos.y);
                break;
            case EShapeType.Pen:
                shape = new TPenShape(mousePos.x, mousePos.y);
            break;

        }
    }
}

function mouseMove(aEvent){
    updateMousePos(aEvent);

}

function mouseUp(aEvent){
    updateMousePos(aEvent);
    if(shape){
        shape.setEndPos(mousePos.x, mousePos.y);
        shapes.push(shape);
        shape = null;

    }
    
}

function drawCanvas(){
    ctxPaint.clearRect(0, 0, cvsPaint.clientWidth, cvsPaint.height);
    if(shape){
        shape.draw();
    }
    for(let i = 0; i < shapes.length; i++){
        shapes[i].draw();
    }
    /*shapes.forEach(element => {
        element.draw();
    });*/
    requestAnimationFrame(drawCanvas);
}

cvsPaint.addEventListener("mousedown", mouseDown);
cvsPaint.addEventListener("mouseup", mouseUp);
cvsPaint.addEventListener("mousemove", mouseMove);
drawCanvas();