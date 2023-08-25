
        async function listarPokemons1(){
            try {

                pokedex1.innerHTML = '<option>Aguarde...</option>';

                let request = await fetch('https://pokeapi.co/api/v2/pokemon/');
                let response = await request.json();

                if(!response.results){
                    throw new Error("Erro de listagem");
                    return;
                }

                pokedex1.innerHTML = '';

                response.results.forEach(item => {
                    pokedex1.innerHTML += `
                        <option value="${item.url}">${item.name}</option>
                    `;
                })
            } catch (error) {
                alert(error);
            }
        } listarPokemons1();



        async function pokemonInfo1(){
            try {
                
                let request = await fetch(pokedex1.value);
                let response = await request.json();

                foto1.setAttribute('src', response.sprites.front_default);
                let n = response.name
                n = n[0].toUpperCase() + n.slice(1)
                nome1.innerHTML = n
                
                numero1.innerHTML = response.id

                let abi1 = response.abilities[0].ability.name
                    abi1 = abi1[0].toUpperCase() + abi1.slice(1)
                let informacao = document.getElementById('info')
                
                
                
                if( response.abilities[1] == null){
                    att1_1.innerHTML = " "
                    att2_1.innerHTML = abi1
                    elemento1_2.innerHTML = elemento1_1.innerHTML
                    textAtt1_2.innerHTML = textAtt1_1.innerHTML
                    elemento1_1.innerHTML = " "
                    textAtt1_1.innerHTML= " "
                    informacao.style.top = 186 + 'px'

                    } else {
                        let abi2 = response.abilities[1].ability.name
                        abi2 = abi2[0].toUpperCase() + abi2.slice(1)

                        att1_1.innerHTML = abi1 
                        elemento1_1.innerHTML = "Power01"
                        textAtt1_1.innerHTML= "Aqui uma breve explicação do ataque 01."

                        att2_1.innerHTML = abi2
                        elemento1_2.innerHTML = "Power02"
                        textAtt1_2.innerHTML= "Aqui uma breve explicação do ataque 02."

                        informacao.style.top = 148 + 'px';
                };

                    description.innerHTML= 'Descrição:'
                    historia.innerHTML =''

                if(n == 'Bulbasaur'){
                    historia.innerHTML ='Um Bulbasaur geralmente descansa em lugares claros para que sua lâmpada possa absorver a luz solar. Pode ser visto cochilando sob a luz do sol.';
                    let cartao = document.getElementById('card')
                    cartao.classList.add('bulba');

                } else if (n == 'Ivysaur'){
                    historia.innerHTML = 'Ivysaur é capaz de aprender naturalmente o poderoso ataque do tipo grama Solar Beam.'
                } else if(n == 'Venusaur'){
                    historia.innerHTML = 'Venusaur absorve a luz solar para ganhar energia e alimentar sua flor, localizada em suas costas. Depois de ganhar uma certa quantidade de luz solar, a flor libera um aroma doce que acalma as emoções das pessoas.'
                } else if(n == 'Charmander'){
                    historia.innerHTML = 'Charmander é um Pokémon reptiliano bípede com corpo principalmente laranja e olhos azuis. Sua parte inferior do peito para baixo e as solas dos pés são de cor creme.'
                } else if(n == 'Charmeleon'){
                    historia.innerHTML = 'Charmeleon, como suas outras formas evolutivas, pode cuspir fogo naturalmente. Seus poderes, porém, são muito maiores que os de Charmander, mas não tão grandes quanto os de Charizard.'
                } else if (n == 'Charizard'){
                    historia.innerHTML = 'Charizard é um grande Pokémon semelhante a um dragão que difere muito de sua forma pré-evoluída.'
                } else {
                    historia.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur et, illum dolorum aliquid dolorem porro.Consequatur et, illum dolorum aliquid dolorem porro.'
                }
            } catch (error) {
                alert(error)
            };
        };