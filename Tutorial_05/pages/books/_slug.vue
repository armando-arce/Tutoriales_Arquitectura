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
   <h4 style="margin-top: 15px">{{ title }}</h4>
   <h5>Book's details</h5>
   <form>
     <div class="row">
       <div class="six columns">
          <label for="idInput">ID</label>
          <input class="u-full-width" type="text" id="id" v-model="book.id" readonly/>
       </div>
       <div class="six columns">
          <label for="copyrightInput">Copyright</label>
          <input class="u-full-width" type="text" id="copyright" v-model="book.copyright" readonly/>
       </div>
     </div>
     <div class="row">
       <div class="six columns">
          <label for="editionInput">Edition</label>
          <input class="u-full-width" type="text" id="edition" v-model="book.edition" readonly/>
       </div>
       <div class="six columns">
          <label for="languageInput">Language</label>
          <input class="u-full-width" type="text" id="language" v-model="book.language" readonly/>
       </div>
     </div>
     <div class="row">
       <div class="six columns">
          <label for=" authorInput">Author</label>
          <NuxtLink :to="{ name: 'authors-slug', params: { slug: book.author } }">
            <input class="u-full-width" type="button" id=" author" v-model="book.author" readonly/>
          </NuxtLink>
       </div>
       <div class="six columns">
          <label for="languageInput">Publisher</label>
          <NuxtLink :to="{ name: 'publishers-slug', params: { slug: book.publisher } }">
            <input class="u-full-width" type="button" id="publisher" v-model="book.publisher" readonly/>
          </NuxtLink>
       </div>
     </div>
   </form>
   <FooterView />
 </div>
</template>