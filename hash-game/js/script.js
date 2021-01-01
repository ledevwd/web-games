window.onload = () => {
    let btnStartGame = document.querySelector("#btn-start-game");
    let btnHome = document.querySelector("#btn-home");
    let btnNewGame = document.querySelector("#btn-new-game");
    let btnHistoric = document.querySelector("#btn-historic");
    let btnBack = document.querySelectorAll(".btn-back");

    let home = document.querySelector("#home");
    let historic = document.querySelector("#historic");
    let list = document.querySelector("#list");
    let game = document.querySelector("#game");
    let endGame = document.querySelector("#end-game");

    let boxBackground = document.querySelectorAll(".box-background");
    let currentPlayer = Math.floor(Math.random() * 2);
    let playersList = ["X", "O"];
    let str = document.querySelector("#str");
    let xl;

    btnStartGame.onclick = () => {
        home.style.display = "none";
        game.style.display = "block";
    };

    btnHome.onclick = () => {
        game.style.display = "none";
        endGame.style.display = "none";
        home.style.display = "block";
    };

    btnNewGame.onclick = () => {
        endGame.style.display = "none";
        game.style.display = "block";
    };

    btnHistoric.onclick = () => {
        home.style.display = "none";
        historic.style.display = "block";
    };

    btnBack[0].onclick = () => {
        historic.style.display = "none";
        home.style.display = "block";
    }

    if (playersList[currentPlayer] == "X") {
        str.textContent = "X";
    }

    else {
        str.textContent = "O";
    }

    for (let i = 0; i < boxBackground.length; i ++) {
        boxBackground[i].onclick = () => {
            if (boxBackground[i].childElementCount == 0) {
                let xo = document.createElement("div");
                
                if (str.textContent == "X") {
                    str.textContent = "O";
                    
                    xo.classList.add("x");

                    xo.textContent = "X";

                    xl = ".x";
                }

                else {
                    str.textContent = "X";

                    xo.classList.add("o");

                    xo.textContent = "O";

                    xl = ".o";
                }

                boxBackground[i].appendChild(xo);
   
                if (
                    boxBackground[0].querySelector(xl) && boxBackground[1].querySelector(xl) && boxBackground[2].querySelector(xl)
                    ||
                    boxBackground[3].querySelector(xl) && boxBackground[4].querySelector(xl) && boxBackground[5].querySelector(xl)
                    ||
                    boxBackground[6].querySelector(xl) && boxBackground[7].querySelector(xl) && boxBackground[8].querySelector(xl)
                    ||
                    boxBackground[0].querySelector(xl) && boxBackground[3].querySelector(xl) && boxBackground[6].querySelector(xl)
                    ||
                    boxBackground[1].querySelector(xl) && boxBackground[4].querySelector(xl) && boxBackground[7].querySelector(xl)
                    ||
                    boxBackground[2].querySelector(xl) && boxBackground[5].querySelector(xl) && boxBackground[8].querySelector(xl)
                    ||
                    boxBackground[0].querySelector(xl) && boxBackground[4].querySelector(xl) && boxBackground[8].querySelector(xl)
                    ||
                    boxBackground[2].querySelector(xl) && boxBackground[4].querySelector(xl) && boxBackground[6].querySelector(xl)
                    ) {
                        setTimeout(function() {
                            if (str.textContent == "X") {
                                finish("O");
                            }
            
                            else {
                                finish("X");
                            }
                        }, 500);
                }
            }
        };
    }

    function finish(winner) {
        let whoWon = document.querySelector("#who-won");
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        for (let i = 0; i < boxBackground.length; i ++) {
            boxBackground[i].textContent = "";
        }

        game.style.display = "none";
        endGame.style.display = "block";
        whoWon.textContent = winner;

        createHistory();

        function createHistory() {
            let item = document.createElement("div");
            let confrontations = document.createElement("div");
            let dateAndTime = document.createElement("div");

            item.classList.add("item");
            confrontations.classList.add("confrontations");
            dateAndTime.classList.add("date-and-time");

            if (whoWon.textContent == "X") {
                confrontations.textContent = "X vs O";
            }
    
            else {
                confrontations.textContent = "O vs X";
            }

            if (month < 10) {
                month = "0" + month;
            }

            if (day < 10) {
                day = "0" + day;
            }

            if (hours < 10) {
                hours = "0" + hours;
            }

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            dateAndTime.textContent = `${day}/${month}/${year} ${hours}:${minutes}`;

            item.appendChild(confrontations);
            item.appendChild(dateAndTime);
            list.appendChild(item);
        }
    }
};
