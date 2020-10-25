import { createLocalVue, mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import axios from "axios";
import Book from "@/views/Book";
import { pluralize } from "@/filters";

const localVue = createLocalVue();
localVue.filter("pluralize", pluralize);

const mockedBook = {
  author: "Leo Tolstoy",
  cover: "war-and-peace.jpg",
  rating: "8.8",
  slug: "war-and-peace",
  synopsis: "Broadly focuses on Napoleon’s invasion of Russia in 1812...",
  title: "War and Peace",
  upvoted: true,
  upvotes: 123
};

jest.mock("axios");
axios.get.mockResolvedValue({ data: mockedBook });

const $route = {
  params: { id: "war-and-peace" }
};

it("fetches and renders the book data", async () => {
  const wrapper = mount(Book, {
    localVue,
    mocks: {
      $route
    }
  });

  // Shows loader when data is loading
  expect(wrapper.text()).toContain("Loading...");

  await flushPromises();

  expect(wrapper.find(".book__title").text()).toContain("War and Peace");
  expect(wrapper.find(".book__author").text()).toContain("Leo Tolstoy");
  expect(wrapper.find(".book__synopsis").text()).toContain(
    "Broadly focuses on Napoleon’s invasion of Russia in 1812..."
  );
  expect(wrapper.find(".book__rating").text()).toContain("Rating: 8.8/10");
  expect(wrapper.find(".book__cover img").attributes("src")).toContain(
    "war-and-peace.jpg"
  );
  expect(wrapper.find(".book__cover img").attributes("alt")).toContain(
    "War and Peace Book Cover"
  );
  expect(wrapper.find(".book__upvotes").text()).toContain("123 upvotes");

  // Hides the loader
  expect(wrapper.text()).not.toContain("Loading...");
});

it("shows the error message when API returns an error", async () => {
  axios.get.mockRejectedValueOnce();
  const wrapper = mount(Book, {
    localVue,
    mocks: {
      $route
    }
  });

  await flushPromises();

  expect(wrapper.text()).toContain("Book is not found");
});
