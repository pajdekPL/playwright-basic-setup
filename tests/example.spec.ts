import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  // 1) add to spaces before page and and click ctrl+save and check if auto format is working
  // 2) if it works let's check why we have this red error in the line 6(it should show error if not something is wrong with our setup)
  page.goto("https://playwright.dev/");
});

test("get started link", async ({ page }) => {
  // unused variable also should be highlighted
  const someUnusedConst = "I'm not used";


  // 3) after saving the file, indentation should be fixed
      await page.goto("https://playwright.dev/");

    await page.getByRole("link", { name: "Get started" }).click();

  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});
