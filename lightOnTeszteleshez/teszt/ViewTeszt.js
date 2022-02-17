const { test } = QUnit

QUnit.module('Felület teszt', (h) => {
    h.beforeEach(() => {
        lampak.splice(0, lampak.length);
        this.lamter = new LampakJatekter($("article"));
        for (let index = 0; index < lampak.length; index++) {
            if (lampak[index].allapot==true) {
                lampak[index].setAllapot();
            }
        }
                
        console.log("ezkell");
        console.log(lampak.length);
        console.log("ezkell");
    });
    test('Létrejön-e az adott számú elem? ', (assert) => {
        assert.equal(lampak.length, 9, 'Igen!');
    });
    test('Megfelelő-e az adott elem ID? ', (assert) => {
        for (let index = 0; index < lampak.length; index++) {
            assert.equal(lampak[index].dataId, index, 'Igen!');
        }
    });
    test('Megfelelő-e az adott elem hatterszine? ', (assert) => {
        for (let index = 0; index < lampak.length; index++) {
            assert.equal(lampak[index].allapot, false, 'Igen!');
        }
    });
    test('Kattintásra változik a szín? ', (assert) => {
        for (let index = 0; index < lampak.length; index++) {
            lampak[index].allapot = !lampak[index].allapot;
            assert.equal(lampak[index].allapot, true, 'Igen!');
        }
    });
});