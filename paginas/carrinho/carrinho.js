// carregando o arquivo html
document.addEventListener('DOMContentLoaded', () => {
    const listaCarrinho = document.querySelector('.lista-carrinho');
    const totalCarrinho = document.querySelector('.total-carrinho');
    let total = 0;
    //funcao que atualiza o carrinho e traz para ele todos os dados que estão no localStorage como preco, nome imagem
    function atualizarCarrinho() {
        listaCarrinho.innerHTML = ''; // Limpa a lista antes de recriar
        total = 0;

        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        if (carrinho.length === 0) {
            listaCarrinho.innerHTML = '<li>O carrinho está vazio</li>';
        } else {
            carrinho.forEach((item, index) => {
                const itemCarrinho = document.createElement('li');
                itemCarrinho.classList.add('carrinho-item');
                itemCarrinho.setAttribute('data-index', index);
                itemCarrinho.innerHTML = `
                    <img src="../../images/${item.imagem}" alt="${item.nome}" width="90">
                    ${item.nome} - R$${item.preco.toFixed(2)}
                    <button class="remover-item">Remover</button>
                `;
                listaCarrinho.appendChild(itemCarrinho);
                total += item.preco;
            });
        }
        //ajustando preco do carrinho
        totalCarrinho.textContent = total.toFixed(2);
        const totalCarrinhoPagamento = document.querySelector('.pagamento .total-carrinho');
        if (totalCarrinhoPagamento) {
        totalCarrinhoPagamento.textContent = total.toFixed(2);
         }

        // Adiciona botao de remover ao clicar nos itens do carrinho
        document.querySelectorAll('.remover-item').forEach(button => {
            button.addEventListener('click', (event) => {
                const itemElement = event.target.closest('.carrinho-item');
                const index = itemElement.getAttribute('data-index');
                const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

                carrinho.splice(index, 1); // Remove o item do carrinho
                localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage

                atualizarCarrinho(); // Atualiza a interface do carrinho após remoção
            });
        });
    }

    atualizarCarrinho(); // Chama a função para exibir o carrinho ao carregar a página
});
