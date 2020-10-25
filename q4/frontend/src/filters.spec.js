import { truncate, pluralize } from "@/filters";

describe("truncate", () => {
  it("truncates text when it is longer than the limit", () => {
    expect(truncate("Hello, world!", 5)).toBe("Hello...");
  });

  it("does not truncate text when it is short", () => {
    expect(truncate("Hello", 10)).toBe("Hello");
  });

  it("returns an empty string", () => {
    expect(truncate(undefined, 5)).toBe("");
  });
});

describe("pluralize", () => {
  it("converts text to plural", () => {
    expect(pluralize(2, "vote")).toBe("2 votes");
  });

  it("keeps it singular", () => {
    expect(pluralize(1, "vote")).toBe("1 vote");
  });
});
