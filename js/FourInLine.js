document.addEventListener("DOMContentLoaded", function(event) {

    let canvas = document.querySelector('#board');
    let startGame = document.querySelector('#start-game');
    let winnerInfo = document.querySelector('#winner-info');
    let drawInfo = document.querySelector('#draw-info');
    let game = new Game(canvas);

    const playGame = ()  => {
        game = new Game(canvas);
        game.prepareGame();
        winnerInfo.classList.add('hide');
        drawInfo.classList.add('hide');
    }

    //verifica si se hizo click en una ficha
    const onMouseDown = e => {
        let x = e.layerX - e.currentTarget.offsetLeft;
        let y = e.layerY - e.currentTarget.offsetTop;            
        game.isClickedToken(x, y);
    }

    //mueve el punto en el canvas o la figura
    const onMouseMove = e => {
        let x = e.layerX - e.currentTarget.offsetLeft;
        let y = e.layerY - e.currentTarget.offsetTop;   
        if (game.haveClickedToken())
            game.moveToken(x, y);
    }

    //devuelve la posición del click
    const onMouseUp = e => {
        let x = e.layerX - e.currentTarget.offsetLeft;
        let y = e.layerY - e.currentTarget.offsetTop;
        if (game.haveClickedToken()){
            game.insertToken(x,y);    
        }
    }
    
    startGame.addEventListener('click', playGame, false);
    canvas.addEventListener('mousedown', onMouseDown, false);
    canvas.addEventListener('mousemove', onMouseMove, false);
    canvas.addEventListener('mouseup', onMouseUp, false);

});

