let leakedReference;

function createAndRemove() {
    const h1 = document.createElement('h1');
    h1.innerText = "Jay Shree Ram";
    document.body.appendChild(h1);

    const ul = document.createElement('ul');
    for (let i = 0; i < 1000; i++) {
        const li = document.createElement('li');
        ul.appendChild(li);
    }

    document.body.appendChild(ul);

    leakedReference = ul;

    ul.remove();
}

createAndRemove();