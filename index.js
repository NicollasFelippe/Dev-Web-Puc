document.addEventListener('DOMContentLoaded', () => {
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const adicionarCarrinhoBtn = produto.querySelector('.adicionar-carrinho');
        adicionarCarrinhoBtn.addEventListener('click', () => {
            const nome = produto.getAttribute('data-nome');
            const preco = parseFloat(produto.getAttribute('data-preco'));
            const imagem = produto.getAttribute('data-imagem');

            const item = { nome, preco, imagem };

            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            carrinho.push(item);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));

            alert(`${nome} foi adicionado ao carrinho!`);
        });
    });
});

