import { strictEqual } from "node:assert";
import { test } from "node:test";
import { foo } from "./index.ts";

test("foo", () => {
	strictEqual(foo(), 123);
});
