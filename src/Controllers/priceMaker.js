export default (order, menu, metodoDePagamento) => {

    let midPrice = 0;

    for (let iten of order) {
        midPrice += Number(iten.price) * Number(iten.amount);
        const extra = menu[iten.name].extra;
        let haveExtra;

        if (extra) {
            for (let i in order) {
                const have = order[i].name;
                if (have === extra) {
                    haveExtra = true;
                }
            }
            if (!haveExtra) {
                return { priceResult: "Item extra não pode ser pedido sem o principal", midPrice };
            }
        }
    }

    switch (metodoDePagamento) {
        case "dinheiro":
            midPrice *= 0.95;
            midPrice = midPrice.toFixed(2);
            break;

        case "credito":
            midPrice *= 1.03;
            midPrice = midPrice.toFixed(2);
            break;

        default:
            midPrice = midPrice.toFixed(2);
            break;
    }

    return { priceResult: true, midPrice };
}

