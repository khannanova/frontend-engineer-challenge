<template>
  <div class="">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <h1>Top Books of All Time</h1>

    <div v-if="books">
      <BookList :books="books" />
    </div>
  </div>
</template>

<script>
import BookList from "@/components/BookList";
import axios from "axios";

export default {
  name: "Home",
  components: {
    BookList
  },
  data() {
    return {
      loading: false,
      books: null,
      error: null
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.error = this.books = null;
      this.loading = true;
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/books`)
        .then(response => {
          this.books = response.data.books;
        })
        .catch(error => {
          this.error = error.toString();
        })
        .then(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped lang="scss">
$break-mobile: 640px;

h1 {
  text-align: center;

  @media (max-width: $break-mobile) {
    font-size: 1.5rem;
  }
}
</style>
