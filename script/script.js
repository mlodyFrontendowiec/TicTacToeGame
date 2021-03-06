class TicTacToe {
    constructor() {
        this.fields = document.querySelectorAll('div.field')
        this.fields.forEach(item => {
            item.addEventListener('click', this.handleFieldClick)

        });
        this.gamePlace = document.querySelector('section.game_place')
        this.initTicTacToe()
    }
    handleFieldClick = (event) => {
        const index = event.target.id;
        if (!this.board[index]) {
            this.setFieldValue(index, this.actual)
            this.renderBoard()
            this.changePlayer()

            if (this.checkWhoWin()) {
                alert('Winner: ' + this.winner)
                this.initTicTacToe()
            } else if (this.checkFullBoard()) {
                alert('Draw!');
                this.initTicTacToe();
            }
        } else {
            alert('This move is incorrect')
        }

    }
    checkFullBoard = () => {
        return this.board.indexOf('') === -1;
    }
    setFieldValue = (index, value) => {
        this.board[index] = value
    }
    changePlayer = () => {
        this.actual = this.actual === 'O' ? 'X' : 'O'
        console.log(this.actual)
    }
    initTicTacToe = () => {
        this.actual = this.randomPlayer()
        this.winner = null
        this.board = new Array(9).fill('')

        this.renderBoard()
    }
    randomPlayer = () => {
        return Math.floor(Math.random() * 10) % 2 ? 'X' : 'O'

    }

    renderBoard = () => {
        this.fields.forEach((field, index) =>
            field.innerText = this.board[index]
        )
    }
    checkWhoWin = () => {
        const board = this.board
        for (let i = 0; i < 3; i++) {
            if (this.checkEqualsSameChar(board[i * 3], board[i * 3 + 1], board[i * 3 + 2])) {
                this.winner = board[i * 3]
                return true
            }
        }
        for (let i = 0; i < 3; i++) {
            if (this.checkEqualsSameChar(board[i], board[i + 3], board[i + 6])) {
                this.winner = board[i]
                return true
            }
        }

        if (this.checkEqualsSameChar(board[0], board[4], board[8])) {
            this.winner = board[0]
            return true
        }
        if (this.checkEqualsSameChar(board[2], board[4], board[6])) {
            this.winner = board[0]
            return true
        }



    }
    checkEqualsSameChar = (a, b, c) => {
        return !!a && a === b && b === c && a === c;
    }
}
const game = new TicTacToe()