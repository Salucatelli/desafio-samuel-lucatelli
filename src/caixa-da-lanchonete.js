import menu from "./DB/menu.js";
import itensSeparator from "./Controllers/itensSeparator.js";
import priceMaker from "./Controllers/priceMaker.js";


class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        const order = [];

        //Valida se foram passados ítens
        if (itens == "" || !itens || itens == []) {
            //Retorna um ERRO, se houver
            return "Não há itens no carrinho de compra!"
        };

        if (metodoDePagamento !== "credito" && metodoDePagamento !== "debito" && metodoDePagamento !== "dinheiro") {
            //Retorna um ERRO, se houver
            return "Forma de pagamento inválida!";
        }

        //Separa os ítens das quantidades
        const separatorResult = itensSeparator(itens, order, menu);

        if (separatorResult !== true) {
            //Retorna um ERRO, se houver
            return separatorResult;
        }

        const { priceResult, midPrice } = priceMaker(order, menu, metodoDePagamento);

        if (priceResult !== true) {
            //Retorna um ERRO, se houver
            return priceResult;
        }

        const finalPrice = String(midPrice).split(".")

        //Retorna o valor final
        return (`R$ ${String(finalPrice)}`);
    }
}

export { CaixaDaLanchonete };