import { describe, expect, it } from "@jest/globals";
import app from "../../src/core/app";

describe("Health API", () => {
  it("/health - should return OK", async () => {
    const res = await app.request("/health");
    const text = await res.text();

    expect(res.ok).toBeTruthy();
    expect(text).toBe("OK");
    expect(res.status).toBe(200);
  });
});
