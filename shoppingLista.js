//***************************************************
// Javascript functions
var myList93 = (function() {
    //Private
    var cart = [];

    function Item(namn, pris, antal) {
        this.namn = namn
        this.pris = pris
        this.antal = antal
    };

    function saveCart() {
        localStorage.setItem("Inköpslista", JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("Inköpslista"));
    }
    loadCart();


    //Public
    var obj = {};
    obj.addItemToCart = function(namn, pris, antal) {
            for (var i in cart) {
                if (cart[i].namn === namn) {
                    cart[i].antal += antal;
                    saveCart();
                    return;
                }
            }
            var item = new Item(namn, pris, antal);
            cart.push(item);
            saveCart();
        }

    obj.setCountForItem = function(namn, antal) {
        for (var i in cart) {
            if (cart[i].namn === namn) {
                cart[i].antal = antal;
                if (cart[i].antal === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    };

    obj.removeItemFromCart = function(namn) {
        for (var i in cart) {
            if (cart[i].namn === namn) {
                cart[i].antal--;
                if (cart[i].antal === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    }
    obj.removeItemFromCartAll = function(namn) {
        for (var i in cart) {
            if (cart[i].namn === namn) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    }

    obj.clearCart = function() {
        cart = [];
        saveCart();
    }

    obj.totalCart = function() {
        var totalcost = 0;
        for (var i in cart) {
            totalcost += cart[i].pris * cart[i].antal;
        }
        return totalcost.toFixed(2);
    }


    obj.listCart = function() {
        var cartCopy = [];
        for (var i in cart) {
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.antal * item.pris).toFixed(2);
            console.log(itemCopy.total);
            cartCopy.push(itemCopy);
        }
        return cartCopy; // hade dena i övre raden!
    }

    obj.countCart = function() { // -> return total count
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].antal;
        }

        return totalCount;
    };


    return obj;



})();
