<script>
  export default {
    async asyncData({ $content, params }) {
      const book = await $content('books', params.slug).fetch()
        return { book }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+book.image" alt="Italian Trulli">
     </div>
     <div class="six columns">
       <h4>{{book.title}}</h4>
	   by <NuxtLink :to="'/authors/'+book.authorId">{{book.author}}</NuxtLink></br>
	   Edition: {{book.edition}}; Copyright: {{book.copyright}}; 
	   Language: {{book.language}}; Pages: {{book.pages}}</br>
	   published by <NuxtLink :to="'/publishers/'+book.publisherId">{{book.publisher}}</NuxtLink></br></br>
	   <b>Description</b></br>
	    <nuxt-content :document="book" />
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>