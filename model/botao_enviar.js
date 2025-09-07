function enviarMensagem() {
  ProgressEvent.defaultPrevented();
  const nome = document.getElementById("nome");
  const mensagem = document.getElementById("mensagem");

  const telefone = "";

  const texto = `Olá, me chamo ${nome.value}, ${mensagem.value}`;

  const link = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(
    texto
  )}`;
  return window.open(link, "_blank");
}
