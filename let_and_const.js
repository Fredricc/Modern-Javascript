for (var x = 1; x <= 10; x++){}

console.log(x);

const obj = {
    traditionalFunction: () => {
        console.log('traditional function', this );

    },
    arrowFunction: () => {
        console.log('arrow function', this);
    },
    lastName: 'Fred'
};

console.log ('this environment', this);
obj.traditionalFunction();
obj.arrowFunction();