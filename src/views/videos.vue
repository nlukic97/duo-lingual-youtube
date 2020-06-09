<template>
  <div>
    <h1>{{translations.mainHeading[this.lang]}} ({{$route.params.lang}})</h1> <!-- paste this in the square brackets - - >    $route.params.lang. Bolje stavi ovo u data element, jer ce biti boljef    -->

    <h2>{{translations.listOfVideos[this.lang]}}</h2> <!-- varijabla ako dodajes ide ovako [this.lang]
    kad izvlacis iz data da pokazuje na putanju -->

    <ul>
      <li v-for="(video, index) in videos[this.lang]" v-bind:key="index">
        <img v-on:click="toggleModal(video.id)" v-bind:src="generateThumbnailUrl(video.id)" alt="">
        <h3 v-on:click="toggleModal(video.id)">
          {{video.title}}
        </h3>
      </li>
    </ul>
    <div v-show="showModal" v-on:click="toggleModal" id="modal">
      <iframe width="560" height="315" v-bind:src="embedVideo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Videos',
  data() {
    return {
      // lang:'rs', stara opcija ako menjas preko
      lang:this.$route.params.lang,
      showModal:false,
      embedVideo:null,
      videos: {
        en:[ 
            {
              title:'The Man Behind the World’s Ugliest Buildings - Alternatino',
              id:'uvU5dmu4sl8'
            },
            {
              title:'Shaquille o Neal party at tomorrowland 😂',
              id:'iT4CEMJNM0c'
            },
            {
              title:'Chappelle\'s Show - The Racial Draft (ft. Bill Burr, RZA, and GZA) - Uncensored',
              id:'2z3wUD3AZg4'
            },

          ],
        rs:[
              {
                title:'KAKO GOVORITI SRPSKI JEZIK!!!!!',
                id:'bAkY3Lm_h0Q'
              },
              {
                title:'24H MENJAM AUTO SA CHODOM ! * udario kontejner *',
                id:'4i5spo6-ogk'
              },
              {
                title:'Sinan Sakic - Trezan - (Audio 2002)',
                id:'Jnhqes1Iv2s'
              }
            ]
      },
      translations: {
        mainHeading: {
          en: 'Welcome to duo-lingual-youtube',
          rs: 'Dobro dosli na dvojezicni youtube'
        },
        listOfVideos: {
          en: 'List of videos',
          rs: 'Lista klipova'
        },
        description:{
          en: 'Description',
          rs: 'Opis'
        },
        uploadDate:{
          en: 'Upload date',
          rs:'Datum postavljanja'
        }
      },
      translation2:{
        en:{
          mainHeading:'Welcome to duo-lingual-youtube',
          listOfVideos:'List of videos'
        },
        rs:{
          mainHeading:'Dobro dosli na dvojezicni youtube',
          listOfVideos:'Lista klipova'
        }
      }
    }
  },
  methods: {
    /**
     * Expects an argument that is either a youtube URL or a ID,
     * and returns back the ID.
     */
    getIdFromUrl: function(videoIdOrUrl) {
          if (videoIdOrUrl.indexOf('http') === 0) {
              return videoIdOrUrl.split('v=')[1];
          } else {
              return videoIdOrUrl;
          }
    },
    
    /**
       * Expects an argument that is either a youtube URL or a ID,
       * and returns back the URL of the thumbnail for that video.
       */
    generateThumbnailUrl: function(videoIdOrUrl) {
        return 'https://i3.ytimg.com/vi/' + this.getIdFromUrl(videoIdOrUrl) + '/default.jpg';
    },

    /**
       * Expects an argument that is either a youtube URL or a ID,
       * and returns back the URL for that video.
       */
    generateWatchUrl: function(videoIdOrUrl) {
          return 'https://www.youtube.com/watch?v=' + this.getIdFromUrl(videoIdOrUrl);
    },
      
    /**
       * Expects an argument that is either a youtube URL or a ID,
       * and returns back the embed URL for that video.
       */
    generateEmbedUrl: function(videoIdOrUrl) {
        return 'https://www.youtube.com/embed/' + this.getIdFromUrl(videoIdOrUrl);
    },
    toggleModal(videoIdOrUrl) { //moze a i ne mora da prihvati parametar
      if(this.showModal == false){
        this.embedVideo = this.generateEmbedUrl(videoIdOrUrl)
        this.showModal = true;
      } else {
        this.showModal = false;
        this.embedVideo = null;
      }
    }
  },
  mounted(){
    console.log(this.$cookie) //importovao si na pocetku koda. Modul si napravio
  }
}
</script>
<style lang="scss">
  ul {
    padding:0;
    list-style: none;
    width: 600px;
    text-align: left;
    margin:0 auto;
    img {
      max-width: 100%;
      &:hover {
        cursor:pointer;
      }
    }
    li {
      border:1px solid rgb(200, 195, 195);
      margin:20px 0;
      display:flex;
      align-items: center;
      box-shadow: 0 0 1px #333;
      transition:0.3s box-shadow;
      &:hover {
        box-shadow: 0 0 5px #333;
      }
        h3 {
          margin-left: 25px;
          &:hover {
          cursor:pointer;
        }
      }
    }
  }
  #modal {
    position:fixed;
    height:100%;
    width:100%;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.4);
    display:flex;
    justify-content: center;
    align-items: center;
  }
</style>