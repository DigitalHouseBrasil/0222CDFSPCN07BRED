import './Projects.scss';
import Card from '../../components/Card/Card';

function Projects() {
  return (
    <div className="projects">
      <Card
        title="Pomodoro"
        image="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-tecnica-pomodoro-um-metodo-gestao-tempo-5b4e0f6051f44.jpg"
        language="JavaScript"
      />
      <Card
        title="Store"
        image="https://i.insider.com/5ed95c393f7370198527eea3?width=700"
        language="Java"
      />
      <Card
        title="Playlist"
        image="data:image/png;base64,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"
        language="Python"
      />
      <Card
        title="RPG"
        image="https://i.pinimg.com/originals/de/38/7b/de387beab9637e066a3c484d080c81bb.jpg"
        language="C#"
      />
    </div>
  );
}

export default Projects;
