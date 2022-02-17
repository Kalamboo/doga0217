const { test } = QUnit

QUnit.module('ellenorzes()', (h) => {
    h.before(() => {
        this.lojatek = new LOJatek(0);
    });
    test('Ellenőrzés metódus létezik-e? ', (assert) => {
        assert.ok(this.lojatek.ellenorzes, 'Igen!');
    });
    test('Függvény-e az Ellenőrzés metódus? ', (assert) => {
        assert.ok(typeof this.lojatek.ellenorzes === 'function', 'Igen!');
    });
    test('Minden lámpa felkapcsolva', (assert) => {
        for (let index = 0; index < 9; index++) {
            lampak[index].setAllapot();
        }
        assert.equal(this.lojatek.ellenorzes(), 9, 'Működik!');
    });
    test('Minden lámpa lekapcsolva', (assert) => {
        for (let index = 0; index < 9; index++) {
            lampak[index].setAllapot();
        }
        assert.equal(this.lojatek.ellenorzes(), 0, 'Működik!');
    });
});

QUnit.module('2. ellenorzes()', (h) => {
    h.before(() => {
        this.lojatek = new LOJatek(5);
    });
    test('5 lámpa felkapcsolva', (assert) => {
        assert.equal(this.lojatek.ellenorzes(), 5, 'Igen!');
    });
    test('Minden lámpa felkapcsolva', (assert) => {
        for (let index = 0; index < 9; index++) {
            if (lampak[index].allapot==false) {
                lampak[index].setAllapot();
            }
        }
        assert.equal(this.lojatek.ellenorzes(), 9, 'Működik!');
    });
    test('Minden lámpa lekapcsolva', (assert) => {
        for (let index = 0; index < 9; index++) {
            if (lampak[index].allapot==true) {
                lampak[index].setAllapot();
            }
        }
        assert.equal(this.lojatek.ellenorzes(), 0, 'Működik!');
    });
});

QUnit.module('szomszedokValtoztatasa()', (h) => {
    h.beforeEach(() => {
        this.lojatek = new LOJatek(0);
    });
    test('szomszedokValtoztatasa metódus létezik-e? ', (assert) => {
        assert.ok(this.lojatek.szomszedokValtoztatasa, 'Igen!');
    });
    test('Függvény-e az szomszedokValtoztatasa metódus? ', (assert) => {
        assert.ok(typeof this.lojatek.szomszedokValtoztatasa === 'function', 'Igen!');
    });
    test('Középső lámpát kapcsoljuk', (assert) => {
        this.lojatek.szomszedokValtoztatasa(4);
        assert.equal(this.lojatek.ellenorzes(), 4, '4 lámpa felkapcsolt!');
    });
    test('Bal, felső lámpát kapcsoljuk', (assert) => {
        this.lojatek.szomszedokValtoztatasa(0);
        assert.equal(this.lojatek.ellenorzes(), 2, '2 lámpa felkapcsolt!');
    });
    test('Jobb, felső lámpát kapcsoljuk', (assert) => {
        this.lojatek.szomszedokValtoztatasa(2);
        assert.equal(this.lojatek.ellenorzes(), 2, '2 lámpa felkapcsolt!');
    });
    test('Bal, alsó lámpát kapcsoljuk', (assert) => {
        this.lojatek.szomszedokValtoztatasa(6);
        assert.equal(this.lojatek.ellenorzes(), 2, '2 lámpa felkapcsolt!');
    });
    test('Jobb, alsó lámpát kapcsoljuk', (assert) => {
        this.lojatek.szomszedokValtoztatasa(8);
        assert.equal(this.lojatek.ellenorzes(), 2, '2 lámpa felkapcsolt!');
    });
    test('Jobb, szélső, középső lámpát kapcsoljuk', (assert) => {
        this.lojatek.szomszedokValtoztatasa(5);
        assert.equal(this.lojatek.ellenorzes(), 3, '3 lámpa felkapcsolt!');
    });
    test('Bal, szélső, középső lámpát kapcsoljuk', (assert) => {
        this.lojatek.szomszedokValtoztatasa(3);
        assert.equal(this.lojatek.ellenorzes(), 3, '3 lámpa felkapcsolt!');
    });
    test('Első sor, középső lámpát kapcsoljuk', (assert) => {
        this.lojatek.szomszedokValtoztatasa(1);
        assert.equal(this.lojatek.ellenorzes(), 3, '3 lámpa felkapcsolt!');
    });
    test('Alsó sor, középső lámpát kapcsoljuk', (assert) => {
        this.lojatek.szomszedokValtoztatasa(7);
        assert.equal(this.lojatek.ellenorzes(), 3, '3 lámpa felkapcsolt!');
                
        console.log("ezkell");
        console.log(lampak.length);
        console.log("ezkell");
    });
});