document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const form = document.getElementById('enderecoForm');
    const jwtToken = localStorage.getItem('jwtToken');

    let enderecoIdAtual = null;

    window.abrirPopupAtualizacao = async function(id) {
        enderecoIdAtual = id;
        try {
            const response = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${jwtToken}`
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao carregar endereço');
            }

            const endereco = await response.json();

            document.getElementById('enderecoId').value = id;
            form.querySelector('input[type="text"]:nth-of-type(1)').value = endereco.title || '';
            form.querySelector('input[type="text"]:nth-of-type(2)').value = endereco.cep || '';
            form.querySelector('input[type="text"]:nth-of-type(3)').value = endereco.number || '';
            form.querySelector('input[type="text"]:nth-of-type(4)').value = endereco.complement || '';
            document.getElementById('end').value = endereco.address || '';

            popup.style.display = 'flex';

        } catch (error) {
            console.error('Erro:', error);
            alert('Não foi possível carregar os dados do endereço');
        }
    };

    function fecharPopup() {
        popup.style.display = 'none';
        form.reset();
        enderecoIdAtual = null;
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        if (!enderecoIdAtual) return;

        const dadosAtualizacao = {
            title: form.querySelector('input[type="text"]:nth-of-type(1)').value,
            cep: form.querySelector('input[type="text"]:nth-of-type(2)').value,
            address: document.getElementById('end').value,
            number: form.querySelector('input[type="text"]:nth-of-type(3)').value,
            complement: form.querySelector('input[type="text"]:nth-of-type(4)').value
        };

        try {
            const response = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${enderecoIdAtual}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`
                },
                body: JSON.stringify(dadosAtualizacao)
            });

            if (!response.ok) {
                throw new Error('Erro ao atualizar endereço');
            }

            const resultado = await response.json();
            alert('Endereço atualizado com sucesso!');
            fecharPopup();

            document.dispatchEvent(new CustomEvent('enderecoAtualizado'));

        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao atualizar endereço. Por favor, tente novamente.');
        }
    });

    document.getElementById('cancelar').addEventListener('click', fecharPopup);

    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            fecharPopup();
        }
    });
});