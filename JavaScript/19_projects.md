## 6. Colours [Link](https://stackblitz.com/edit/dom-project-chaiaurcode-pg26yw?file=6-unlimitedColors%2Findex.html)

```JavaScript
function colour() {
  let b = '0123456789ABCDEF';
  let c = '#';
  for (let i = 0; i < 6; i++) {
    c += b[Math.floor(Math.random() * 16)];
  }
  return c;
}
let z;
document.querySelector('#start').addEventListener('click', function () {
  function a() {
    document.body.style.backgroundColor = colour();
  }
  z = setInterval(a, 1000);
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(z);
});
```

## 5. Keys [Link](https://stackblitz.com/edit/dom-project-chaiaurcode-pg26yw?file=5-keyboard%2Findex.html)

```JavaScript
let a = document.querySelector('#insert');

window.addEventListener('keydown', function (e) {
  a.innerHTML = `
  <div class = "color">
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
  `;
});

// if you want to declare the key name of your choise then you can update this as
// <td>${e.key === ' ' ? 'space' : e.key} </td>      or
// <td>${e.key === 'o' ? 'Ohhhh' : e.key} </td>
```