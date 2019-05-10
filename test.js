describe('should work', () => {
  it('should do something', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://google.com');
    const title = await browser.getTitle();
    console.log(title);
  });
});