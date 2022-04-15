const searchById = (id, list) => {
    list.forEach(element => {
        if(element.id === id) { return element }
    });

};

module.exports
