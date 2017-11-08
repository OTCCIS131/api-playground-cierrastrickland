$(function () {
    const vm = new Vue({
        el: '#app',
        data: {
            song: "",
            artist: "",
            loading: false,
            lyric: null
        },
        methods: {
            loadLyrics(){
                this.loading = true

                this.$http.get('https://api.lyrics.ovh/v1/' + this.artist + '/' + this.song)
                    .then(resp => {
                        this.lyric = resp.body.lyrics
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