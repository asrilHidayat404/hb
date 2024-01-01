const door = document.querySelector(".door")
const container = document.querySelector(".container")
const guest = document.querySelector(".guest")
const kodeUndangan = "20040101-20050712"

door.addEventListener("click", () => {
	handleGuest()
	handleInvitationCode()
	invCodeExec()
})

function handleGuest () {
	return guest.style.right = "-120%"
}

function handleInvitationCode () {
	// `		<form action="">
	// 		<input type="text" class="inputCode">
	// 		<button>Submit</button>
	// 	</form>`
	const form = document.createElement("form")
	const input = document.createElement("input")
	const button = document.createElement("button")
	const info = document.createElement("p")
	input.setAttribute("type", "text")
	input.classList.add("inputCode")
	button.classList.add("submit")
	button.textContent = "Submit"
	info.textContent = "Sudah dapat kode undangannya ya kan?"
	info.classList.add("info")

	form.appendChild(input)
	form.appendChild(button)
	form.appendChild(info)

	return container.appendChild(form)
}

function invCodeExec () {
	const submit = document.querySelector(".submit")
	const code = document.querySelector(".inputCode")
	const info = document.querySelector(".info")
	code.addEventListener("input", () => {
		if ( code.value.length >= 5) {
			info.textContent = "hampir benar....."
		} 
		if ( code.value == kodeUndangan ) {
			info.textContent = "Selamat.... kamu benar, Silahkan masuk"
		}
	})
	submit.addEventListener("click", (e) => {
		if ( code.value.length == kodeUndangan.length && 
			 code.value !== kodeUndangan ||
			 code.value !== kodeUndangan ) {
			info.textContent = "Oops... kodenya salah"
		}
		if ( code.value == kodeUndangan ) {
			container.innerHTML = `
				<div style="position:absolute; bottom: 5%; right: 5%; display: flex; width: 200px; justify-content: space-evenly;" >
						<span style="width: 20px; height : 20px; border-radius: 50%;background-color: blue; "></span><span style="width: 20px; height : 20px; border-radius: 50%;background-color: blue; "></span><span style="width: 20px; height : 20px; border-radius: 50%;background-color: blue; "></span>
				</div>
				<h1 style="position: absolute;
									bottom: 10%;
									left: 50%;
									transform: translate(-50%, -10%);">Hai, She, ayo masuk....</h1>
			`
			container.style.backgroundImage = "url(assets/welcome.png)"
			container.style.backgroundSize = "contain"
			container.style.backgroundRepeat = "no-repeat"
			container.style.backgroundPosition = "center"
		}

		setTimeout(()=> {
			container.innerHTML = ''
			container.style.backgroundImage = 'none'
			Main()
			
			changeBackgroundColor()
			setTimeout(()=>{
				document.body.classList.add("end")
				document.body.textContent = "Terima Kasih sudah datang :)"
			},40000)
		},5000)
	})
}

function Main () {
	const audio = document.createElement("audio")
	audio.src = "assets/lagu.mp3"
	document.body.appendChild(audio)
    audio.play()
	return container.innerHTML = `
		<div class="Main">
      <div class="text">
        <h1>Selamat Ulang Tahun, Asril</h1>
      </div>
      <div class="cake">
        <img src="assets/cake.png" alt="Kue" class="kue">
      </div>
      <div class="anim">
        <img src="assets/gif1.gif" alt="Kartun 1" class="kartun kartun1">
        <img src="assets/gif2.gif" alt="Kartun 2" class="kartun kartun2">
      </div>
    </div>
	`
}


function changeBackgroundColor() {
  const content = document.querySelector('body');
  const intervalId = setInterval(() => {
    const randomColor = getRandomColor();
    console.log(randomColor);
    content.style.background = randomColor;
  }, 500);
   setTimeout(() => {
    clearInterval(intervalId);
    content.style.background = "white"				
    content.style.backgroundImage = "url(assets/thk.png)"
	content.style.backgroundSize = "contain"
	content.style.backgroundRepeat = "no-repeat"
	content.style.backgroundPosition = "center"
  }, 40000)
}

function getRandomColor() {
  const angle = ['to right', 'to left', 'to top', 'to bottom'];
  const index = Math.floor(Math.random() * angle.length);
  const color1 = Math.floor(Math.random() * 255 + 0);
  const color2 = Math.floor(Math.random() * 255 + 0);
  const color3 = Math.floor(Math.random() * 255 + 0);
  const color4 = Math.floor(Math.random() * 255 + 0);
  const color5 = Math.floor(Math.random() * 255 + 0);
  return `linear-gradient(${angle[index]},
            rgba(${color1}, ${color2}, ${color3}, 0.3),
            rgba(${color4}, ${color5}, ${color1}, 0.3),
            rgba(${color2}, ${color3}, ${color4}, 0.3),
            rgba(${color5}, ${color1}, ${color2}, 0.3),
            rgba(${color3}, ${color4}, ${color5}, 0.3)
  `;
}

