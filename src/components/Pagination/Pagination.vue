<template>
  <div>
    <button
        class="btn-pagination"
        type="button"
        v-if="page != 1"
        @click="page--"
    >Prev</button>

    <button
        class="btn-pagination"
        type="button"
        v-for="pageNumber in pages.slice(page - 1, page + 5)"
        :key="pageNumber"
        @click="page = pageNumber"
    >{{ pageNumber }}</button>
      
    <button
        class="btn-pagination"
        type="button"
        @click="page++"
        v-if="page < pages.length"
    >Next</button>

  </div>
</template>

<script>
export default {
  props:['list'],
  emits: ['displayedPosts'],

  data(){
    return{
      posts: [""],
      page: 1,
      perPage: 10,
      pages: [],
    }
  },
  created: async function (){
    this.posts = this.list
  },

  computed: {
    displayedPosts() {
      return this.paginate(this.posts)
    },
  },

  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
  },

  watch: {
    displayedPosts(newValue){
      this.$emit('displayNewList', newValue)
    },
    posts() {
      this.setPages();
    },
  },

}
</script>

<style scoped>

.btn-pagination {
  cursor: pointer;
  color: #fff;
  width: 40px;
  height: 30px;
  margin: 2px;
  background-color: var(--card_green);
  border-radius: 5px;
}

.btn-pagination:focus {
  background-color: var(--card_blue);
}
</style>