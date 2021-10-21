<script>
  export default {
    async asyncData({ params, $axios }) {
      const books = await $axios.$get('https://api.typewriter.cloud/arce/bookstore/types/book')
      return {
        books
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Books Information</h3>
     <p>This section presents information about books</p>
   <ul>
     <li v-for="book of books" :key="book.slug">
       <NuxtLink :to="{ name: 'books-slug', params: { slug: book.slug } }">
         {{book.fields.find(field => field.label === 'title').value}}
       </NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>