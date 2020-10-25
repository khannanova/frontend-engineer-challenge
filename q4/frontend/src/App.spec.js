import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "@/App.vue";
import Home from "@/views/Home";
import Book from "@/views/Book";
import { routes } from "@/router";

const localVue = createLocalVue();
localVue.use(VueRouter);

it("renders the Home page via routing", async () => {
  const router = new VueRouter({ routes });
  const wrapper = mount(App, {
    localVue,
    router
  });

  router.push("/").catch(() => {});

  await wrapper.vm.$nextTick();
  expect(wrapper.findComponent(Home).exists()).toBe(true);
});

it("renders the Book page via routing", async () => {
  const router = new VueRouter({ routes });
  const wrapper = mount(App, {
    localVue,
    router
  });

  router.push("/books/war-and-peace").catch(() => {});

  await wrapper.vm.$nextTick();
  expect(wrapper.findComponent(Book).exists()).toBe(true);
});
