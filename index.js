// carrega o documento html
document.addEventListener('DOMContentLoaded', () => {
    const produtos = document.querySelectorAll('.produto');
    //função arrow para carregar os produtos, adicionando um EventListener para saber qquando o click acontece
    produtos.forEach(produto => {
        const adicionarCarrinhoBtn = produto.querySelector('.adicionar-carrinho');
        adicionarCarrinhoBtn.addEventListener('click', () => {
            const nome = produto.getAttribute('data-nome');
            const preco = parseFloat(produto.getAttribute('data-preco'));
            const imagem = produto.getAttribute('data-imagem');

            const item = { nome, preco, imagem };
            //local Storage para guardar os itens que o carrinho vai buscar
            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            carrinho.push(item);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            //notificando que o item foi ao carrinho
            Toastify({
                text: `${nome} foi adicionado ao carrinho!`,
                duration: 3000, // A notificação desaparecerá após 3 segundos
                close: true, // Adiciona um botão de fechar
                gravity: "top", // Posição da notificação (top ou bottom)
                position: "right", // Posição da notificação (left, right ou center)
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Cor de fundo
              }).showToast();
                          
        });
    });
});

