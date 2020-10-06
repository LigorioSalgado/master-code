const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module:{
        rules:[ //Aqui voy a caragar todos los loader que necesito para que webpack trabaje como quiera
            {
                test: /\.html$/, // expresion regular ---> busca todos los archivos que terminen en .html
                use : [
                    {
                        loader: "html-loader", //Este va a traducir todo el html para que webpack lo entienda
                        options: {minimize:true}
                    }
                ]
                //test ---> que tengo que buscar
                //use ----> de lo que encontre que loader voy a aplicar
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html", //Que archivo de html va a ser el base para mi proyecto
            filename:"./index.html"// Que unico archivo de html se va a generar
        })
    ]

}