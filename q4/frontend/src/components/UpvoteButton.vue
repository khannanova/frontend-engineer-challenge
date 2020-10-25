<template>
  <button class="upvote-button" :class="upvoted && 'upvote-button--upvoted'">
    {{ upvoted ? "Upvoted" : "Upvote" }}
  </button>
</template>

<script>
export default {
  name: "UpvoteButton",
  props: {
    upvoted: Boolean
  }
};
</script>

<style scoped lang="scss">
.upvote-button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid #5850ec;
  background-color: #5850ec;
  color: #fff;
  &:hover {
    background-color: #6875f5;
  }

  &--upvoted {
    background-color: #fff;
    color: #5850ec;
    cursor: unset;
    &:focus {
      outline: unset;
    }
    &:hover {
      background-color: #fff;
    }
  }
}
</style>
