import hello from "./hello";

describe('hello', () => {
    it("says hello", () =>
    {
        expect(hello("world")).toBe("Hello, world");
    })
});