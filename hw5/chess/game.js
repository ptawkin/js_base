"use strict";

//начало игры
//таблица 10х10 (8х8 поле)
//отрисовка поля с фигурами

//выбор фигуры
//ход
//переход хода

//окончание игры
//закончить или начать заново
let h = document.createElement('h1');
h.innerHTML = "Давай сыграем в шахматы!";
document.body.appendChild(h);


const game = {
	rows: 10, // 1 и 10 не учавствуют в игре
	cols: 10, // 1 и 10 не учавствуют в игре
	isRunning: false,
	renderMap: function () {
        let rowString = '';

		// создаем поле
		let table = document.createElement('table');

		//здесь был for
		let row = 0;
		do {
			let tr = document.createElement('tr');

			if (row === 0) {
				tr.classList.add('abc');
			} else if (row === 9) {
				tr.classList.add('abc');
			}

			row++;

			let col = 0;
			do {
				let td = document.createElement('td');
				//создаем черные и белые клетки
				if (row % 2 === 0) {
					if (col % 2 === 0) {
						td.classList.add('black');
					} else {
						td.classList.add('white');
					}
				} else {
					
					if (col % 2 === 0) {
						td.classList.add('white');
					} else {
						td.classList.add('black');
					}
				}

				//класс для стобцов с цифрами
				switch (col) {
					case 0: td.classList.add('numbers');
					case 9: td.classList.add('numbers');
				}

				// добавляем цифры
				if (col === 0) {
					if (row ===2) {
						td.innerHTML = '8';
					} else if (row === 3) {
						td.innerHTML = '7';
					} else if (row === 4) {
						td.innerHTML = '6';
					} else if (row === 5) {
						td.innerHTML = '5';
					} else if (row === 6) {
						td.innerHTML = '4';
					} else if (row === 7) {
						td.innerHTML = '3';
					} else if (row === 8) {
						td.innerHTML = '2';
					} else if (row === 9) {
						td.innerHTML = '1';
					}

				} else if (col === 9) {
					if (row ===2) {
						td.innerHTML = '8';
					} else if (row === 3) {
						td.innerHTML = '7';
					} else if (row === 4) {
						td.innerHTML = '6';
					} else if (row === 5) {
						td.innerHTML = '5';
					} else if (row === 6) {
						td.innerHTML = '4';
					} else if (row === 7) {
						td.innerHTML = '3';
					} else if (row === 8) {
						td.innerHTML = '2';
					} else if (row === 9) {
						td.innerHTML = '1';
					}
				} 


				//добавляем буквы
				if (row === 1) {
					if (col === 1) {
						td.innerHTML = 'A';
					} else if (col === 2) {
						td.innerHTML = 'D';
					} else if (col === 3) {
						td.innerHTML = 'C';
					} else if (col === 4) {
						td.innerHTML = 'D';
					} else if (col === 5) {
						td.innerHTML = 'E';
					} else if (col === 6) {
						td.innerHTML = 'F';
					} else if (col === 7) {
						td.innerHTML = 'G';
					} else if (col === 8) {
						td.innerHTML = 'H';
					}
					
				} else if (row === 10) {
					if (col === 1) {
						td.innerHTML = 'A';
					} else if (col === 2) {
						td.innerHTML = 'D';
					} else if (col === 3) {
						td.innerHTML = 'C';
					} else if (col === 4) {
						td.innerHTML = 'D';
					} else if (col === 5) {
						td.innerHTML = 'E';
					} else if (col === 6) {
						td.innerHTML = 'F';
					} else if (col === 7) {
						td.innerHTML = 'G';
					} else if (col === 8) {
						td.innerHTML = 'H';
					}
				} 

				//расставляем фигуры
				if (row === 2) {
					if (col === 1 || col === 8) {
						td.innerHTML = '<img src="images/rook-black.png">';
					} else if (col === 2 || col === 7) {
						td.innerHTML = '<img src="images/knight-black.png">';
					} else if (col === 3 || col === 6) {
						td.innerHTML = '<img src="images/bishop-black.png">';
					} else if (col === 4) {
						td.innerHTML = '<img src="images/king-black.png">';
					} else if (col === 5) {
						td.innerHTML = '<img src="images/queen-black.png">';
					}
				} else if (row === 3) {
					if (col >= 1 && col <=8) {
						td.innerHTML = '<img src="images/pawn-black.png">';
					} 
				} else if (row === 8) {
					if (col >= 1 && col <=8) {
						td.innerHTML = '<img src="images/pawn-white.png">';
					} 
				} else if (row === 9) {
					if (col === 1 || col === 8) {
						td.innerHTML = '<img src="images/rook-white.png">';
					} else if (col === 2 || col === 7) {
						td.innerHTML = '<img src="images/knight-white.png">';
					} else if (col === 3 || col === 6) {
						td.innerHTML = '<img src="images/bishop-white.png">';
					} else if (col === 4) {
						td.innerHTML = '<img src="images/king-white.png">';
					} else if (col === 5) {
						td.innerHTML = '<img src="images/queen-white.png">';
					}
				}
				


				col++;
				tr.appendChild(td);
			} while (col < this.cols)

			table.appendChild(tr);
		} while (row < this.rows)

		return table;
	},

	// выбор фигуры 
	choose: function () {
		
	},

	// сделать ход
	move: function () {
		
	},

	// смена пользователя
	player: function () {
		
	},

	// запускаем игру
	run: function () {
		

		this.isRunning = true;

		// генерируем карту
		let table = this.renderMap();
		let previousTable = table;

		// вставляем в документ
		document.body.appendChild(table);

		// игровой цикл
		setInterval(function() {
			table = game.renderMap();

			// вывод карты
			document.body.replaceChild(table, previousTable);
			// сохраняем предыдущий элемент карты
			previousTable = table;
		}, 500);
	}
};

game.run();