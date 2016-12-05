function Field (){
    this.width = 20;
    this.height = 20;
    this.cells = [];
    this.snake = new Snake();
}

Field.prototype.initialize = function(){
    for(var i=0; i<this.width; i++){
        for(var j=0; j<this.height; j++){
            var cell = new Cell(i,j);
            this.snake.body.forEach(function (elem) {
                if(elem.x === i && elem.y === j){
                    cell.hasPartSnake = true;
                }
            });
            this.cells.push(cell);
        }
    }
    console.log(this);

};

function Cell (x,y){
    this.x = x;
    this.y = y;
    this.hasApple = false;
    this.hasPartSnake = false;
}

function Snake (){
    this.length = 3;
    this.body = [{x:5, y:5}, {x:5, y:6}, {x:5, y:7}];
}
for (var i = 0; i < array.length; i++) {
    var obj = array[i];
    
}