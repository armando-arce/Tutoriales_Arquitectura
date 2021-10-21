<script>
  export default {
    async asyncData({ params, $axios }) {
      const book = await $axios.$get('https://api.typewriter.cloud/arce/bookstore/book/'+params.slug)
	  const authorId = book.fields.find(field => field.label === 'authorId').value
	  const author = await $axios.$get('https://api.typewriter.cloud/arce/bookstore/author/'+authorId)
	  const publisherId = book.fields.find(field => field.label === 'publisherId').value
      const publisher = await $axios.$get('https://api.typewriter.cloud/arce/bookstore/author/'+publisherId)
      return { book, author, publisher, authorId, publisherId }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+book.fields.find(field => field.label === 'bookImage').value">
     </div>
     <div class="six columns">
       <h4>{{book.title}}</h4>
	   by <NuxtLink :to="'/authors/'+authorId">
		   {{author.fields.find(field => field.label === 'name').value}}
	   </NuxtLink></br>
	   Edition: {{book.fields.find(field => field.label === 'edition').value}}; 
	   Copyright: {{book.fields.find(field => field.label === 'copyright').value}}; 
	   Language: {{book.fields.find(field => field.label === 'language').value}}; 
	   Pages: {{book.fields.find(field => field.label === 'pages').value}}</br>
	   published by <NuxtLink :to="'/publishers/'+publisherId">
		   {{publisher.fields.find(field => field.label === 'name').value}}
	   </NuxtLink></br></br>
	   <b>Description</b></br>
	    {{author.fields.find(field => field.label === 'content').value}}
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>