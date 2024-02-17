/*
        toplama, cixma, vurma, bolme ve bunlarin hamisini isleden 
        funksiyanin yazilmasi
        */

        // toplama

        const a = 25

        const b = 15

        function toplama() {

            const cem = a + b

            console.log("Ededlerin cemi:" + a + "+" + b +"=" + cem);
        }

        // cixma

        const c = 50

        const d = 45

        function cixma() {

            const ferq = c - d

            console.log("Ededlerin  ferqi: 50 - 45 = " + ferq);
        }

        // vurma

        const x = 4
        
        const y = 4

        const z = 2

        const v = 5

        const s = 6

        function vurma() {

            const hasil = x * y * z * v * s 

            console.log("Ededlerin hasili: 4 * 4 * 2 * 5 * 6 =  " + hasil);
        }

        // bolme

        const f = 12

        const g = 6

        function bolme() {

            const qismet = f / g

            console.log("Ededlerin qismeti: 12 / 6 = " + qismet);
        }

        // ededi orta

        const reqem1 = 1

        const reqem2 = 4

        const reqem3 = 6

        const reqem4 = 3

        const reqem5 = 11

        function edediorta() {

            const cem = reqem1 + reqem2 + reqem3 + reqem4 + reqem5

            const say = 5

            const netice = cem / say

            console.log("Ededi orta: " + netice);

            alert("Ededi orta: " + netice);
        }

        // butun emeliyatlar

        function hamisi() {

            toplama();

            cixma();

            vurma();

            bolme();

            edediorta();

            console.log("Bütün əməliyatlar butonuna klik edəndə, hər bir  əməliyatı ardıcıl olaraq  ekrana yazır");
        }