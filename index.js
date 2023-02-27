


document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM Loaded')
    const txt = document.getElementById('text')
    txt.textContent = ('This is really cool!')
})

    console.log(
        "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
      );


