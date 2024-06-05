document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const productForm = document.getElementById('productForm');

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = userForm.username.value;
        const email = userForm.email.value;
        console.log(`Adicionando usuário: ${username}, Email: ${email}`);
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor
        userForm.reset();
    });

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const productName = productForm.productName.value;
        const price = productForm.price.value;
        console.log(`Adicionando produto: ${productName}, Preço: ${price}`);
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor
        productForm.reset();
    });
});
