<template>
  <div class="">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="book" class="book">
      <header class="book__header">
        <div class="book__info">
          <h2 class="book__title">{{ book.title }}</h2>
          <span class="book__author">{{ book.author }}</span>
        </div>

        <div class="book__upvotes">
          <span class="books__upvotes-counter">
            {{ book.upvotes | pluralize("upvote") }}
          </span>
          <UpvoteButton :upvoted="book.upvoted" />
        </div>
      </header>

      <div class="book__cover">
        <img :src="book.cover" :alt="book.title + ' Book Cover'" />
      </div>
      <h3 class="book__synopsis-header">Synopsys</h3>
      <p class="book__synopsis">{{ book.synopsis }}</p>

      <span class="book__rating">Rating: {{ book.rating }}/10</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UpvoteButton from "@/components/UpvoteButton";

export default {
  components: {
    UpvoteButton
  },
  data() {
    return {
      loading: false,
      book: null,
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
      this.error = this.book = null;
      this.loading = true;
      const bookId = this.$route.params.id;

      axios
        .get(`${process.env.VUE_APP_BASE_URL}/books/${bookId}`)
        .then(response => {
          this.book = response.data;
          document.title = this.book.title;
        })
        .catch(() => {
          this.error = "Book is not found";
        })
        .then(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
$break-mobile: 640px;

.book {
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.book__header {
  display: flex;
  justify-content: space-between;
}

.book__title {
  margin: 0;

  @media (max-width: $break-mobile) {
    font-size: 1.25rem;
  }
}

.book__cover {
  img {
    border-radius: 0.375rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    width: 300px;

    @media (max-width: $break-mobile) {
      width: 200px;
    }
  }
}

.book__upvotes {
  display: flex;
  align-items: center;

  @media (max-width: $break-mobile) {
    flex-direction: column;
    align-items: unset;
  }
}

.books__upvotes-counter {
  color: #6b7280;
  margin-right: 1rem;
  @media (max-width: $break-mobile) {
    order: 1;
    margin-right: 0;
    padding-top: 0.25rem;
    font-size: 0.875rem;
  }
}

.book__cover {
  text-align: center;
  margin-top: 2rem;
}
.book__synopsis-header {
  margin-top: 2rem;
  margin-bottom: 0;
}

.book__synopsis {
  margin-top: 0.5rem;
}

.book__rating {
  font-weight: 600;
}
</style>
