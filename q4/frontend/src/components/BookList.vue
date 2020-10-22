<template>
  <div v-if="books">
    <div v-for="(book, index) in books" :key="book.slug" class="book">
      <div class="book__cover">
        <router-link :to="`books/${book.slug}`">
          <img :src="book.cover" :alt="book.title + ' Book Cover'" />
        </router-link>
      </div>
      <div class="book__content">
        <div class="book__header">
          <router-link :to="`books/${book.slug}`" class="book__title">
            <h2 class="">{{ index + 1 }}. {{ book.title }}</h2>
          </router-link>
          <span class="book__rating">{{ book.rating }}/10</span>
        </div>

        <span class="book__author">{{ book.author }}</span>
        <p class="book__synopsis">{{ book.synopsis | truncate(200) }}</p>

        <div class="book__upvotes">
          <button
            class="book__button"
            :class="
              book.upvoted ? 'book__button--upvoted' : 'book__button--upvote'
            "
          >
            {{ book.upvoted ? "Upvoted" : "Upvote" }}
          </button>

          <span class="books__upvotes-counter">
            {{ book.upvotes | pluralize("upvote") }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookList",
  props: {
    books: {
      slug: String,
      author: String,
      title: String,
      cover: String,
      rating: String,
      synopsis: String,
      upvoted: Boolean,
      upvotes: Number
    }
  }
};
</script>

<style scoped lang="scss">
$break-mobile: 640px;

h1 {
  text-align: center;
}

.book {
  display: flex;
  max-width: 50rem;
  background-color: #fff;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (max-width: $break-mobile) {
    flex-direction: column;
  }
}

.book__cover {
  img {
    width: 160px;
    height: 250px;
    border-radius: 0.375rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: $break-mobile) {
    text-align: center;
  }
}

.book__content {
  text-align: left;
  padding-left: 1.5rem;

  @media (max-width: $break-mobile) {
    padding-left: 0;
    padding-top: 2rem;
  }
}

.book__title {
  text-decoration: none;
  color: #2c3e50;

  h2 {
    margin: 0;

    @media (max-width: $break-mobile) {
      font-size: 1.25rem;
    }
  }
}

.book__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.book__rating {
  font-weight: 600;
  color: #5850ec;
}

.book__button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid #5850ec;

  &--upvote {
    background-color: #5850ec;
    color: #fff;
    &:hover {
      background-color: #6875f5;
    }
  }

  &--upvoted {
    background-color: #fff;
    color: #5850ec;
    cursor: unset;
    &:focus {
      outline: unset;
    }
  }
}

.book__synopsis {
  margin-bottom: 2rem;
}

.book__upvotes {
  display: flex;
  align-items: center;
}

.books__upvotes-counter {
  color: #6b7280;
  margin-left: 1rem;
}
</style>
