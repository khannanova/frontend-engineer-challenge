import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import axios from "axios";
import Home from "@/views/Home";
import BookList from "@/components/BookList";

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

jest.mock("axios");
axios.get.mockResolvedValue({
  data: {
    books: mockedBooks
  }
});

it("fetches data and passes it to BookList component", async () => {
  const wrapper = shallowMount(Home);

  // Shows loader when data is loading
  expect(wrapper.text()).toContain("Loading...");

  await flushPromises();

  expect(wrapper.findComponent(BookList).exists()).toBe(true);
  expect(wrapper.findComponent(BookList).props("books")).toEqual(mockedBooks);

  // Hides the loader
  expect(wrapper.text()).not.toContain("Loading...");
});

it("shows an error message when API returns an error", async () => {
  axios.get.mockRejectedValueOnce(new Error("API error"));
  const wrapper = shallowMount(Home);

  await flushPromises();

  expect(wrapper.text()).toContain("API error");
});
