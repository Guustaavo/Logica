import leia from 'readline-sync';

var usuarios = [];
for (var i = 0; i < 3; i++) {
    console.log("-------USUARIO 0" + i + "--------")
    var nome = leia.question("DIGITE SEU NOME: ");
    var idade = leia.questionInt("DIGITE SUA IDADE: ");
    var email = leia.question("DIGITE SEU EMAIL: ");

    usuarios.push({
        nome,
        idade,
        email
    });
}

console.log(usuarios[2].email);

usuarios.forEach(usuario => {
    mostrarUsuario(usuario)
})

export function mostrarUsuario(user) {
    var { nome, email, idade } = user;
    console.log(`Olá ${nome} você tem ${idade} anos, seu email é ${email}`)
}


// var user = {
//     nome: "Gustavo",
//     email: "gustavo@gmail.com",
//     senha: "12345567",
//     hello: () => console.log("HELLOWWWWW")
// }

// console.log(user);
// user.nome = "Mariazinha";
// console.log(user)