const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')
const songsContainer = document.querySelector('#songs-container')
const prevAndNextContainer = document.querySelector('#prev-and-next-container')


const apiUrl = `https://api.lyrics.ovh`


const insertSongsIntoPage = (songsInfo)=>{
    songsContainer.innerHTML = songsInfo.data.map(song=>{
        return `<li class='song'>
                    <span class='song-artist'>
                        <strong>${song.artist.name}</strong> - ${song.title}
                    </span>
                    <button class='btn' data-artist='${song.artist.name}' data-song-title='${song.title}'>
                        Letra
                    </button>
                </li>`
    }).join('')
}


const fetchSongs = async(term)=>{
    const response = await fetch(`${apiUrl}/suggest/${term}`)
    const data = await response.json()

    insertSongsIntoPage(data)
    
    // console.log(data)
}


form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const searchTerm = searchInput.value.trim()

    if(!searchTerm){
        songsContainer.innerHTML = `<li class='warning-message'>Digite um termo válido</li>`

        return
    }

    fetchSongs(searchTerm)
})


const fetchLyrics = async(artist, songTitle)=>{
    const response = await fetch(`https://lyric-api.herokuapp.com/api/find/${artist}/${songTitle}`)
    const data = await response.json()
    
    console.log(data)

    songsContainer.innerHTML = `
        <li class='lyrics-container'>
            <h2><strong>${songTitle}</strong> - ${artist}</h2>
            <p class='lyrics'>${data}</p>
        </li>
    `
}


songsContainer.addEventListener('click', (e)=>{
    const clickedElement = e.target

    if(clickedElement.tagName === 'BUTTON'){
        const artist = clickedElement.getAttribute('data-artist')
        const songTitle = clickedElement.getAttribute('data-song-title')


        fetchLyrics(artist, songTitle)
    }
})

