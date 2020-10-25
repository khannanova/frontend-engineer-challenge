import { createLocalVue, mount } from "@vue/test-utils";
import VueRouter from "vue-router";
import { truncate, pluralize } from "@/filters";
import BookList from "@/components/BookList";
import { routes } from "@/router";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.filter("truncate", truncate);
localVue.filter("pluralize", pluralize);

const mockedBooks = [
  {
    author: "Leo Tolstoy",
    cover: "war-and-peace.jpg",
    rating: "8.8",
    slug: "war-and-peace",
    synopsis: "Broadly focuses on Napoleon’s invasion of Russia in 1812...",
    title: "War and Peace",
    upvoted: true,
    upvotes: 123
  },
  {
    author: "F. Scott Fitzgerald",
    cover: "the-great-gatsby.jpg",
    rating: "9.3",
    slug: "the-great-gatsby",
    synopsis:
      "A story told by Nick Carraway, who was once Gatsby's neighbor...",
    title: "The Great Gatsby",
    upvoted: false,
    upvotes: 991
  }
];

it("renders the book list", () => {
  const router = new VueRouter({ routes });
  const wrapper = mount(BookList, {
    localVue,
    router,
    propsData: {
      books: mockedBooks
    }
  });

  expect(wrapper.findAll(".book")).toHaveLength(2);

  const titles = wrapper.findAll(".book__title");
  const author = wrapper.findAll(".book__author");
  const synopsis = wrapper.findAll(".book__synopsis");
  const rating = wrapper.findAll(".book__rating");
  const cover = wrapper.findAll(".book__cover img");
  const link = wrapper.findAll(".book__cover a");
  const upvotes = wrapper.findAll(".book__upvotes");

  // First book
  expect(titles.at(0).text()).toContain("1. War and Peace");
  expect(titles.at(0).attributes("href")).toBe("#/books/war-and-peace");
  expect(author.at(0).text()).toContain("Leo Tolstoy");
  expect(synopsis.at(0).text()).toContain(
    "Broadly focuses on Napoleon’s invasion of Russia in 1812..."
  );
  expect(rating.at(0).text()).toContain("8.8/10");
  expect(cover.at(0).attributes("src")).toContain("war-and-peace.jpg");
  expect(cover.at(0).attributes("alt")).toContain("War and Peace Book Cover");
  expect(link.at(0).attributes("href")).toBe("#/books/war-and-peace");
  expect(upvotes.at(0).text()).toContain("123 upvotes");

  // Second book
  expect(titles.at(1).text()).toContain("2. The Great Gatsby");
  expect(titles.at(1).attributes("href")).toBe("#/books/the-great-gatsby");
  expect(author.at(1).text()).toContain("F. Scott Fitzgerald");
  expect(synopsis.at(1).text()).toContain(
    "A story told by Nick Carraway, who was once Gatsby's neighbor..."
  );
  expect(rating.at(1).text()).toContain("9.3/10");
  expect(cover.at(1).attributes("src")).toContain("the-great-gatsby.jpg");
  expect(cover.at(1).attributes("alt")).toContain(
    "The Great Gatsby Book Cover"
  );
  expect(link.at(1).attributes("href")).toBe("#/books/the-great-gatsby");
  expect(upvotes.at(1).text()).toContain("991 upvotes");
});
