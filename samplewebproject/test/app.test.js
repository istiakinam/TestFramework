const assert = require('assert')

it('has a text input', async () => {
    const dom = await render('index.html')

    const input = dom.window.document.querySelector('input')

    assert(input)
})

it('shows a success message with valid input', async () => {
    const dom = await render('index.html')

    const input = dom.window.document.querySelector('input')
    input.value = 'myemail@gmail.com'

    dom.window.document 
        .querySelector('form')
        .dispatchEvent(new dom.window.Event('submit'))

    const h1 = dom.window.document.querySelector('h1')

    assert.strictEqual(h1.innerHTML, 'Email is good')
})

it('shows a fail message with invalid input', async () => {
    const dom = await render('index.html')

    const input = dom.window.document.querySelector('input')
    input.value = 'myemsdsdfe'

    dom.window.document 
        .querySelector('form')
        .dispatchEvent(new dom.window.Event('submit'))

    const h1 = dom.window.document.querySelector('h1')

    assert.strictEqual(h1.innerHTML, 'Email invalid')
})