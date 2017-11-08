$(function () {
    const vm = new Vue({
        el: '#app',
        data: {
            loading: false,
            songs: [],
            lyric: null
        },
        methods: {
            loadLyrics(){
                this.loading = true

                this.$http.get('https://api.lyrics.ovh/v1/' + '#inputArtist' + '/' + '#inputSong')
                    .then(resp => {
                        this.songs = resp.body
                        this.loading = false
                    })
            },
            selectSong(lyric) {
                this.lyric = lyric
                this.loadLyrics()
            }
        }
    })
})