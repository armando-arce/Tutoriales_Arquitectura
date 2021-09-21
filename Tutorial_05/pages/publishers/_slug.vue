<script>
  export default {
    async asyncData({ $content, params }) {
      const publisher = await $content('publishers', params.slug).fetch()
      const [prev, next] = await $content('publishers')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()
      return {
        publisher,
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
    <h1>{{ publisher.title }}</h1>
    <p>{{ publisher.description }}</p>
    <img :src="article.img" :alt="article.alt" />
    <p>Article last updated: {{ formatDate(publisher.updatedAt) }}</p>
    <nuxt-content :document="publisher" />
    <prev-next :prev="prev" :next="next" />
  </article>
</div>
</template>