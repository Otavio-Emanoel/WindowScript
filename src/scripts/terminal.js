const close_terminal = document.querySelector("#terminal-close")
const abrir_terminal = document.querySelector("#terminal-open")
const terminal_window = document.querySelector('terminal')

abrir_terminal.addEventListener('click', () => {
    terminal_window.style.display = "block"
})

close_terminal.addEventListener('click', ()=> {
    terminal_window.style.display = "none"
})