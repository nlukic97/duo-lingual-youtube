<template>
  <div>

  </div>
</template>
<script>
export default {
  name: 'Videos',
  data() {
    return {
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
          sr: 'Dobro dosli na dvojezicni youtube'
        },
        listOfVideos: {
          en: 'List of videos',
          sr: 'Lista klipova'
        },
        description:{
          en: 'Description',
          sr: 'Opis'
        },
        uploadDate:{
          en: 'Upload date',
          sr:'Datum postavljanja'
        }
      }
    }
  }
}
</script>