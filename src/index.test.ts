import { foo } from "./index.ts";
import { test } from "node:test";
import { strictEqual } from "node:assert";

test("foo", () => {
	strictEqual(foo(), 123);
});
