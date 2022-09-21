import './Contact.scss';

function Contact() {
  return (
    <div className="contact">
      <form>
        <fieldset>
          <legend>Contato</legend>
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="text" placeholder="Digite sua mensagem" />
          <input type="button" value="Enviar" />
        </fieldset>
      </form>
    </div>
  );
}

export default Contact;
