import { test } from "@playwright/test";

test("First test and debug", async ({ page }) => {
  // TODO
  // 1. Set breakpoint at line 10
  // 2. Run the test in debug mode
  // Let's dive in what we can achieve using debug mode
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  console.log("Hello, World!");
});
