<template>
    <div class="container mb-4">
        <div class="row justify-content-center">
            <div class="col-12">
                <img :src="banner_url" alt="Banner" class="img-fluid">
            </div>
        </div>
        <div class="row justify-content-center text-left mt-4">
            <div class="col-lg-3 col-sm-6">
                <h4>Imdb ID: <b>{{ imdbid }}</b></h4>
                <!-- <h4>Season: <b>{{ season }}</b></h4> -->
                <h4>Seasons:</h4>
                <ul class="list-group">
                    <b-dropdown :text="'Season ' + season" class="m-md-2">
                        <b-dropdown-item v-for="s in seasons" v-on:click="season = s" :key="s">
                            <router-link :to="{ name: 'videodetails-season', params: {season: s }}" replace>{{ s }}</router-link>
                        </b-dropdown-item>
                    </b-dropdown>
                </ul>
            </div>
            <div class="col-lg-4 col-sm-6">
                <h4>Titles:</h4>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(title, index) in titles" :key="index">
                        <router-link :to="{ name: 'videodetails-episode', params: {imdbid, season, episode: index }}">{{ title }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "VideoDetails",
        data() {
            return {
                videoId: this.$route.params.id,
                banner_url: '',
                imdbid: '',
                season: this.$route.params.season ? this.$route.params.season : 1,
                titles: [],
                seasons: []
            }
        },
        methods: {
            fetchDetails() {
                axios.get('https://cors-escape.herokuapp.com/http://sbfunapi.cc/api/serials/es/?id=' + this.videoId + '&season=' + this.season).then(({data}) => {
                    this.banner_url = data.banner;
                    this.imdbid = data.imdb_id;
                    this.season = data.season;
                    this.titles = data.titles;
                    this.seasons = data.seasons;
                });
            }
        },
        created() {
            this.fetchDetails();
        },
        watch: {
            season: function() {
                this.fetchDetails();
            }
        }
    }

</script>

<style scoped>

</style>