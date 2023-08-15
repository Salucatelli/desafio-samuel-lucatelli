
export default (itens, order, menu, validator) => {
    for (let iten of itens) {
        const itenArray = iten.split(",");

        if (itenArray.length < 2) {
            return "Item inválido!"
        }

        const name = itenArray[0];

        if (!menu[name]) return "Item inválido!";

        const amount = itenArray[1];
        const price = menu[name].preco;

        if (Number(amount) === 0) {
            return "Quantidade inválida!"
        }

        order.push({ name, amount, price });
    }
    return true;
}
