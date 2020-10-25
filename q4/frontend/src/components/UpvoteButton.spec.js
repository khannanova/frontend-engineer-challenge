import { mount } from "@vue/test-utils";
import UpvoteButton from "@/components/UpvoteButton";

it("when upvoted by the user", () => {
  const wrapper = mount(UpvoteButton, {
    propsData: {
      upvoted: true
    }
  });

  expect(wrapper.find("button").text()).toBe("Upvoted");
  expect(wrapper.find("button").classes()).toEqual([
    "upvote-button",
    "upvote-button--upvoted"
  ]);
});

it("when not upvoted yet", () => {
  const wrapper = mount(UpvoteButton, {
    propsData: {
      upvoted: false
    }
  });

  expect(wrapper.find("button").text()).toBe("Upvote");
  expect(wrapper.find("button").classes()).toEqual(["upvote-button"]);
});
