const centralLatLong= [-43.9397233,-19.9332786]

       
 
        let map;

        window.onload = () => {
            // carregaDados();
            getBHTRANSData ()
        }

        function getBHTRANSData () {
            fetch ('http://localhost:3000/bus')
            .then (response => response.json())
            .then (data => {
                linhas = data.map (elem => { 
                    return { linha: elem.EV, latlong: [ elem.LT, elem.LG ] } 
                })
            })
            .catch (erro => alert ('Ocorreu um erro: ' + erro.message))
        }

        function plotarBus (dadosLocais) {
      
            mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tbWVsY2FybmVpcm8tcHVjIiwiYSI6ImNsb3ZuMTBoejBsd2gyamwzeDZzcWl5b3oifQ.VPWc3qoyon8Z_-URfKpvKg';
            map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v12',
                center: centralLatLong,
                zoom: 9
            });

            dadosLocais.forEach ((uni) => {
                let popup = new mapboxgl.Popup({ offset: 25 })
                    .setHTML(`<h3>Linha: ${uni.linha}</h3>`);
                const marker = new mapboxgl.Marker({ color: uni.cor })
                    .setLngLat(uni.latlong)
                    .setPopup(popup)
                    .addTo(map);     
            }) 

          
            navigator.geolocation.getCurrentPosition (processarGetCurrentPosition, () => { alert ('Erro ao obter localização.') })
        }



        function carregaDados () {
            fetch('../data/mapa.json')
            .then(response => response.json())
            .then(data => {
                montarMapa(data.locais);
            })
            .catch(error => {
                alert('Erro ao obter dados do servidor:' + error.message);
            })
        }



        function montarMapa (dadosLocais) {
      
            mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tbWVsY2FybmVpcm8tcHVjIiwiYSI6ImNsb3ZuMTBoejBsd2gyamwzeDZzcWl5b3oifQ.VPWc3qoyon8Z_-URfKpvKg';
            map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v12',
                center: centralLatLong,
                zoom: 9
            });

            dadosLocais.forEach ((uni) => {
                let popup = new mapboxgl.Popup({ offset: 25 })
                    .setHTML(`<h3><a href="${uni.url}" target="_blank">${uni.descricao}</a></h3><br>
                              ${uni.endereco} <br> ${uni.cidade}`);
                const marker = new mapboxgl.Marker({ color: uni.cor })
                    .setLngLat(uni.latlong)
                    .setPopup(popup)
                    .addTo(map);     
            }) 

          
            navigator.geolocation.getCurrentPosition (processarGetCurrentPosition, () => { alert ('Erro ao obter localização.') })
        }

        function processarGetCurrentPosition (local) {
          let popup = new mapboxgl.Popup({ offset: 25 })
              .setHTML(`<h3> Estou aqui!!! </h3>`);
          const marker = new mapboxgl.Marker({ color: 'yellow' })
              .setLngLat([local.coords.longitude, local.coords.latitude])
              .setPopup(popup)
              .addTo(map);  
        }