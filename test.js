import { t, Selector } from 'testcafe';

fixture`TestCafé Chromium Test`
  .page`http://localhost:8000/index.html`

test('window.location.href navigation [1]', async () => {
  await t
    .expect(Selector('h1').innerText).eql('Index page')
    .click(Selector('button'))
    .expect(Selector('h1').innerText).eql('Destination page');
});

test('window.location.href navigation [2]', async () => {
  await t
    .expect(Selector('h1').innerText).eql('Index page')
    .click(Selector('button'))
    .expect(Selector('h1').innerText).eql('Destination page');
});

test('window.location.href navigation [3]', async () => {
  await t
    .expect(Selector('h1').innerText).eql('Index page')
    .click(Selector('button'))
    .expect(Selector('h1').innerText).eql('Destination page');
});

test('window.location.href navigation [4]', async () => {
  await t
    .expect(Selector('h1').innerText).eql('Index page')
    .click(Selector('button'))
    .expect(Selector('h1').innerText).eql('Destination page');
});

test('window.location.href navigation [5]', async () => {
  await t
    .expect(Selector('h1').innerText).eql('Index page')
    .click(Selector('button'))
    .expect(Selector('h1').innerText).eql('Destination page');
});
