response = response.data.sort(function (obj1, obj2) {
    return obj1.nome < obj2.nome ? -1 :
    (obj1.nome > obj2.nome ? 1 : 0);
    });