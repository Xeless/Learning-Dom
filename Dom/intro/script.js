const test = document.body;

const childfirst = test.children[1]

for (const child of childfirst.children) {
    console.log(child)
}

test.style.backgroundColor = "#FF69B4"