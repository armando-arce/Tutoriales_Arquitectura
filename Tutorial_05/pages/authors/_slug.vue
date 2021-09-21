<script>
  export default {
    async asyncData({ $content, params }) {
      const author = await $content('authors', params.slug).fetch()
      const [prev, next] = await $content('authors')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()
      return {
        author,
        prev,
        next
      }
   },
   methods: {
           formatDate(date) {
             const options = { year: 'numeric', month: 'long', day: 'numeric' }
             return new Date(date).toLocaleDateString('en', options)
           }
        }
  }
</script>

<template>
 <div class="container">
  <article class="row">
    <h1>{{ author.title }}</h1>
    <p>{{ author.description }}</p>
    <img :src="article.img" :alt="article.alt" />
    <p>Article last updated: {{ formatDate(author.updatedAt) }}</p>
    <nuxt-content :document="author" />
    <prev-next :prev="prev" :next="next" />
  </article>
</div>
</template>