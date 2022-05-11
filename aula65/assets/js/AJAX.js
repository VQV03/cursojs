// Mdn:
//https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX
//https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started

//XMLHttpRequest

/*const request = obj => {
    const xhr = new XMLHttpRequest(); //xhr = xml http request
    //Verbos http. Metodo GET, representa voce buscar algum conteudo da internet.
    xhr.open(obj.method, obj.url, true); //false = sincrono, true = assincrono
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText)
        }
    });
    //Lista de codigos de estado http:
    //https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === "a") {
        e.preventDefault()
        loadPage(el);
    }
})

function loadPage(el) {
    const href = el.getAttribute('href');

    request({
        method: 'GET',
        url: href,
        success(response) {
            loadResult(response)
        }, error (errorText) {
            console.log(errorText);
        }
    });
};

function loadResult (response) {
    const result = document.querySelector('.resultado')
    result.innerHTML = response;
};*/ //Com callback

const request = obj => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(obj.method, obj.url, true);
      xhr.send();
  
      xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      });
    });
};
  
  document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
  
    if (tag === 'a') {
      e.preventDefault();
      loadPage(el);
    }
});
  
async function loadPage(el) {
    const href = el.getAttribute('href');
  
    const objConfig = {
      method: 'GET',
      url: href
    };
  
    try {
      const response = await request(objConfig);
      loadResult(response);
    } catch(e) {
      console.log(e);
    }
}
  
function loadResult(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
} //Com promise
  