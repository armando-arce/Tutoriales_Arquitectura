<script>
  export default {
    async asyncData({ $content, params }) {
      const books = await $content('books')
        .only(['title', 'image', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        books
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h2 class="title">Books</h2>
   <div class="row">
   <div class="four columns" v-for="book of books" :key="book.slug">
   	<figure>
   	 <NuxtLink :to="{ name: 'books-slug', params: { slug: book.slug } }">
      <img width="100%" :src="'/images/'+book.image">
     </NuxtLink>
   	<figcaption style="text-align: center">{{book.title}}</figcaption>
   </figure>
   </div>
   </div>
   <FooterView />
 </div>
</template>