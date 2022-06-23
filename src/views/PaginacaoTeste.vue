<template>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>User ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="p in displayedPosts" :key="p">
        <td>{{ p.first }}</td>
        <td>{{ p.last }}</td>
        <td>{{ p.suffix }}</td>
      </tr>
    </tbody>
  </table>
  <button class="btn-pagination" type="button" v-if="page != 1" @click="page--">
    Prev
  </button>
  <button
    class="btn-pagination"
    type="button"
    v-for="pageNumber in pages.slice(page - 1, page + 10)"
    :key="pageNumber"
    @click="page = pageNumber"
  >
    {{ pageNumber }}
  </button>
  <button
    class="btn-pagination"
    type="button"
    @click="page++"
    v-if="page < pages.length"
  >
    Next
  </button>
</template>

<script>
export default {
  data() {
    return {
      posts: [""],
      page: 1,
      perPage: 9,
      pages: [],
    };
  },
  methods: {
    getPosts() {
      for (let i = 0; i < 36; i++) {
        this.posts.push({ first: "John", last: "Doe", suffix: "#" + i });
      }
    },
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
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    },
  },
  watch: {
    posts() {
      this.setPages();
    },
  },
  created() {
    this.getPosts();
    this.setPages();
  },
};
</script>

<style scoped>
.btn-pagination {
  cursor: pointer;
  color: #fff;
  width: 70px;
  height: 30px;
  border: none;
  margin: 2px;
  background-color: var(--bg_green);
  border-radius: 5px;
}

.btn-pagination:focus {
  background-color: var(--card_blue);
}
</style>