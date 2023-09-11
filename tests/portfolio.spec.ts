import { test, expect, type Page } from '@playwright/test';


test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('https://astro-k3ndev.vercel.app/');
    });
  
    test('main navigation', async ({ page }) => {

        // Expectations for the main navigation test:
        // 1. Check if the URL matches the starting URL.
        await expect(page).toHaveURL('https://astro-k3ndev.vercel.app/');

        // 2. Check if the page title is 'Portfollio'.
        const pageTitle = await page.title();
        expect(pageTitle).toBe('Portfollio');
    });

    test('gist navigation', async ({ page }) => {

        // Click Gist link.
        await page.getByRole('link', { name: 'Gist' }).click();


        // 1. Check if the URL matches the expected URL after clicking.
        await expect(page).toHaveURL('https://astro-k3ndev.vercel.app/gists/');

        // Expectations for the gist navigation test:

        // 2. Check if the page title is 'Gist'.
        const pageTitle = await page.title();
        expect(pageTitle).toBe('Gist');
    });

    test('guestBook navigation', async ({ page }) => {

        // Click GuestBook link.
        await page.getByRole('link', { name: 'GuestBook' }).click();

        // Expectations for the guestBook navigation test:

        // 1. Check if the URL matches the expected URL after clicking.
        await expect(page).toHaveURL('https://astro-k3ndev.vercel.app/guestBook/');

        // 2. Check if the page title is 'GuestBook'.
        const pageTitle = await page.title();
        expect(pageTitle).toBe('GuestBook');
    });
  });